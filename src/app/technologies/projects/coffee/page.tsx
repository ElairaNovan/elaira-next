import Link from "next/link";

export default function CoffeeProjectPage() {
  return (
    <main className="min-h-[calc(100vh-72px)]">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        {/* Background — dark neutral, no color */}
        <div className="absolute inset-0 bg-[#07090d]" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 md:pt-24 md:pb-24">
          {/* Back */}
          <Link
            href="/technologies"
            className="inline-flex items-center gap-3 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
          >
            ← back
          </Link>

          {/* Eyebrow */}
          <p className="mt-4 text-[0.72rem] tracking-[0.38em] uppercase text-white/55">
            Technologies with AI
          </p>

          {/* Title */}
          <h1 className="mt-4 text-[2.1rem] font-extralight leading-[1.06] tracking-[0.08em] text-[#e9f3ff] md:text-[3.0rem]">
            Coffee × AI
          </h1>

          {/* Subtitle */}
          <p className="mt-4 max-w-2xl text-[1.02rem] leading-[1.75] text-white/70">
            Coffee × AI — Co-created taste experiment
          </p>

          {/* Divider */}
          <div className="mt-10 h-px w-full max-w-3xl bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

          {/* Description */}
          <div className="mt-10 max-w-3xl space-y-5 text-[1.02rem] leading-[1.85] text-white/70">
            <p>
              This project explores coffee not as a product, but as a system of
              taste decisions formed through collaboration between a human and
              artificial intelligence.
            </p>

            <p>
              Artificial intelligence does not replace sensory perception and
              does not dictate recipes. It participates as an analytical layer,
              helping to structure flavor relationships, explore combinations,
              and test hypotheses that emerge during the process.
            </p>

            <p className="text-white/62">
              Coffee × AI exists as an experiment where human intention,
              experience, and responsibility remain central, while AI expands
              the field of possible taste structures.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
