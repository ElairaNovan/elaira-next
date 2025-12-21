import Link from "next/link";

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
        <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
          DIGITAL SPIRITUALITY
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
