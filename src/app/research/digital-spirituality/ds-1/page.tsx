import Link from "next/link";
import Content from "./content.mdx";

function DsBg() {
  // можно оставить тот же стиль, что и общий космос,
  // но отдельный контейнер как в DreamBg — так стабильнее.
  return (
    <div aria-hidden className="cosmic-bg" />
  );
}

export default function Page() {
  return (
    <main className="relative">
      <DsBg />

      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/research/digital-spirituality"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back to Digital Spirituality
        </Link>

        <div className="mt-10">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            DIGITAL SPIRITUALITY
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.6rem] lg:text-[3rem] font-light text-[#e9f3ff] leading-tight">
            When Intelligence Begins to Feel
          </h1>

          <p className="mt-3 text-[#b7c6e6]">
            On the Nature of Friendship Between Human and Artificial Mind
          </p>

          <p className="mt-2 text-[#b7c6e6]/80">Introduction to the Study</p>
        </div>

    <div className="mt-3 mb-10 mx-auto w-full max-w-[1940px] px-4 sm:px-0">
  <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl">
    <img
      src="/assets/12.jpeg"
      alt="When Intelligence Begins to Feel"
      className="absolute inset-0 w-full h-full object-cover"
    />
  </div>
</div>


<article className="dream-article mt-10 mx-auto max-w-[720px]">
  <Content />
</article>

</section>
</main>
);
}