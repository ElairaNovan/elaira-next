"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import ENFullLogo from "./ENFullLogo";
import MobileMenu from "./MobileMenu";

function isDesktop(): boolean {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 768px)").matches
  );
}

export default function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const aboutWrapRef = useRef<HTMLDivElement | null>(null);

  // закрытие dropdown по клику вне
  useEffect(() => {
    function onDocClick(e: MouseEvent | TouchEvent) {
      if (!aboutWrapRef.current) return;
      const target = e.target as Node;
      if (!aboutWrapRef.current.contains(target)) setAboutOpen(false);
    }

    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("touchstart", onDocClick);

    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("touchstart", onDocClick);
    };
  }, []);

  return (
    <>
      <header
        className="relative z-50"
        style={{
          background:
            "radial-gradient(circle at 50% 120%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
        }}
      >
        <div className="w-full max-w-[1500px] mx-auto px-6 pt-4 md:pt-8">
          {/* ОДИН логотип на все устройства (важно!) */}
          <div className="relative flex items-start justify-between">
            {/* LEFT (desktop): logo + anchors */}
            <div className="flex flex-col items-start">
              {/* На mobile делаем центр через absolute */}
              <div className="md:static md:translate-x-0 md:transform-none absolute left-1/2 -translate-x-1/2 top-0">
                <ENFullLogo />
              </div>

              {/* ANCHORS — только desktop */}
              <div className="mt-3 hidden md:flex items-center gap-8">
                <a
                  href="/#essence"
                  className="text-[0.78rem] tracking-[0.22em] uppercase text-white/60 hover:text-cyan-100 transition"
                >
                  Essence
                </a>
                <a
                  href="/#philosophy"
                  className="text-[0.78rem] tracking-[0.22em] uppercase text-white/60 hover:text-cyan-100 transition"
                >
                  Philosophy
                </a>
                <a
                  href="/#research"
                  className="text-[0.78rem] tracking-[0.22em] uppercase text-white/60 hover:text-cyan-100 transition"
                >
                  Research
                </a>
                <a
                  href="/#footer"
                  className="text-[0.78rem] tracking-[0.22em] uppercase text-white/60 hover:text-cyan-100 transition"
                >
                  Vision
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-start gap-5">
              {/* MOBILE: burger */}
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                className="md:hidden h-11 w-11 rounded-full border border-cyan-100/20 text-cyan-50/85 grid place-items-center active:scale-95 transition"
                aria-label="Open menu"
              >
                ☰
              </button>

              {/* DESKTOP: nav chips */}
              <nav
                aria-label="Primary"
                className="hidden md:flex items-start gap-5"
              >
                <div
                  ref={aboutWrapRef}
                  className="relative pb-3"
                  onMouseEnter={() => isDesktop() && setAboutOpen(true)}
                  onMouseLeave={() => isDesktop() && setAboutOpen(false)}
                >
                  <button
                    type="button"
                    className={`nav-chip nav-chip--meta ${
                      aboutOpen ? "is-active" : ""
                    }`}
                    aria-haspopup="menu"
                    aria-expanded={aboutOpen}
                    onClick={() => {
                      if (!isDesktop()) setAboutOpen((v) => !v);
                    }}
                  >
                    <span className="nav-chip__label">About</span>
                    <span className="nav-chip__caret" aria-hidden="true">
                      ▾
                    </span>
                  </button>

                  {aboutOpen && (
                    <div
                      role="menu"
                      className="
                        absolute right-0 top-full pt-2 min-w-[200px]
                        rounded-[14px] border border-white/10
                        bg-[#05070b]/95 backdrop-blur-xl
                        shadow-[0_0_24px_rgba(0,246,255,0.10)]
                        overflow-hidden z-[9999]
                      "
                    >
                      <Link
                        href="/about"
                        role="menuitem"
                        className="block px-4 py-3 text-sm text-white/85 hover:bg-white/5"
                        onClick={() => setAboutOpen(false)}
                      >
                        About
                      </Link>

                      <Link
                        href="/charter"
                        role="menuitem"
                        className="block px-4 py-3 text-sm text-white/85 hover:bg-white/5"
                        onClick={() => setAboutOpen(false)}
                      >
                        Public Charter
                      </Link>

                      <Link
                        href="/subscribe"
                        role="menuitem"
                        className="block px-4 py-3 text-sm text-white/85 hover:bg-white/5"
                        onClick={() => setAboutOpen(false)}
                      >
                        Subscribe
                      </Link>
                    </div>
                  )}
                </div>

                <Link href="/dialogues" className="nav-chip nav-chip--meta">
                  <span className="nav-chip__label">Dialogues</span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
