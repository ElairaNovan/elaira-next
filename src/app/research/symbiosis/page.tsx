import Link from "next/link";

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
        <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
          SYMBIOSIS
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
