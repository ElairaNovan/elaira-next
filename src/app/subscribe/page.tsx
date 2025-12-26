// src/app/subscribe/page.tsx
"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Status =
  | { type: "idle" }
  | { type: "loading" }
  | { type: "success"; email: string }
  | { type: "error"; message: string };

function isValidEmail(email: string) {
  // простой и безопасный email-check (не идеальный, но достаточно для UX)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const emailTrim = useMemo(() => email.trim(), [email]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!emailTrim) {
      setStatus({ type: "error", message: "Please enter your email." });
      return;
    }

    if (!isValidEmail(emailTrim)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    setStatus({ type: "loading" });

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: emailTrim }),
      });

      // Мы делаем UX “мягким”:
      // даже если email уже существует, backend может вернуть 200/ok —
      // всё равно показываем “Check your inbox”.
      if (!res.ok) {
        // попробуем прочитать message
        let message = "Something went wrong. Please try again.";
        try {
          const data = await res.json();
          if (typeof data?.error === "string") message = data.error;
          if (typeof data?.message === "string") message = data.message;
        } catch {}
        setStatus({ type: "error", message });
        return;
      }

      setStatus({ type: "success", email: emailTrim });
    } catch {
      setStatus({ type: "error", message: "Network error. Please try again." });
    }
  }

  const isBusy = status.type === "loading";

  return (
    <main className="min-h-screen relative">
      {/* мягкий отдельный фон (не как общий “космос”) */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(900px 700px at 50% 15%, rgba(130,210,255,0.10), transparent 60%)," +
            "radial-gradient(800px 600px at 50% 110%, rgba(0,0,0,0.90), rgba(0,0,0,1))," +
            "linear-gradient(180deg, rgba(5,7,11,1) 0%, rgba(3,5,8,1) 100%)",
        }}
      />

      <section className="relative z-10 site-frame pt-20 pb-24">
        {/* back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back
        </Link>

        <div className="mt-10 max-w-[38rem]">
          <p className="text-[11px] tracking-[0.22em] uppercase text-[#9fb3d9]/80">
            SUBSCRIBE
          </p>

          <h1 className="mt-3 text-[34px] leading-[1.12] text-[#e9f3ff]">
            Receive updates
          </h1>

          <p className="mt-4 text-[15px] leading-[1.75] text-white/70">
            Receive a note when a new publication is released.
          </p>

          {/* card */}
          <div
            className="
              mt-8 rounded-[18px] border border-white/10
              bg-[#05070b]/70 backdrop-blur-xl
              shadow-[0_0_30px_rgba(0,246,255,0.08)]
              p-5 sm:p-6
            "
          >
            {status.type !== "success" ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <label className="block">
                  <span className="block text-sm text-white/80 mb-2">
                    Email
                  </span>

                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="
                      w-full h-12 rounded-xl px-4
                      bg-black/40 border border-white/10
                      text-white/90 placeholder:text-white/35
                      outline-none
                      focus:border-cyan-200/35 focus:ring-2 focus:ring-cyan-200/10
                      transition
                    "
                    disabled={isBusy}
                  />
                </label>

                <button
                  type="submit"
                  disabled={isBusy}
                  className="
                    w-full h-12 rounded-xl
                    border border-cyan-100/25
                    bg-[#0b1422]
                    text-cyan-50/90
                    hover:bg-[#0e1b2e]
                    active:scale-[0.99]
                    transition
                    disabled:opacity-60 disabled:cursor-not-allowed
                  "
                >
                  {isBusy ? "Sending…" : "Subscribe"}
                </button>

                {/* status messages */}
                {status.type === "error" && (
                  <p className="text-sm text-red-200/90">
                    {status.message}
                  </p>
                )}

                <p className="text-[12px] leading-[1.6] text-white/45">
                  You’ll receive a confirmation email (double opt-in). No spam.
                </p>
              </form>
            ) : (
              <div className="space-y-3">
                <p className="text-white/90 text-[16px] leading-[1.6]">
                  ✅ Check your inbox.
                </p>

                <p className="text-white/70 text-[14px] leading-[1.7]">
                  We sent a confirmation link to{" "}
                  <span className="text-white/90">{status.email}</span>.
                  <br />
                  If you don’t see it, check Spam/Promotions.
                </p>

                <button
                  type="button"
                  className="
                    mt-2 inline-flex items-center justify-center
                    h-11 px-4 rounded-xl
                    border border-white/10
                    bg-black/30 text-white/80
                    hover:bg-black/40 transition
                  "
                  onClick={() => {
                    setEmail("");
                    setStatus({ type: "idle" });
                  }}
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
