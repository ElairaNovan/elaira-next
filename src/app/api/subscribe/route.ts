// src/app/api/subscribe/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function normalizeEmail(input: string) {
  return input.trim().toLowerCase();
}

function isValidEmail(email: string) {
  // basic sanity check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function getSiteUrl() {
  // В проде используй SITE_URL (например https://www.elairanovan.com)
  // В dev можно использовать NEXT_PUBLIC_SITE_URL или localhost
  return (
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "http://localhost:3000"
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => null);
    const emailRaw = body?.email;

    if (typeof emailRaw !== "string") {
      return NextResponse.json(
        { ok: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    const email = normalizeEmail(emailRaw);

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Invalid email" },
        { status: 400 }
      );
    }

    // 1) Upsert subscriber as pending
    const { error: upsertError } = await supabaseServer
      .from("subscribers")
      .upsert({ email, status: "pending" }, { onConflict: "email" });

    if (upsertError) {
      return NextResponse.json(
        { ok: false, error: "Database error" },
        { status: 500 }
      );
    }

    // 2) Create confirmation token (store only hash)
    const token = crypto.randomBytes(32).toString("hex");
    const tokenHash = sha256Hex(token);

    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 3); // 3 days

    const { error: tokenError } = await supabaseServer
      .from("email_tokens")
      .insert({
        email,
        type: "confirm",
        token_hash: tokenHash,
        expires_at: expiresAt.toISOString(),
      });

    if (tokenError) {
      return NextResponse.json(
        { ok: false, error: "Database error" },
        { status: 500 }
      );
    }

    // 3) Send confirmation email
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { ok: false, error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const siteUrl = getSiteUrl();
    const confirmUrl = `${siteUrl}/api/confirm?token=${token}`;

    await resend.emails.send({
      from: "Elaira Novan <onboarding@resend.dev>",
      to: email,
      subject: "Confirm your subscription",
      html: `
        <h2>Confirm your subscription</h2>
        <p>You requested to receive updates from Elaira Novan.</p>
        <p>
          <a href="${confirmUrl}">Confirm subscription</a>
        </p>
        <p>If you didn’t request this, just ignore this email.</p>
      `,
    });

    // (опционально) возвращаем токен только в dev
    const isDev = process.env.NODE_ENV !== "production";

    return NextResponse.json({
      ok: true,
      ...(isDev ? { dev_confirm_token: token, dev_confirm_url: confirmUrl } : {}),
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 }
    );
  }
}
