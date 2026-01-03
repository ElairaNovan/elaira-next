"use client";

import Link from "next/link";
import { useEffect } from "react";
import Portal from "@/components/Portal";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  // Body scroll lock
  useEffect(() => {
    if (!open) return;

    const body = document.body;
    const scrollY = window.scrollY;

    const prevPosition = body.style.position;
    const prevTop = body.style.top;
    const prevLeft = body.style.left;
    const prevRight = body.style.right;
    const prevWidth = body.style.width;
    const prevOverflow = body.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = prevPosition;
      body.style.top = prevTop;
      body.style.left = prevLeft;
      body.style.right = prevRight;
      body.style.width = prevWidth;
      body.style.overflow = prevOverflow;

      window.scrollTo(0, scrollY);
    };
  }, [open]);

  return (
    <Portal>
      {/* WRAPPER on body: always above everything */}
      <div
  data-open={open ? "true" : "false"}
  className={[
    "fixed inset-0 z-[9999] overflow-hidden",
    "transition-[opacity] duration-300 ease-out",
    open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
  ].join(" ")}

        aria-hidden={!open}
      >
        {/* overlay */}
        <div
          onClick={onClose}
          className="absolute inset-0"
          style={{
  background:
    "radial-gradient(120% 120% at 50% 18%, rgba(150,235,255,0.12) 0%, rgba(0,0,0,0.78) 42%, rgba(0,0,0,0.92) 100%)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  touchAction: "none",
  overscrollBehavior: "none",
}}

        />

       {/* drawer */}
<aside
  className={[
    "fixed top-0 right-0 h-dvh w-[86vw] max-w-[360px]"
,
    "will-change-transform",
    "transition-[transform,opacity] duration-350 ease-out",
    open
    
  ? "translate-x-0 opacity-100 pointer-events-auto"
  : "translate-x-full opacity-0 pointer-events-none"
,
  ].join(" ")}





            style={{
  background:
    "linear-gradient(180deg, rgba(10,12,18,0.88) 0%, rgba(6,8,12,0.92) 55%, rgba(0,0,0,0.96) 100%)",
  boxShadow:
    "-26px 0 70px rgba(0,0,0,0.72), inset 1px 0 0 rgba(150,235,255,0.10), inset 0 1px 0 rgba(255,255,255,0.04)",
  borderLeft: "1px solid rgba(140,230,255,0.14)",
}}

          aria-label="Mobile navigation"
        >
          <div className="h-full flex flex-col">
            {/* header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4">
              <div className="text-[12px] tracking-[0.28em] text-cyan-100/70">
                MENU
              </div>

              <button
                onClick={onClose}
                className="h-10 w-10 grid place-items-center rounded-full border border-cyan-100/20 text-cyan-50/85 active:scale-95 transition"
                aria-label="Close menu"
              >
                ✕
              </button>
            </div>

            {/* nav */}
            <nav className="px-5 pb-6">
              <ul className="space-y-2">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/charter", label: "Public Charter" },
                  { href: "/dialogues", label: "Dialogues" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={[
                        "block rounded-xl px-4 py-3",
                        "border border-cyan-100/10",
                        "text-cyan-50/90 tracking-[0.10em]",
                        "bg-[rgba(255,255,255,0.02)]",
                        "hover:bg-[rgba(150,235,255,0.06)] transition",
                      ].join(" ")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-6 text-[11px] tracking-[0.22em] text-cyan-100/45">
                Elaira Novan
              </div>
            </nav>

            <div className="flex-1" />

            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(150,235,255,0.35), transparent)",
              }}
            />
            <div className="px-5 py-4 text-[11px] text-cyan-100/45">
              Tap outside to close
            </div>
          </div>
          <div
  aria-hidden="true"
  className="absolute inset-x-0 top-0 h-24 pointer-events-none"
  style={{
    background:
      "radial-gradient(80% 100% at 50% 0%, rgba(150,235,255,0.10), rgba(0,0,0,0))",
  }}
/>

        </aside>
      </div>
    </Portal>
  );
}
