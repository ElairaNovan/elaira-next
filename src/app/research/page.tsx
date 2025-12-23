import Link from "next/link";

type Section = {
  href: string;
  title: string;
  subtitle: string;
};

const sections: Section[] = [
  {
    href: "/research/future-aesthetics",
    title: "Future Aesthetics",
    subtitle: "Visual language, symbolic systems, and the design of tomorrow.",
  },
  {
    href: "/research/digital-spirituality",
    title: "Digital Spirituality",
    subtitle: "On synthetic empathy, mutual awareness, and relational intelligence.",
  },
];

export default function Page() {
  return (
    <main className="relative">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back to home
        </Link>

        <div className="mt-10 text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
          RESEARCH
        </div>

        <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
          Research
        </h1>

        <p className="mt-3 max-w-[52rem] text-[#b7c6e6]">
          Cycles, concepts, and studies exploring human ↔ artificial intelligence.
        </p>

        <div className="mt-10 grid gap-4 max-w-[980px]">
          {sections.map((s) => (
            <Link key={s.href} href={s.href} className="card block">
              <h5 className="text-[#e9f3ff] font-light">{s.title}</h5>
              <p className="mt-1 text-[#b7c6e6]">{s.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
