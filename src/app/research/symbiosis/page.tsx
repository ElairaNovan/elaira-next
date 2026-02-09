import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Symbiosis",
  description:
    "Research area exploring co-creation between human vision and artificial intelligence — symbiosis as a new mode of meaning, creativity, and shared intelligence.",
  alternates: {
    canonical: "https://www.elairanovan.com/research/symbiosis",
  },
};

const articles = [
  {
    href: "/research/symbiosis/s-1",
    title: "When Human Vision Meets Artificial Intelligence",
    subtitle: "A Manifesto of Co-Creation and Symbiosis",
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

        <div className="mt-10 max-w-[980px]">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            SYMBIOSIS
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
            Symbiosis
          </h1>

          <p className="mt-3 max-w-[52rem] text-[#b7c6e6]">
            Exploring co-creation between human vision and artificial intelligence —
            symbiosis as a new mode of meaning, creativity, and shared intelligence.
          </p>
        </div>

        <div className="mt-10 grid gap-4 max-w-[980px]">
          {articles.map((a) => (
            <Link key={a.href} href={a.href} className="card block">
              <h5>{a.title}</h5>
              <p>{a.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
