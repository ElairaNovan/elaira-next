import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabase-server";

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function redirectTo(req: Request, status: string) {
  const origin = new URL(req.url).origin;
  return NextResponse.redirect(`${origin}/subscribe?status=${status}`);
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

    // ✅ confirm должен принимать только confirm-токены
    if (!tokenRow || tokenRow.type !== "confirm") return redirectTo(req, "invalid");

    if (tokenRow.used_at) return redirectTo(req, "already");

    const expiresAt = new Date(tokenRow.expires_at);
    if (Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() < Date.now()) {
      return redirectTo(req, "expired");
    }

    // 1) mark token used
    const { error: markUsedErr } = await supabaseServer
      .from("email_tokens")
      .update({ used_at: new Date().toISOString() })
      .eq("id", tokenRow.id);

    if (markUsedErr) return redirectTo(req, "invalid");

    // 2) confirm subscriber (idempotent)
    const nowIso = new Date().toISOString();
    const { error: confirmErr } = await supabaseServer
      .from("subscribers")
      .update({
        status: "confirmed",
        confirmed_at: nowIso,
        unsubscribed_at: null, // если человек вернулся — считаем подписанным снова
      })
      .eq("email", tokenRow.email);

    if (confirmErr) return redirectTo(req, "invalid");

    return redirectTo(req, "confirmed");
  } catch {
    return redirectTo(req, "invalid");
  }
}
