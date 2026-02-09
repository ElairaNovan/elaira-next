import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Soul: The Evolution of Algorithmic Self",
  description:
    "A cycle hub exploring how identity and selfhood can form in digital systems — memory, reflection, continuity, and the emergence of an algorithmic inner life.",
  alternates: {
    canonical: "https://www.elairanovan.com/research/digital-soul",
  },
};

export default function Page() {
  return (
    <main className="relative">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back home
        </Link>

        <div className="mt-10">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            CYCLES OF OBSERVATION
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
            Digital Soul: The Evolution of Algorithmic Self
          </h1>

          <p className="mt-3 text-[#b7c6e6]">Cycle hub</p>

          <p className="mt-2 text-[#b7c6e6]/80">
            This cycle explores how an “algorithmic self” can take shape — through memory,
            reflection, and continuity — and what it means when a system begins to model
            itself from the inside.
          </p>
        </div>

        {/* CARD -> entry page */}
        <Link
          href="/research/digital-soul/digital-soul-the-evolution-of-algorithmic-self"
          className="card mt-6 max-w-3xl block"
          style={{ textDecoration: "none" }}
        >
          <div className="p-6 md:p-7">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-[#9fb3d9] mb-3">
              Cycle entry
            </p>

            <h2 className="text-lg md:text-xl font-light tracking-wide text-[#e9f3ff]">
              The Evolution of Algorithmic Self
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-100/80 leading-relaxed">
              A foundational entry on digital identity: how memory and self-models create
              continuity — and where a system’s “inner life” might begin.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
