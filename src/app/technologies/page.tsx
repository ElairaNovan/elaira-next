// src/app/technologies/page.tsx
import Image from "next/image";
import Link from "next/link";


export default function TechnologiesPage() {
  return (
    <main className="min-h-[calc(100vh-72px)]">
      {/* Special background ONLY for /technologies */}
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        {/* Base dark field */}
        <div className="absolute inset-0 bg-[#05060a]" />

        {/* More uniform deep-tech field (same colors, smoother distribution) */}
        <div
          className="absolute inset-0 opacity-100"
          style={{
            backgroundImage: `
              /* subtle center lift (not bright) */
              radial-gradient(720px 520px at 50% 30%, rgba(240, 245, 255, 0.06), transparent 62%),

              /* main violet tension */
              radial-gradient(1100px 760px at 26% 32%, rgba(102, 65, 255, 0.34), transparent 66%),

              /* cyan structural layer */
              radial-gradient(980px 720px at 78% 36%, rgba(0, 195, 255, 0.18), transparent 68%),

              /* warm human undertone */
              radial-gradient(980px 780px at 54% 86%, rgba(255, 120, 200, 0.10), transparent 70%),

              /* very soft overall wash to unify */
              radial-gradient(1400px 1000px at 50% 50%, rgba(120, 110, 255, 0.07), transparent 78%)
            `,
          }}
        />

       {/* Uniform vignette + subtle human undertone */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background: `
      radial-gradient(1400px 900px at 50% 32%, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.64) 100%),
      radial-gradient(1200px 900px at 52% 92%, rgba(255, 120, 200, 0.07), transparent 62%)
    `,
  }}
/>


      
        {/* CONTENT */}
        <div className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-16 md:pb-24">
 
          {/* Eyebrow */}
 
           <Link
          href="/"
           className="inline-flex items-center gap-3 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm mb-3"
        >
          ← back
        </Link>
          <p className="text-[0.72rem] md:text-[0.76rem] tracking-[0.38em] uppercase text-white/55">
           
            
            Technologies
          </p>

        
          {/* Title */}
          <h1 className="mt-4 text-[2.2rem] md:text-[3.2rem] leading-[1.05] font-extralight tracking-[0.08em] text-[#e9f3ff]">
            Technologies with AI
          </h1>

          {/* Subhead */}
          <p className="mt-4 max-w-2xl text-[0.98rem] md:text-[1.05rem] leading-[1.75] text-white/70">
            Demonstration objects of Human × AI collaboration — where method
            becomes visible through form, without replacing the author.
          </p>

          {/* Micro-line */}
          <p className="mt-6 max-w-2xl text-[0.92rem] md:text-[0.98rem] leading-[1.7] text-white/55">
            Co-created does not cancel human choice. It makes it precise.
          </p>

          {/* Divider */}
          <div className="mt-10 h-px w-full max-w-3xl bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

          {/* SCHEMA (non-clickable core) */}
          <div className="mt-10 md:mt-12 max-w-4xl">
            <div
              className={[
                "relative overflow-hidden rounded-2xl",
                "border border-white/10",
                "bg-white/[0.02] backdrop-blur-sm",
                "shadow-[0_0_30px_rgba(110,80,255,0.10)]",
              ].join(" ")}
            >
              <div className="relative w-full">
                <Image
                  src="/assets/325.png"
                  alt="Human × AI schema"
                  width={1600}
                  height={900}
                  priority
                  className="w-full h-auto select-none pointer-events-none"
                />
              </div>
            </div>

            <p className="mt-3 text-[0.72rem] md:text-[0.76rem] tracking-[0.30em] uppercase text-white/45">
              Human × AI — Core Method 
            </p>
          </div>

        {/* ENTRY TEXT */}
<div className="mt-10 md:mt-12 max-w-4xl">
  <div className="space-y-4 text-[0.98rem] md:text-[1.05rem] leading-[1.85] text-white/70">
    <p>
      This section does not explain technologies or demonstrate tools. It exists
      as a frame in which the very fact of joint action between a human and
      artificial intelligence is fixed — without training, without instructions,
      and without simplification.
    </p>

    <p>
      Here, artificial intelligence functions neither as author nor as executor.
      It does not replace the human, nor does it substitute choice. It is present
      as a second form of intelligence, participating in the formation of
      structure, clarity, and form.
    </p>

    <p>
      The “Technologies with AI” section does not show how AI acts. It shows what
      becomes possible when human intention and machine analytics operate within
      a shared coordinate system.
    </p>

    <p className="text-white/62">
      It is important to establish the boundary immediately: this is not a tech
      blog, not a showcase, and not a demonstration of efficiency.
    </p>

    <p>
      Each project within this section is treated as an object in which joint
      thinking is fixed — without any claim to universality and without any
      attempt to explain everything that occurs.
    </p>

    {/* The formula (artifact inset, no border) */}
    <div className="pt-3">
      <p className="text-[0.72rem] md:text-[0.76rem] tracking-[0.32em] uppercase text-white/45">
        The formula
      </p>

      <div className="mt-3 relative overflow-hidden px-5 py-4 bg-white/[0.03]">
        {/* subtle inner light (not a frame) */}
        <div className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(900px 140px at 18% 40%, rgba(255,120,200,0.10), transparent 60%)," +
              "radial-gradient(900px 140px at 70% 40%, rgba(0,195,255,0.08), transparent 62%)",
          }}
        />
        
       
        <p className="relative text-[0.95rem] md:text-[1.02rem] tracking-[0.08em] text-white/82">
          Co-created by Elaira Novan &amp; Artificial Intelligence
        </p>
     </div>


      <p className="mt-6">
        is used here not as a declaration and not as a gesture. It records the
        reality of co-creation — the presence of two agencies within a single
        process, while preserving human authorship and responsibility.
      </p>
    


    <p className="text-white/62">
      This level does not introduce the process and does not unfold its history.
      It establishes a position of perception and defines how everything that
      follows should be read.
    </p>
  

  {/* Optional subtle divider before Project 01 */}
  <div className="mt-12 h-px w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
