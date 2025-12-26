// src/app/api/confirm/route.ts
import { NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseServer } from "@/lib/supabase-server";

function sha256Hex(value: string) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function redirectTo(req: Request, status: string) {
  // Важно: берём базу из текущего запроса (никакого localhost)
  return NextResponse.redirect(new URL(`/confirmed?status=${status}`, req.url));
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return redirectTo(req, "invalid");
    }

    const tokenHash = sha256Hex(token);

    // 1) Load token row
    const { data: tokenRow, error: tokenErr } = await supabaseServer
      .from("email_tokens")
      .select("id, email, type, expires_at, used_at")
      .eq("token_hash", tokenHash)
      .maybeSingle();

    if (tokenErr) {
      return redirectTo(req, "invalid");
    }

    if (!tokenRow || tokenRow.type !== "confirm") {
      return redirectTo(req, "invalid");
    }

    if (tokenRow.used_at) {
      return redirectTo(req, "already");
    }

    const expiresAt = new Date(tokenRow.expires_at);
    if (Number.isNaN(expiresAt.getTime()) || expiresAt.getTime() < Date.now()) {
      return redirectTo(req, "expired");
    }

    // 2) Mark token as used
    const { error: markUsedErr } = await supabaseServer
      .from("email_tokens")
      .update({ used_at: new Date().toISOString() })
      .eq("id", tokenRow.id);

    if (markUsedErr) {
      return redirectTo(req, "invalid");
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
      return redirectTo(req, "invalid");
    }

    // ✅ Success -> nice page
    return redirectTo(req, "confirmed");
  } catch {
    return redirectTo(req, "invalid");
  }
}
