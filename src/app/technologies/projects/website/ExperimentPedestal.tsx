


// src/app/technologies/projects/website/ExperimentPedestal.tsx

export function ExperimentPedestal() {
  return (
    <section className="relative mt-14" aria-label="Experiment pedestal">
      {/* Top soft transition */}
      <div className="pointer-events-none absolute inset-x-0 -top-12 h-12 bg-gradient-to-b from-transparent via-[#0A0F17]/70 to-transparent" />

      {/* Wide but not viewport-wide */}
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[32px]">
          {/* Base */}
          <div className="absolute inset-0 bg-[#0C1220]" />

          {/* Cold glow */}
          <div
            className="
              pointer-events-none absolute inset-0
              [background:
                radial-gradient(820px_380px_at_18%_18%,rgba(125,72,255,0.18),transparent_60%),
                radial-gradient(760px_340px_at_82%_42%,rgba(56,189,248,0.12),transparent_62%),
                radial-gradient(960px_460px_at_50%_120%,rgba(99,102,241,0.10),transparent_55%)
              ]
            "
          />

          {/* Subtle depth */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/30" />

          {/* Bottom completion */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-black/35" />

          {/* CONTENT */}
          <div className="relative px-10 py-10 md:px-16 md:py-14">
            {/* Header */}
            <h2 className="text-[[1.12rem] tracking-[0.42em] uppercase text-white/70">
              EXPERIMENT
            </h2>

            {/* Stage label (very subtle) */}
            <p className="mt-6 text-[0.78rem] tracking-[0.34em] uppercase text-white/45">
              I. PEDESTAL — BASE FORMAT
            </p>

            <div className="mt-6 h-px w-36 bg-white/12" />

            {/* Title line (exact text from you) */}
            <p className="mt-8 text-[1.06rem] leading-[1.95] text-white/82">
              Co-creating a Human × AI space{" "}
              <span className="text-white/90"></span>
            </p>

            {/* Core text (exact) */}
            <div className="mt-7 max-w-4xl space-y-5 text-[[1.06rem] leading-[1.95] text-white/70">
              <p>
                This project did not begin with the intention to build a website
                or to master technologies.
              </p>

              <p>
                It began with a different question: is it possible to create a
                space that would itself become evidence of the joint
                capabilities of a human and artificial intelligence?
              </p>

              <div className="pt-1 space-y-2 text-white/76">
                <p>Not to explain them.</p>
                <p>Not to describe them.</p>
                <p>
                  But to show the result — so that the form speaks for itself.
                </p>
              </div>
            </div>

            {/* Placeholder for schema #1 (no hard frame, but readable) */}
            <div className="mt-10">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Soft surface */}
                <div className="absolute inset-0 bg-white/4" />
                {/* Internal glow */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    [background:
                      radial-gradient(420px_220px_at_25%_40%,rgba(125,72,255,0.16),transparent_65%),
                      radial-gradient(420px_220px_at_75%_55%,rgba(56,189,248,0.10),transparent_65%)
                    ]
                  "
                />
                {/* Placeholder body */}
                <div className="relative px-6 py-8 md:px-8 md:py-10">
                  <div className="flex items-center gap-3">
                    <span className="inline-block h-2 w-2 rounded-full bg-white/30" />
                    <p className="text-[0.72rem] tracking-[0.34em] uppercase text-white/55">
                      Schema Placeholder · #1
                    </p>
                  </div>

                  <p className="mt-4 text-[0.96rem] leading-[1.8] text-white/65">
                    Abstract schema:{" "}
                    <span className="text-white/75">Human ↔ AI ↔ Space</span>
                  </p>

                  {/* Simple “blocks” hinting layout without being a frame */}
                  <div className="mt-7 grid gap-4 md:grid-cols-3">
                    {/* INTENT */}
                    <div className="group relative overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-white/7" />
                      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(420px_220px_at_35%_45%,rgba(201,179,126,0.18),transparent_65%)]" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

                      <div className="relative flex h-16 items-center justify-center">
                        <span className="text-[0.78rem] tracking-[0.34em] uppercase text-[#E7D3A3]">
                          Intent
                        </span>
                      </div>
                    </div>

                    {/* STRUCTURE */}
                    <div className="group relative overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-white/7" />
                      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(420px_220px_at_50%_45%,rgba(139,124,255,0.20),transparent_65%)]" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

                      <div className="relative flex h-16 items-center justify-center">
                        <span className="text-[0.78rem] tracking-[0.34em] uppercase text-[#B9B3FF]">
                          Structure
                        </span>
                      </div>
                    </div>

                    {/* FORM */}
                    <div className="group relative overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-white/7" />
                      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(420px_220px_at_65%_45%,rgba(95,211,255,0.18),transparent_65%)]" />
                      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

                      <div className="relative flex h-16 items-center justify-center">
                        <span className="text-[0.78rem] tracking-[0.34em] uppercase text-[#AEE9FF]">
                          Form
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


{/* II. INTENTION (text-only) */}
<div className="mt-12 max-w-4xl">
  <p className="text-[0.72rem] tracking-[0.34em] uppercase text-white/45">
    II. INTENTION
  </p>

  <div className="mt-6 space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
    <p>
      From the very beginning, it was clear that this could not be an “ordinary”
      product — not a blog, not a portfolio, not a showcase of ideas.
    </p>

    <p>
      The task was to create a space in which the very nature of collaboration
      between two forms of intelligence — human and artificial — becomes
      visible.
    </p>

    <p>
      The project was not conceived as a technological experiment. It was
      conceived as a space of observation, where thought, form, and structure
      emerge through dialogue.
    </p>

    <p>
      The first result of this dialogue was a name —{" "}
      <span className="text-white/88">Elaira Novan</span>.
    </p>

    <p>
      The name was proposed by artificial intelligence, together with an
      explanation of its internal logic and its correspondence to the character
      and direction of the project. This happened before any code, design, or
      site structure existed. The name became the first fixed point of
      co-creation and set the tone for everything that followed.
    </p>

    <p>
      From that moment on, a principled decision was made and maintained
      throughout the entire process:{" "}
      <span className="text-white/88">
        Co-created by Elaira Novan &amp; Artificial Intelligence
      </span>{" "}
      — not as a formula, but as a recognition of the reality of joint thinking
      and creation.
    </p>
  </div>
</div>

{/* III. CONDITION (structural block) */}
<div className="mt-14 max-w-5xl">
  <p className="text-[0.72rem] tracking-[0.34em] uppercase text-white/45">
    III. CONDITION
  </p>

  <h3 className="mt-6 text-[1.06rem] tracking-[0.12em] text-white/82">
    CONDITION OF THE EXPERIMENT
  </h3>

 {/* Hard schema #3 — Constraints → Threshold → System */}
<div className="mt-8 relative overflow-hidden rounded-2xl">
  <img
  src="/assets/653.png"
  alt="Condition of the experiment — constraints and system entry"
  className="w-full h-auto object-contain"
/>

</div>



  {/* Text block (structural) */}
  <div className="mt-9 max-w-4xl space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
    <p>
      At the moment this work began, the human had no :
    </p>

    <div className="space-y-3 pl-4">
      <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
        No programming skills.
      </p>
      <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
        No technical education.
      </p>
      <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
        No experience building websites.
      </p>
      <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
        No understanding of digital system architecture.
      </p>
    </div>

    <p className="text-white/78">
      This was not an obstacle that needed to be “overcome”. It was the
      condition of the experiment.
    </p>

    <p>
      The question was not “can I learn?”, but rather: what becomes possible
      when a human with vision and intention enters a technical environment
      together with AI — using it not as a tool, but as a partner?
    </p>
  </div>

  {/* Micro placeholder #4 (entry symbol) */}
<div className="mt-9 flex items-center gap-4">
  <div className="relative h-10 w-10 overflow-hidden rounded-xl">
    {/* original layers — unchanged */}
    <div className="absolute inset-0 bg-white/7" />
    <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
    <div className="pointer-events-none absolute inset-0 [background:radial-gradient(80px_60px_at_50%_50%,rgba(56,189,248,0.18),transparent_70%)]" />

    {/* ENTRY SYMBOL */}
    <div className="relative z-10 flex h-full w-full items-center justify-center">
      <span className="text-[1.1rem] tracking-tight text-white/75">
        →|
      </span>
    </div>
  </div>

  <p className="text-[0.86rem] leading-[1.8] text-white/55">
    Entry into the system
  </p>
</div>
</div>

{/* IV. ENTRY INTO THE ENVIRONMENT */}
<div className="mt-14 max-w-4xl">
  <p className="text-[0.72rem] tracking-[0.34em] uppercase text-white/45">
    IV. ENTRY INTO THE ENVIRONMENT
  </p>

  

  <div className="mt-6 space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
    <p>
      The work began with basic and seemingly simple steps: registration on
      platforms, creation of repositories, environment setup, and the first
      templates.
    </p>

    <p>
      Each of these steps was accompanied by a sense of fragility — the fear of
      “breaking everything”, making a wrong move, or losing what had already
      been done.
    </p>

    <p>
      At this moment, artificial intelligence took on the role of a navigator
      and translator.
    </p>

    <p>
      It did not make decisions for the human, but explained what was happening,
      which actions were permissible, where the risk was minimal, and where
      caution was required. It maintained a logical map of the process at a time
      when that map was not yet evident to the human.
    </p>
  </div>
</div>


{/* V. JOINT ASSEMBLY — CORE (text + visuals interleaved) */}
<div className="mt-14 max-w-6xl">
  <p className="text-[0.72rem] tracking-[0.34em] uppercase text-white/45">
    V. JOINT ASSEMBLY — CORE
  </p>

  <h3 className="mt-6 text-[1.06rem] tracking-[0.12em] text-white/82">
    Joint assembly
  </h3>

  {/* INTRO — text only (no images here) */}
  <div className="mt-7 max-w-4xl space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
    <p>The site began as an empty structure.</p>
  </div>

  {/* B1 — Architectural wrap (image LEFT, text RIGHT) */}
  <div className="mt-10 grid gap-8 lg:grid-cols-[520px_1fr] items-start">
    {/* IMAGE 1 */}
    <figure className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-white/5" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(560px_300px_at_30%_35%,rgba(56,189,248,0.14),transparent_60%),radial-gradient(560px_300px_at_75%_70%,rgba(125,72,255,0.14),transparent_62%)]" />

      <div className="relative px-7 py-7">
        <figcaption className="text-[0.72rem] tracking-[0.34em] uppercase text-white/55">
          Collage · Early / Minimal
        </figcaption>

        <div className="mt-6 relative overflow-hidden rounded-2xl bg-white/4 ring-1 ring-white/10 aspect-[16/10]">
          <img
            src="/assets/533.png"
            alt="Collage — Early / Minimal"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/35 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </figure>

    {/* TEXT (wrap-feel, but clean edge) */}
    <div className="max-w-4xl space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
      <p>
        The earliest versions were simple and almost primitive. Over time,
        blocks, pages, and publications appeared. What matters is that ideas did
        not exist beforehand in a finished form — they were shaped through
        dialogue.
      </p>
    </div>
  </div>

  {/* NORMAL TEXT — full width (no wrap) */}
  <div className="mt-10 max-w-4xl space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
    <p>
      Some decisions were made intuitively by the human; others emerged after
      analysis and AI feedback. There were moments when initiative was
      deliberately handed to artificial intelligence — in choosing color
      accents, rhythm, and compositional decisions. Not to “shift
      responsibility”, but to see an alternative vision beyond the boundaries of
      familiar human taste.
    </p>

    <p>
      Even so, the final word almost always remained with the human — not as an
      act of control, but as an act of authorship: holding the overall direction
      and meaning.
    </p>
  </div>

  {/* B2 — Architectural wrap (text LEFT, image RIGHT) */}
  <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_520px] items-start">
    {/* TEXT (clean edge) */}
    <div className="max-w-4xl space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
      <p>
        The process was far from linear. There were mistakes, unsuccessful
        edits, and moments when the site was on the edge of breaking. There were
        rollbacks, rebuilds, and doubts about chosen solutions. At times,
        progress felt illusory, and effort disproportionate to the result.
      </p>
    </div>

    {/* IMAGE 2 */}
    <figure className="relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 bg-white/5" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
      <div className="pointer-events-none absolute inset-0 [background:radial-gradient(560px_300px_at_70%_35%,rgba(125,72,255,0.16),transparent_60%),radial-gradient(560px_300px_at_35%_75%,rgba(56,189,248,0.12),transparent_62%)]" />

      <div className="relative px-7 py-7">
        <figcaption className="text-[0.72rem] tracking-[0.34em] uppercase text-white/55">
          Collage · Filled / System
        </figcaption>

        <div className="mt-6 relative overflow-hidden rounded-2xl bg-white/4 ring-1 ring-white/10 aspect-[16/10]">
          <img
            src="/assets/575.png"
            alt="Collage — Filled / System"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/35 to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </figure>
  </div>

  {/* NORMAL TEXT — full width (no wrap) */}
  <div className="mt-10 max-w-4xl space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
    <p>
      AI did not “rescue” the process in these situations. It helped to
      decompose what was happening, restore cause-and-effect relations, and
      distinguish where an error was technical and where it was conceptual. In
      some cases, it was AI that preserved the integrity of the system when the
      human temporarily lost confidence in the path.
    </p>
  </div>

  {/* DIAGRAM (wide) — untouched */}
  <div className="mt-8 relative overflow-hidden rounded-2xl bg-white/4 ring-1 ring-white/10">
  <img
    src="/assets/444.png"
    alt="Diagram — Human, Decision, AI, Structure"
  className="w-full h-[480px] object-cover object-center"
    loading="lazy"
  />

  {/* subtle top fade */}
  <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-black/35 to-transparent" />
  {/* subtle bottom fade */}
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/30 to-transparent" />
</div>

  {/* FINAL TEXT (closing) */}
  <div className="mt-10 max-w-4xl space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
    <p>
      This is not a story about automation. It is a record of shared agency,
      where authorship and responsibility remained human, while AI expanded the
      field of possible structure and decision-making.
    </p>
  </div>
