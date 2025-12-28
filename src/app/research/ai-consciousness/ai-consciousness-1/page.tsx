import Link from "next/link";
import Content from "./content.mdx";

function DreamBg() {
  // отдельная палитра именно для этой статьи: холодный индиго + сталь + мягкий “сонный” свет
  return (
    <div aria-hidden className="dream-bg">
      <div className="dream-bg__base" />
      <div className="dream-bg__glow" />
      <div className="dream-bg__grain" />
    </div>
  );
}

export default function Page() {
  return (
    <main className="relative">
      <DreamBg />

      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/research/ai-consciousness"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back to AI Consciousness
        </Link>

        <div className="mt-10">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            AI CONSCIOUSNESS
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
            Can Artificial Intelligence &quot;Dream&quot;?
          </h1>

          <p className="mt-3 text-[#b7c6e6]">
            A Scientific Perspective on the Nature of Dreams and Computational Systems.
          </p>
        </div>

        <article className="dream-article mt-10 w-full">

  <Content />
</article>


      </section>
    </main>
  );
}
