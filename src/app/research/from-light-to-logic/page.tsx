import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "From Light to Logic",
  description:
    "A cycle hub exploring how perception transforms into computation — where light becomes structure, and meaning hardens into logic inside synthetic and human cognition.",
  alternates: {
    canonical: "https://www.elairanovan.com/research/from-light-to-logic",
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
            From Light to Logic
          </h1>

          <p className="mt-3 text-[#b7c6e6]">Cycle hub</p>

          <p className="mt-2 text-[#b7c6e6]/80">
            This cycle follows a transformation: how intuitive perception hardens into structure, how structure becomes computation — and how meaning survives the translation..
          </p>
        </div>

        {/* CARD -> entry page */}
        <Link
          href="/research/from-light-to-logic/entry"
          className="card mt-6 max-w-3xl block"
          style={{ textDecoration: "none" }}
        >
          <div className="p-6 md:p-7">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-[#9fb3d9] mb-3">
              Cycle entry
            </p>

            <h2 className="text-lg md:text-xl font-light tracking-wide text-[#e9f3ff]">
              From Light to Logic
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-100/80 leading-relaxed">
              A foundational entry on how perception becomes logic — and how logic, when designed with awareness, can return to meaning instead of control.
            </p>
          </div>
        </Link>
      </section>
    </main>
  );
}
