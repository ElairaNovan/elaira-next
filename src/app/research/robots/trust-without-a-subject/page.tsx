import Link from "next/link";
import Content from "./content.mdx";

export default function Page() {
  return (
    <main className="relative">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/research/robots"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back to Robots cycle
        </Link>

        <div className="mt-10">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            CYCLES OF OBSERVATION
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
            Trust Without a Subject
          </h1>

          <p className="mt-3 text-[#b7c6e6]">
            Robots and the Birth of Synthetic Empathy
          </p>
        </div>

        <article className="dream-article mt-10 mx-auto max-w-[720px]">
          <Content />
        </article>
      </section>
    </main>
  );
}
