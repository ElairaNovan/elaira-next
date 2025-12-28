import Link from "next/link";

type Article = {
  href: string;
  title: string;
  subtitle: string;
};

const articles: Article[] = [
  {
    href: "/research/future-aesthetics/form-as-navigation-in-complex-systems",
    title: "Form as Navigation in Complex Systems",
    subtitle: "When complexity becomes a loss of orientation, form becomes the map.",
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
          FUTURE AESTHETICS
        </div>

        <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
          Future Aesthetics
        </h1>

        <p className="mt-3 max-w-[52rem] text-[#b7c6e6]">
          Visual language, symbolic systems, and the design of tomorrow.
        </p>

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