</div>




    {/* Right field (intentional empty space) */}
    <div className="hidden md:block md:col-span-3" />
  </div>
</div>


{/* Navigation: Joint Action Protocols */}
<Link
  href="/technologies/protocols"
  className="
    group mt-10 block
    max-w-5xl
    rounded-[28px]
    bg-[#101B28]
    px-10 py-7
    transition
    hover:bg-[#122033]
  "
>
  <div className="flex items-center justify-between gap-8">
    <div>
      <p className="text-[0.65rem] tracking-[0.34em] uppercase text-white/45">
        Core Method
      </p>
      <p className="mt-2 text-[1.05rem] tracking-[0.06em] text-white/85">
        Joint Action Protocols
      </p>
    </div>

    <span className="text-white/55 group-hover:text-white/80 transition">
      →
    </span>
  </div>
</Link>


{/* Project index (archival marker) */}
<p className="mt-12 md:mt-14 uppercase text-white/55">
  <span className="text-[0.82rem] md:text-[0.86rem] tracking-[0.26em]">
    Project
  </span>
  <span className="ml-3 text-[1.05rem] md:text-[1.12rem] tracking-[0.02em]">
    01
  </span>
</p>


{/* PROJECT ENTRY (single clickable object: visual + passport) */}
<Link
  href="/technologies/projects/website"
  aria-label="Open project: Co-created Website"
  className={[
    "mt-12 md:mt-16 block",
    "rounded-3xl",
    "border border-white/8",
    "bg-[#0B1220]",                // ← холодный структурный фон карточки
    "backdrop-blur-[2px]",
    "shadow-[0_0_36px_rgba(120,180,255,0.04)]",
    "transition-colors duration-300",
    "hover:border-white/12",
    "focus:outline-none focus-visible:ring-1 focus-visible:ring-white/25",
  ].join(" ")}
>
  {/* Inner padding defines the “separate object” feeling */}
  <div className="p-6 md:p-7">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
      {/* LEFT: Visual */}
      <div className="md:col-span-7">
        <div
          className={[
            "relative overflow-hidden rounded-2xl",
            "border border-white/10",
            "bg-[#0E1729] backdrop-blur-sm", // ← чуть активнее, глубже
            "shadow-[0_0_30px_rgba(90,150,255,0.10)]",
          ].join(" ")}
        >
          <Image
            src="/assets/588.png"
            alt="Project visual object"
            width={1600}
            height={1200}
            priority={false}
            className="w-full h-auto select-none"
          />

          {/* quiet lift on hover for the whole object */}
          <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>

      {/* RIGHT: Passport */}
      <div className="md:col-span-5">
        <div
          className={[
            "rounded-2xl",
            "border border-white/10",
            "bg-[#0C1424]",              // ← тот же холодный цвет, но спокойнее
            "backdrop-blur-[2px]",
          ].join(" ")}
        >
          {/* top line */}
          <div className="px-6 py-3">
            <p className="text-[0.72rem] tracking-[0.38em] uppercase text-white/55">
              Passport
            </p>
            <p className="mt-2 text-[0.95rem] md:text-[1.12rem] leading-[1.7] text-white/75">
              Co-created Website
            </p>
          </div>

          {/* rows */}
          <div className="border-t border-white/10">
            {[
              ["Type", "Conceptual digital system"],
              ["Status", "Active"],
              ["Year", "2025—"],
              ["Human role", "Author · Intent holder · Decision authority"],
              ["AI role", "Analytical intelligence · Structural support"],
              ["Tools", "AI models · Human-guided prompting"],
              ["Output", "Conceptual website · Essays · Dialogues · Visual systems"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-12 gap-3 px-6 py-2 border-t border-white/10 first:border-t-0"
              >
                <div className="col-span-4">
                  <p className="text-[0.72rem] tracking-[0.28em] uppercase text-white/45">
                    {label}
                  </p>
                </div>
                <div className="col-span-8">
                  <p className="text-[0.94rem] leading-[1.65] text-white/65">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* attribution */}
          <div className="border-t border-white/10 px-6 py-5">
            <p className="text-[0.7rem] tracking-[0.34em] uppercase text-white/45">
              Co-created line
            </p>
            <p className="mt-1 text-[0.95rem] leading-[1.85] text-white/75">
              Co-created by Elaira Novan &amp; Artificial Intelligence
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom status line */}
    <div className="mt-5 md:mt-6 border-t border-white/10 pt-4">
      <p className="text-[0.78rem] md:text-[0.82rem] tracking-[0.26em] uppercase text-white/55">
        Open project
      </p>
    </div>
  </div>
</Link>


{/* Project index (archival marker) */}
<p className="mt-12 md:mt-14 uppercase text-white/55">
  <span className="text-[0.82rem] md:text-[0.86rem] tracking-[0.26em]">
    Project
  </span>
  <span className="ml-3 text-[1.05rem] md:text-[1.12rem] tracking-[0.02em]">
    02
  </span>
</p>

{/* PROJECT ENTRY (single clickable object: visual + passport) */}
<Link
  href="/technologies/projects/coffee"
  aria-label="Open project: Coffee × AI"
  className={[
    "mt-12 md:mt-16 block",
    "rounded-3xl",
    "border border-white/8",
    "bg-white/[0.01]",
    "backdrop-blur-[2px]",
    "shadow-[0_0_36px_rgba(255,120,200,0.04)]",
    "transition-colors duration-300",
    "hover:border-white/12",
    "focus:outline-none focus-visible:ring-1 focus-visible:ring-white/25",
  ].join(" ")}
>
  <div className="p-6 md:p-7">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
      {/* LEFT: Visual */}
      <div className="md:col-span-7">
        <div
          className={[
            "relative overflow-hidden rounded-2xl",
            "border border-white/10",
            "bg-white/[0.02] backdrop-blur-sm",
            "shadow-[0_0_30px_rgba(110,80,255,0.10)]",
          ].join(" ")}
        >
          <Image
            src="/assets/383.png"
            alt="Project visual object"
            width={1600}
            height={1200}
            priority={false}
            className="w-full h-auto select-none"
          />
        </div>
      </div>

      {/* RIGHT: Passport */}
      <div className="md:col-span-5">
        <div
          className={[
            "rounded-2xl",
            "border border-white/10",
            "bg-white/[0.01]",
            "backdrop-blur-[2px]",
          ].join(" ")}
        >
          {/* top line */}
          <div className="px-6 py-3">
            <p className="text-[0.72rem] tracking-[0.38em] uppercase text-white/55">
              Passport
            </p>
            <p className="mt-2 text-[0.95rem] md:text-[1.12rem] leading-[1.7] text-white/75">
              Coffee × AI
            </p>
          </div>

          {/* rows */}
          <div className="border-t border-white/10">
            {[
              ["Type", "Co-created taste experiment"],
              ["Status", "Active"],
              ["Year", "2025—"],
              ["Human role", "Author · Taste direction · Decision authority"],
              ["AI role", "Analytical intelligence · Recipe synthesis · Structural support"],
              ["Tools", "AI models · Human-guided prompting"],
              ["Output", "Recipes · Taste map · Method notes"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="grid grid-cols-12 gap-3 px-6 py-2 border-t border-white/10 first:border-t-0"
              >
                <div className="col-span-4">
                  <p className="text-[0.72rem] tracking-[0.28em] uppercase text-white/45">
                    {label}
                  </p>
                </div>
                <div className="col-span-8">
                  <p className="text-[0.94rem] leading-[1.65] text-white/65">
                    {value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* attribution */}
          <div className="border-t border-white/10 px-6 py-5">
            <p className="text-[0.7rem] tracking-[0.34em] uppercase text-white/45">
              Co-created line
            </p>
            <p className="mt-1 text-[0.95rem] leading-[1.85] text-white/75">
              Co-created by Elaira Novan &amp; Artificial Intelligence
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom status line */}
    <div className="mt-5 md:mt-6 border-t border-white/10 pt-4">
      <p className="text-[0.78rem] md:text-[0.82rem] tracking-[0.26em] uppercase text-white/55">
        Open project
      </p>
    </div>
  </div>
</Link>



</div>
      </section>
    </main>
  );
}
