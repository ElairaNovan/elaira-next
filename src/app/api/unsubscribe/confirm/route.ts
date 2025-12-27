import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabase-server";

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function redirectTo(req: Request, status: string) {
  return NextResponse.redirect(new URL(`/unsubscribe?status=${status}`, req.url));
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return redirectTo(req, "invalid");
    }

    const tokenHash = sha256Hex(token);

    const { data: tokenRow, error: tokenErr } = await supabaseServer
      .from("email_tokens")
      .select("id, email, type, expires_at, used_at")
      .eq("token_hash", tokenHash)
      .maybeSingle();

    if (tokenErr) {
      return redirectTo(req, "invalid");
    }

    if (!tokenRow || tokenRow.type !== "unsubscribe") {
      return redirectTo(req, "invalid");
    }

    if (tokenRow.used_at) {
      return redirectTo(req, "already");
    }

    const expiresAt = new Date(tokenRow.expires_at);
    if (Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() < Date.now()) {
      return redirectTo(req, "expired");
    }

    // Mark token as used
    const { error: markUsedErr } = await supabaseServer
      .from("email_tokens")
      .update({ used_at: new Date().toISOString() })
      .eq("id", tokenRow.id);

    if (markUsedErr) {
      return redirectTo(req, "invalid");
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
      return redirectTo(req, "invalid");
    }

    return redirectTo(req, "success");
  } catch {
    return redirectTo(req, "invalid");
  }
}
