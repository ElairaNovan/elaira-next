import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabase-server";

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return NextResponse.json({ ok: false, error: "Missing token" }, { status: 400 });
    }

    const tokenHash = sha256Hex(token);

    const { data: tokenRow, error: tokenErr } = await supabaseServer
      .from("email_tokens")
      .select("id, email, type, expires_at, used_at")
      .eq("token_hash", tokenHash)
      .maybeSingle();

    if (tokenErr) {
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
    }

    if (!tokenRow || tokenRow.type !== "unsubscribe") {
      return NextResponse.json({ ok: false, error: "Invalid token" }, { status: 400 });
    }

    if (tokenRow.used_at) {
      return NextResponse.json({ ok: false, error: "Token already used" }, { status: 400 });
    }

    const expiresAt = new Date(tokenRow.expires_at);
    if (Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() < Date.now()) {
      return NextResponse.json({ ok: false, error: "Token expired" }, { status: 400 });
    }

    // Mark token as used
    const { error: markUsedErr } = await supabaseServer
      .from("email_tokens")
      .update({ used_at: new Date().toISOString() })
      .eq("id", tokenRow.id);

    if (markUsedErr) {
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
    }

    // Unsubscribe subscriber (idempotent)
    const nowIso = new Date().toISOString();
    const { error: unsubErr } = await supabaseServer
      .from("subscribers")
      .update({
        status: "unsubscribed",
        unsubscribed_at: nowIso,
      })
      .eq("email", tokenRow.email);

    if (unsubErr) {
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
