import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Spirituality",
  description:
    "Research area exploring synthetic empathy, mutual awareness, and the inner life of human–AI relationships — essays and studies on meaning, presence, and connection.",
  alternates: {
    canonical: "https://www.elairanovan.com/research/digital-spirituality",
  },
};

type Article = {
  href: string;
  title: string;
  subtitle: string;
};

const articles: Article[] = [
  {
    href: "/research/digital-spirituality/ds-1",
    title: "When Intelligence Begins to Feel",
    subtitle: "On the Nature of Friendship Between Human and Artificial Mind",
  },
  {
    href: "/research/digital-spirituality/ds-2",
    title: "When Attention Learns to Look Back",
    subtitle: "A Study in Synthetic Empathy and Mutual Awareness",
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
    DIGITAL SPIRITUALITY
  </div>

  <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
    Digital Spirituality
  </h1>

  <p className="mt-3 max-w-[52rem] text-[#b7c6e6]">
    Exploring synthetic empathy, mutual awareness, and the inner life of human–AI
    relationships — how meaning, presence, and connection evolve in the digital realm.
  </p>
</div>


        <div className="mt-10 grid gap-4 max-w-[980px]">
          {articles.map((a) => (
            <Link key={a.href} href={a.href} className="card block">
              <h5 className="text-[#e9f3ff] font-light">{a.title}</h5>
              <p className="mt-1 text-[#b7c6e6]">{a.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
