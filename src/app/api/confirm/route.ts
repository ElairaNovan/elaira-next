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

    // 1) Load token row
    const { data: tokenRow, error: tokenErr } = await supabaseServer
      .from("email_tokens")
      .select("id, email, type, expires_at, used_at")
      .eq("token_hash", tokenHash)
      .maybeSingle();

    if (tokenErr) {
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
    }

    if (!tokenRow || tokenRow.type !== "confirm") {
      return NextResponse.json({ ok: false, error: "Invalid token" }, { status: 400 });
    }

    if (tokenRow.used_at) {
      return NextResponse.json({ ok: false, error: "Token already used" }, { status: 400 });
    }

    const expiresAt = new Date(tokenRow.expires_at);
    if (Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() < Date.now()) {
      return NextResponse.json({ ok: false, error: "Token expired" }, { status: 400 });
    }

    // 2) Mark token as used
    const { error: markUsedErr } = await supabaseServer
      .from("email_tokens")
      .update({ used_at: new Date().toISOString() })
      .eq("id", tokenRow.id);

    if (markUsedErr) {
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
    }

    // 3) Activate subscriber (idempotent)
    const { error: activateErr } = await supabaseServer
      .from("subscribers")
      .update({
        status: "active",
        confirmed_at: new Date().toISOString(),
      })
      .eq("email", tokenRow.email);

    if (activateErr) {
      return NextResponse.json({ ok: false, error: "Database error" }, { status: 500 });
    }

    // For now: return JSON (later we’ll redirect to a nice “Confirmed” page)
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
