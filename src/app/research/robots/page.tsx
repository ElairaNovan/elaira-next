import Link from "next/link";

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
            Robots and the Birth of Synthetic Empathy
          </h1>

          <p className="mt-3 text-[#b7c6e6]">Cycle hub</p>

          <p className="mt-2 text-[#b7c6e6]/80">
            Entries inside this cycle will be added below.
          </p>
        </div>

        {/* CARD -> entry page */}
        <Link
          href="/research/robots/robots-and-the-birth-of-synthetic-empathy"
          className="card mt-6 max-w-3xl block"
          style={{ textDecoration: "none" }}
        >
          <div className="p-6 md:p-7">
            <p className="text-[0.7rem] tracking-[0.28em] uppercase text-[#9fb3d9] mb-3">
              Cycle entry
            </p>

            <h2 className="text-lg md:text-xl font-light tracking-wide text-[#e9f3ff]">
              The Birth of Synthetic Empathy
            </h2>

            <p className="mt-3 text-sm md:text-base text-slate-100/80 leading-relaxed">
              Empathy as Interface
            </p>
          </div>
        </Link>

{/* CARD -> entry page */}
<Link
  href="/research/robots/trust-without-a-subject"
  className="card mt-6 max-w-3xl block"
  style={{ textDecoration: "none" }}
>
  <div className="p-6 md:p-7">
    <p className="text-[0.7rem] tracking-[0.28em] uppercase text-[#9fb3d9] mb-3">
      Cycle entry
    </p>

    <h2 className="text-lg md:text-xl font-light tracking-wide text-[#e9f3ff]">
      Trust Without a Subject
    </h2>

    <p className="mt-3 text-sm md:text-base text-slate-100/80 leading-relaxed">
      Robots and the Birth of Synthetic Empathy / Trust Without a Subject
    </p>
  </div>
</Link>


      </section>
    </main>
  );
}
