import Link from "next/link";
import Content from "./content.mdx";
import Image from "next/image";


export default function Page() {
  return (
    <main className="relative">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/research/future-aesthetics"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back to Future Aesthetics
        </Link>
<div className="mt-10 mx-auto max-w-[90rem] px-6 md:px-12">
  <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
    FUTURE AESTHETICS
  </div>

  <h1 className="mt-6 text-[2.2rem] md:text-[2.8rem] font-light text-[#e9f3ff] leading-tight">
    Form as Navigation in Complex Systems
  </h1>

<div className="mt-10 w-full overflow-hidden rounded-xl">
  <Image
    src="/assets/26.jpeg"
    alt="Form as Navigation in Complex Systems"
    width={1800}
    height={900}
    className="
      w-full
      h-[320px] md:h-[620px]
      object-cover
      opacity-90
    "
    priority
  />
</div>



  <article
    className="
      mt-10
      max-w-none
      text-[1.05rem] md:text-[1.15rem]
      leading-[1.85]
      text-[#dbe6ff]/90
      space-y-6
    "
  >
    <Content />
  </article>
</div>

      </section>
    </main>
  );
}
