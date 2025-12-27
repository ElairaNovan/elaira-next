// scripts/send-publication.ts
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { Resend } from "resend";
import { publications } from "../src/content/publications";
import { supabaseServer } from "../src/lib/supabase-server";
import { buildPublicationEmail } from "../src/lib/email-template";
import crypto from "crypto";



/**
 * Ensures an env var is present and returns it as a string.
 * This also fixes TypeScript "string | undefined" issues.
 */
function requireEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing ${name}`);
  return v;
}

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}


const resendApiKey = requireEnv("RESEND_API_KEY");
const FROM_EMAIL = requireEnv("RESEND_FROM_EMAIL");

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  "http://localhost:3000";

const DRY_RUN = process.env.DRY_RUN === "true";

const resend = new Resend(resendApiKey);

async function run() {
  console.log(`SITE_URL: ${SITE_URL}`);
  console.log(`DRY_RUN: ${DRY_RUN ? "true" : "false"}`);

  const toNotify = publications.filter((p) => p.publishedAt && p.notify === true);

  if (toNotify.length === 0) {
    console.log("No publications to notify");
    return;
  }

  for (const pub of toNotify) {
    console.log(`\nProcessing publication: ${pub.id}`);

    const { data: alreadySent, error: alreadyErr } = await supabaseServer
      .from("notifications_sent")
      .select("publication_id")
      .eq("publication_id", pub.id)
      .maybeSingle();

    if (alreadyErr) {
      console.error("Failed to check notifications_sent", alreadyErr);
      continue;
    }

    if (alreadySent) {
      console.log(`Already notified: ${pub.id}`);
      continue;
    }

    const { data: subscribers, error } = await supabaseServer
  .from("subscribers")
  .select("email")
  .eq("status", "confirmed");


    if (error) {
      console.error("Failed to fetch subscribers", error);
      continue;
    }

    const list = (subscribers ?? [])
      .map((s) => s.email)
      .filter((e): e is string => typeof e === "string" && e.length > 0);

    console.log(`Subscribers: ${list.length}`);

    if (list.length === 0) {
      console.log("No active subscribers. Skip.");
      continue;
    }

    let failed = 0;
    let sent = 0;

    for (const email of list) {
      try {
        const pubUrl = new URL(pub.url, SITE_URL).toString();
        const unsubToken = crypto.randomBytes(32).toString("hex");
const unsubTokenHash = sha256Hex(unsubToken);
const unsubExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7).toISOString(); // 7 days

const { error: unsubTokenErr } = await supabaseServer.from("email_tokens").insert({
  email,
  type: "unsubscribe",
  token_hash: unsubTokenHash,
  expires_at: unsubExpiresAt,
});

if (unsubTokenErr) {
  throw new Error(`Failed to create unsubscribe token: ${unsubTokenErr.message}`);
}

const unsubscribeUrl = `${SITE_URL}/api/unsubscribe/confirm?token=${unsubToken}`;

        const { subject, html, text } = buildPublicationEmail({
          subject: `New publication — ${pub.title}`,
          intro: pub.excerpt || "A new text is now live on Elaira Novan.",
          title: pub.title,
          url: pubUrl,
          unsubscribeUrl,
        });

        // Preview (важно)
        console.log("\n--- Email preview ---");
        console.log(`to: ${email}`);
        console.log(`subject: ${subject}`);
        console.log(`pubUrl: ${pubUrl}`);
        console.log(`unsubscribeUrl: ${unsubscribeUrl}`);
        console.log(`textPreview: ${text.slice(0, 160).replace(/\n/g, " ")}...`);
        console.log("--- end preview ---\n");

        if (DRY_RUN) {
          console.log(`DRY_RUN=true → skipping send to ${email}`);
          continue;
        }

        await resend.emails.send({
          from: FROM_EMAIL,
          to: email,
          subject,
          html,
          text,
        });

        sent += 1;
      } catch (err) {
        failed += 1;
        console.error(`Failed to send to ${email}`, err);
      }
    }

    console.log(`Send result for ${pub.id}: sent=${sent}, failed=${failed}`);

    if (DRY_RUN) {
      console.log("DRY_RUN=true → not marking as notified.");
      continue;
    }

    if (failed === 0) {
      const { error: insErr } = await supabaseServer
        .from("notifications_sent")
        .insert({ publication_id: pub.id });

      if (insErr) {
        console.error("Failed to insert notifications_sent", insErr);
        continue;
      }

      console.log(`Marked as notified: ${pub.id}`);
    } else {
      console.log(
        `Not marking as notified because some emails failed (pub=${pub.id}).`
      );
    }
  }
}

run()
  .then(() => {
    console.log("\nDone");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
