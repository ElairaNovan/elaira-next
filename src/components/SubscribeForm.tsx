"use client";

import { useMemo, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

function isValidEmail(email: string) {
  // Достаточно строгая проверка для UI (не "идеальная", но практичная)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  const canSubmit = useMemo(() => {
    const e = email.trim();
    return status !== "loading" && e.length > 0 && isValidEmail(e);
  }, [email, status]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    const eTrim = email.trim();

    if (!isValidEmail(eTrim)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: eTrim }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        // Пытаемся показать понятную ошибку, если API её вернул
        const apiMsg =
          data?.error ||
          data?.message ||
          "Something went wrong. Please try again.";
        setStatus("error");
        setMessage(apiMsg);
        return;
      }

      setStatus("success");
      setMessage(
        "Check your inbox to confirm your subscription. If you don’t see it, check Spam/Promotions."
      );
      // по желанию — очистить поле:
      // setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={onSubmit} className="w-full">
        <div className="flex flex-col gap-3">
          <label className="text-[11px] tracking-[0.22em] uppercase text-[#9fb3d9]/80">
            Subscribe to new publications
          </label>

          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status !== "idle") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              className="w-full sm:flex-1 rounded-xl bg-black/30 border border-white/10 px-4 py-3 text-[14px] text-[#e9f3ff]/90 placeholder:text-[#9fb3d9]/55 outline-none focus:border-[#9fb3d9]/50"
            />

            <button
              type="submit"
              disabled={!canSubmit}
              className="rounded-xl px-5 py-3 text-[14px] bg-[#1b2a44] text-[#e9f3ff] border border-white/10 hover:border-[#9fb3d9]/40 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Sending..." : "Subscribe"}
            </button>
          </div>

          <p className="text-[12px] leading-[1.6] text-white/55">
            We’ll email you only when a new publication is released. Unsubscribe anytime.
          </p>

          {message ? (
            <div
              className={[
                "mt-1 rounded-xl border px-4 py-3 text-[13px] leading-[1.6]",
                status === "success"
                  ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-50"
                  : "border-rose-400/20 bg-rose-400/10 text-rose-50",
              ].join(" ")}
              role="status"
            >
              {message}
            </div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
