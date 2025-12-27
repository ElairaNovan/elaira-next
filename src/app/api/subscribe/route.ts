import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function normalizeEmail(input: string) {
  return input.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function getOriginFromRequest(req: Request) {
  // Vercel прокидывает x-forwarded-*
  const proto = req.headers.get("x-forwarded-proto") ?? "https";
  const host =
    req.headers.get("x-forwarded-host") ??
    req.headers.get("host");

  if (host) return `${proto}://${host}`;

  // крайний fallback (на случай очень странной среды)
  return process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const emailRaw = body?.email;

    if (typeof emailRaw !== "string") {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    const email = normalizeEmail(emailRaw);

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // 1) Upsert subscriber as pending
    const { error: upsertError } = await supabaseServer
      .from("subscribers")
      .upsert({ email, status: "unconfirmed" }, { onConflict: "email" });



    if (upsertError) {
  return NextResponse.json(
    { ok: false, error: upsertError.message, details: upsertError.details, hint: upsertError.hint },
    { status: 500 }
  );
}


    // 2) Create confirmation token (store only hash)
    const token = crypto.randomBytes(32).toString("hex");
    const tokenHash = sha256Hex(token);
    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3); // 3 days

    const { error: tokenError } = await supabaseServer.from("email_tokens").insert({
      email,
      type: "confirm",
      token_hash: tokenHash,
      expires_at: expiresAt.toISOString(),
    });

    if (tokenError) {
  return NextResponse.json(
    { ok: false, error: tokenError.message, details: tokenError.details, hint: tokenError.hint },
    { status: 500 }
  );
}


    // ✅ 3) Build confirm URL from real request origin (no localhost in prod)
    const origin = process.env.SITE_URL || getOriginFromRequest(req);
    const confirmUrl = `${origin}/api/confirm?token=${token}`;

// create unsubscribe token
const unsubscribeToken = crypto.randomBytes(32).toString("hex");
const unsubscribeTokenHash = sha256Hex(unsubscribeToken);
const unsubscribeExpiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30); // 30 days

await supabaseServer.from("email_tokens").insert({
  email,
  type: "unsubscribe",
  token_hash: unsubscribeTokenHash,
  expires_at: unsubscribeExpiresAt.toISOString(),
});

const unsubscribeUrl = `${origin}/api/unsubscribe?token=${unsubscribeToken}`;



    await resend.emails.send({
  from: "Elaira Novan <hello@elairanovan.com>",
  to: email,
  subject: "Confirm your subscription",

  text: `Confirm your subscription.
You requested to receive updates from Elaira Novan.

Confirm subscription:
${confirmUrl}

If you didn't request this, just ignore this email.

Unsubscribe:
${unsubscribeUrl}
`,

  html: `
    <h2>Confirm your subscription</h2>

    <p>You requested to receive updates from Elaira Novan.</p>

    <p>
      <a href="${confirmUrl}">Confirm subscription</a>
    </p>

    <hr style="margin:24px 0;border:none;border-top:1px solid #e5e7eb;" />

    <p style="font-size:13px;color:#6b7280;">
      If you no longer wish to receive these emails, you can
      <a href="${unsubscribeUrl}" style="color:#6b7280;text-decoration:underline;">
        unsubscribe here
      </a>.
    </p>
  `,
});


    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