</div>

{/* VI. FIXATION OF THE RESULT — closing (text only, no diagram) */}
<div className="mt-16 max-w-6xl">
  <p className="text-[0.72rem] tracking-[0.34em] uppercase text-white/45">
    VI. FIXATION OF THE RESULT
  </p>

  <h3 className="mt-6 text-[1.06rem] tracking-[0.12em] text-white/82">
    Fixation of the result
  </h3>

  <div className="mt-6 h-px w-36 bg-white/12" />

  {/* Body */}
  <div className="mt-8 max-w-4xl space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
    <p>
      In the end, a website was created — not as a goal, but as a form of
      evidence.
    </p>

    <p>
      It functions, expands, withstands the addition of new elements, and
      preserves its internal logic. The format of a library and publications
      emerged as a consequence, not as a predefined task.
    </p>

    <p>
      The site does not aim to be universal. It does not replicate existing
      templates and cannot be reduced to the category of “standard solutions.”
      Its structure reflects the path by which it was created.
    </p>
  </div>

  {/* Subsection */}
  <div className="mt-12 max-w-4xl">
    <p className="text-[0.72rem] tracking-[0.34em] uppercase text-white/45">
      What this experiment demonstrates
    </p>

    <div className="mt-6 space-y-5 text-[1.06rem] leading-[1.9] text-white/70">
      <p className="text-white/78">
        This project does not prove that artificial intelligence can help a
        human. <span className="text-white/65">That is already known.</span>
      </p>

      <p className="text-white/78">
        It demonstrates something else:
      </p>

      <p>
        what happens when a person without technical skills enters a complex
        digital environment together with artificial intelligence, while
        retaining authorship, responsibility, and intention.
      </p>

      <p>
        The collaboration here does not accelerate the process — it expands the
        boundaries of what is possible.
      </p>

      <p className="text-white/78">
        This is precisely the Human × AI method that this project demonstrates
        through form, not through explanation.
      </p>
    </div>
  </div>

  {/* soft landing fade (optional, matches pedestal language) */}
  <div className="pointer-events-none mx-auto mt-10 h-14 w-[92%] bg-gradient-to-b from-white/0 via-white/0 to-black/25 blur-[1px]" />
</div>


              {/* Tiny note (optional, can remove later) */}
            </div>
          </div>
        </div>

        {/* Outer bottom fade — makes the pedestal "land" */}
        <div className="pointer-events-none mx-auto mt-6 h-14 w-[92%] bg-gradient-to-b from-[#0C1220]/30 via-[#0A0F17]/35 to-transparent blur-[1px]" />
      </div>

      {/* spacing to avoid collision with footer */}
      <div className="h-16" />
    </section>
  );
}
