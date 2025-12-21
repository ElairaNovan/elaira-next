import Link from "next/link";
import Content from "./content.mdx";

function SymbiosisBg() {
  return <div aria-hidden className="cosmic-bg" />;
}

export default function Page() {
  return (
    <main className="relative">
      <SymbiosisBg />

      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/research/symbiosis"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back to Symbiosis
        </Link>

        {/* label + title + subtitle (НЕ через MDX) */}
        <div className="mt-10">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            SYMBIOSIS
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
            When Human Vision Meets Artificial Intelligence
          </h1>

          <p className="mt-3 text-[#b7c6e6]">
            A Manifesto of Co-Creation and Symbiosis
          </p>
        </div>

        {/* layout: desktop = text left + image right, mobile = image below */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_620px] lg:items-start">
          {/* LEFT: text */}
          <div className="about-typography">
            <Content />
          </div>

          {/* RIGHT (desktop) / BELOW (mobile): image */}
          <div className="order-last lg:order-none">
            <div className="lg:sticky lg:top-24">
              <img
                src="/assets/1000055711.jpg"
                alt=""
                className="w-full max-w-[520px] mx-auto rounded-2xl select-none shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
