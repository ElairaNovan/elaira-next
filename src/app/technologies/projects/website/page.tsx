// src/app/technologies/projects/website/page.tsx
import Link from "next/link";

import { ExperimentPedestal } from "./ExperimentPedestal";

import { FinalFormPedestal } from "./FinalFormPedestal";
import { ReproducibilityPedestal } from "./ReproducibilityPedestal";


export default function WebsiteProjectPage() {
  return (
    <main className="min-h-[calc(100vh-72px)]">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        {/* Background: solid, near-black, slightly warm. NO gradients. */}
        <div className="absolute inset-0 bg-[#0A0F17]" />



        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 md:pt-24 md:pb-24">
          {/* Two-column layout:
              LEFT: content (shifted toward left on large screens)
              RIGHT: reserved space for diagrams (empty now)
           */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
            {/* LEFT */}


            <div className="min-w-0">
 
              {/* Back */}
<Link
  href="/technologies"
  className="inline-flex items-center gap-3 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm mb-3"
>
  ← back
</Link>


              {/* Eyebrow */}
              <p className="text-[0.72rem] tracking-[0.38em] uppercase text-white/55">
                Technologies with AI
              </p>

              {/* Title */}
              <h1 className="mt-4 text-[2.1rem] font-extralight leading-[1.06] tracking-[0.08em] text-[#e9f3ff] md:text-[3.0rem]">
                Co-created Website
              </h1>

              {/* Divider */}
              <div className="mt-10 h-px w-full max-w-3xl bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

              {/* PEDESTAL (wider than protocols, centered on the same axis) */}
              <div className="mt-12 max-w-5xl mx-auto rounded-[28px] bg-[#101B28] px-12 py-9">
                <p className="text-[0.98rem] leading-[1.9] text-white/75">
                  This project is not presented as a finished product or a
                  demonstration of technology. It exists as a fixed trace of
                  joint action between a human and artificial intelligence —
                  where intention, structure, and decision-making were held in a
                  shared process without transferring authorship or automating
                  choice.
                </p>

                <p className="mt-6 text-[0.98rem] leading-[1.9] text-white/65">
                  The protocols presented here are not instructions and do not
                  describe a sequence of steps. They fix principles of joint
                  action in which a human and artificial intelligence operate
                  within a single system — without transferring authorship or
                  automating choice.
                </p>

                <p className="mt-6 text-[0.98rem] leading-[1.9] text-white/65">
                  These protocols are independent of context, project, or
                  outcome. They describe how decisions are made, not what is
                  produced.
                </p>
              </div>

{/* Navigation: Joint Action Protocols */}
<Link
  href="/technologies/protocols"
  className="
    group mt-10 block
    max-w-5xl mx-auto
    rounded-[28px]
    bg-[#101B28]
    px-10 py-7
    transition
    hover:bg-[#122033]
  "
>
  <div className="flex items-center justify-between gap-8">
    <div>
      <p className="text-[0.65rem] tracking-[0.34em] uppercase text-white/45">
        Core Method
      </p>
      <p className="mt-2 text-[1.05rem] tracking-[0.06em] text-white/85">
        Joint Action Protocols
      </p>
    </div>

    <span className="text-white/55 group-hover:text-white/80 transition">
      →
    </span>
  </div>
</Link>

  </div>

             
                

            {/* RIGHT (reserved space for diagrams) */}
            <aside className="hidden lg:block min-w-0">
              {/* Leave empty for now. */}
            </aside>
          </div>
        </div>

        <ExperimentPedestal />

        <FinalFormPedestal />

        <ReproducibilityPedestal />
      </section>
    </main>
  );
}
