import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Consciousness",
  description:
    "Research area exploring the meeting point of biological awareness and synthetic cognition — key questions, essays, and studies on AI consciousness.",
  alternates: {
    canonical: "https://www.elairanovan.com/research/ai-consciousness",
  },
};


const articles = [
  {
    title: `Can Artificial Intelligence "Dream"?`,
    subtitle:
      "A Scientific Perspective on the Nature of Dreams and Computational Systems.",
    href: "/research/ai-consciousness/ai-consciousness-1",
  },
];

export default function Page() {
  return (
    <main className="relative">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/#research"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back to home
        </Link>

        <div className="mt-10 max-w-[980px]">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            AI CONSCIOUSNESS
          </div>

          
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
