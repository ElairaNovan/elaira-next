import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabase-server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);



function normalizeEmail(input: string) {
  return input.trim().toLowerCase();
}

function isValidEmail(email: string) {
  // intentionally simple; we only need a basic sanity check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const emailRaw = body?.email;

await resend.emails.send({
  from: "Elaira Novan <onboarding@resend.dev>",
  to: "test@example.com", // ← поставь СВОЮ почту
  subject: "Resend test",
  html: "<p>Resend works ✅</p>",
});


    if (typeof emailRaw !== "string") {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }

    const email = normalizeEmail(emailRaw);

    if (!isValidEmail(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // 1) Upsert subscriber as pending (do not reveal if already subscribed)
    const { error: upsertError } = await supabaseServer
      .from("subscribers")
      .upsert(
        { email, status: "pending" },
        { onConflict: "email" }
      );

    if (upsertError) {
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
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
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
    }

    // For now we don't send email yet; next step will handle it.
    // We'll return the token only in development to test flows locally.
    const isDev = process.env.NODE_ENV !== "production";

    return NextResponse.json({
      ok: true,
      ...(isDev ? { dev_confirm_token: token } : {}),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
