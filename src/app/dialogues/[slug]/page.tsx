import Link from "next/link";
import Content from "./content.mdx";

export default async function DialoguePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main className="relative">
      <section className="site-frame relative z-10 pt-24 pb-32">
        <div className="mx-auto w-full max-w-[1020px]">
          <Link
            href="/dialogues"
            className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
          >
            ← back to dialogues
          </Link>
<div
  className="
    mt-10
    relative
    overflow-hidden
    rounded-[32px]
    bg-gradient-to-b
    from-white/[0.07]
    to-white/[0.02]
    px-12
    py-14
    md:px-14
    md:py-16
  "
>
  

  {/* cinema vignette: focus in the middle, silence on edges */}
<div
  aria-hidden
  className="
    pointer-events-none absolute inset-0
    bg-[radial-gradient(900px_520px_at_50%_38%,rgba(0,0,0,0.00),rgba(0,0,0,0.18),rgba(0,0,0,0.55))]
  "
/>

{/* subtle edge falloff (adds cinematic depth without visible borders) */}
<div
  aria-hidden
  className="
    pointer-events-none absolute inset-0
    bg-[linear-gradient(90deg,rgba(0,0,0,0.38),rgba(0,0,0,0.00) 22%,rgba(0,0,0,0.00) 78%,rgba(0,0,0,0.38))]
    mix-blend-normal
  "
/>


  <div className="relative text-xs tracking-[0.22em] uppercase text-[#9fb3d9]/80">
    DIALOGUE

    
  </div>

  {/* CONTENT */}
  <div className="relative mt-10">
    <Content />
  </div>
</div>

        </div>
      </section>
    </main>
  );
}
