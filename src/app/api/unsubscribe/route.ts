import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabase-server";

function normalizeEmail(input: string) {
  return input.trim().toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function redirectTo(req: Request, status: string) {
  const origin = new URL(req.url).origin;
  return NextResponse.redirect(`${origin}/unsubscribe?status=${status}`);
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) return redirectTo(req, "invalid");

    const tokenHash = sha256Hex(token);

    const { data: tokenRow, error: tokenErr } = await supabaseServer
      .from("email_tokens")
      .select("id, email, type, expires_at, used_at")
      .eq("token_hash", tokenHash)
      .maybeSingle();

    if (tokenErr) return redirectTo(req, "invalid");
    if (!tokenRow || tokenRow.type !== "unsubscribe") return redirectTo(req, "invalid");

    if (tokenRow.used_at) return redirectTo(req, "already");

    const expiresAt = new Date(tokenRow.expires_at);
    if (Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() < Date.now()) {
      return redirectTo(req, "expired");
    }

    // 1) mark token as used
    const { error: markUsedErr } = await supabaseServer
      .from("email_tokens")
      .update({ used_at: new Date().toISOString() })
      .eq("id", tokenRow.id);

    if (markUsedErr) return redirectTo(req, "invalid");

    // 2) unsubscribe subscriber (idempotent)
    const nowIso = new Date().toISOString();
    const { error: unsubErr } = await supabaseServer
      .from("subscribers")
      .update({
        status: "unsubscribed",
        unsubscribed_at: nowIso,
      })
      .eq("email", tokenRow.email);

    if (unsubErr) return redirectTo(req, "invalid");

    return redirectTo(req, "success");
  } catch {
    return redirectTo(req, "invalid");
  }
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

    // We do not reveal whether the email exists in our list.
    // Always behave the same.

    const token = crypto.randomBytes(32).toString("hex");
    const tokenHash = sha256Hex(token);

    const expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days

    const { error: tokenError } = await supabaseServer.from("email_tokens").insert({
      email,
      type: "unsubscribe",
      token_hash: tokenHash,
      expires_at: expiresAt.toISOString(),
    });

    if (tokenError) {
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
    }

    const isDev = process.env.NODE_ENV !== "production";

    return NextResponse.json({
      ok: true,
      ...(isDev ? { dev_unsubscribe_token: token } : {}),
    });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
