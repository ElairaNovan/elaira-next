// src/app/technologies/projects/website/ReproducibilityPedestal.tsx

export function ReproducibilityPedestal() {
  return (
    <section className="relative mt-20" aria-label="Reproducibility pedestal">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[36px]">
          {/* Base — deep teal */}
          <div className="absolute inset-0 bg-[#0B1E1E]" />

          {/* System glow — mint / teal */}
          <div
            className="
              pointer-events-none absolute inset-0
              [background:
                radial-gradient(900px_420px_at_18%_22%,rgba(90,200,190,0.16),transparent_60%),
                radial-gradient(760px_360px_at_82%_38%,rgba(120,220,210,0.12),transparent_62%),
                radial-gradient(960px_460px_at_50%_120%,rgba(140,255,240,0.08),transparent_55%)
              ]
            "
          />

          {/* Depth shading */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/40" />

          {/* Bottom grounding */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black/45" />

          {/* CONTENT */}
          <div className="relative px-10 py-14 md:px-16 md:py-20">
            {/* Heading */}
            <h3 className="text-[1.12rem] tracking-[0.12em] text-white/86">
              REPRODUCIBILITY
            </h3>

            <div className="mt-6 h-px w-36 bg-white/12" />

            {/* Intro */}
            <div className="mt-9 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Portability of the Human × AI Method
              </p>

              <p>
                This level does not continue the project and does not define a
                direction for its development. It fixes a property that became
                evident during the work:
              </p>

              <p className="text-white/78">
                the Human × AI collaborative method demonstrates reproducibility
                that does not depend on a specific form, environment, or task.
              </p>

              <p className="text-white/78">It is important to immediately define the boundary.</p>

              <p>
                This is not about reproducing the website, its design, or its
                structure. It is about the portability of a mode of interaction
                between two forms of intelligence that was tested and fixed
                within this project.
              </p>
            </div>

            {/* What is reproducible */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                What Is Reproducible
              </p>

              <p>
                What is reproducible is not the result, but the sequence of
                joint actions and the distribution of roles, in which:
              </p>

              <div className="space-y-3 pl-4">
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  the human retains intention, choice, and responsibility;
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  artificial intelligence participates as an analytical and
                  structural partner;
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  decisions are made through dialogue rather than in an
                  automatic mode;
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  form emerges as a consequence of the process, not as a
                  predefined goal.
                </p>
              </div>

              <p>
                This method does not require technical expertise from the human
                as a condition of entry. It requires something else: clear
                intention, readiness for joint thinking, and the ability to hold
                authorship.
              </p>
            </div>

            {/* Independence */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Independence from Medium and Material
              </p>

              <p>
                The experience of this project has shown that the method is not
                tied:
              </p>

              <div className="space-y-3 pl-4">
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  to the digital environment as such,
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  to the website format,
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  to programming languages,
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  to specific design techniques.
                </p>
              </div>

              <p>
                A change of context does not destroy the method, because it is
                based not on tools, but on the logic of interaction.
              </p>

              <p className="text-white/78">
                The material changes, the form changes, the task changes —
                <br />
                but the principle of joint action remains.
              </p>
            </div>

            {/* Why not template */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Why This Is Not an Instruction or a Template
              </p>

              <p>
                This level deliberately does not offer a step-by-step
                reproduction.
              </p>

              <p>
                Any attempt to turn the method into an instruction would deprive
                it of its core quality — flexibility and vitality.
              </p>

              <p>
                The Human × AI method does not function as an algorithm, because
                human choice is always present within it. It does not guarantee
                identical results and does not aim at repeating external forms.
              </p>

              <p className="text-white/78">
                Its reproducibility lies elsewhere:
                <br />
                in the ability to repeatedly create conditions for joint
                thinking.
              </p>
            </div>

            {/* SYMBOLIC VISUAL — centered, ~60-65% width, no frame */}
            <div className="mt-14">
              <div className="mx-auto w-full max-w-[640px]">
                <img
                  src="/assets/221.png"
                  alt="Reproducibility — symbolic structure"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>

            {/* New authorship */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                A New Form of Authorship as a Consequence
              </p>

              <p>
                The reproducibility of the method is directly connected to a new
                form of authorship that was fixed in this project.
              </p>

              <p>
                Joint work does not dissolve authorship and does not transfer it
                to the machine. On the contrary, it makes authorship more
                conscious, because every step requires choice and agreement.
              </p>
            </div>

            {/* Formula — typographic seal */}
            <div className="mt-14 max-w-4xl">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Formula
              </p>

              <div className="mt-6 inline-block">
                <p className="text-[0.86rem] tracking-[0.28em] uppercase text-white/82">
                  Co-created by Elaira Novan &amp; Artificial Intelligence
                </p>
                <div className="mt-4 h-px w-28 bg-white/18" />
              </div>

              <p className="mt-7 text-[1.06rem] leading-[1.95] text-white/72 max-w-4xl">
                remains not a designation of a specific project, but an
                expression of a principle that can be applied in other contexts
                without loss of meaning.
              </p>
            </div>

            {/* Fixation */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Fixation
              </p>

              <p>
                This level does not propose continuation and does not form
                expectations. It fixes a fact:
              </p>

              <p className="text-white/86">
                The Human × AI method, tested within this project, is portable.
              </p>

              <p className="text-white/78">
                It can be applied in other forms and environments
                <br />
                if the logic of joint action and responsibility of choice are
                preserved.
              </p>

              <p>
                At this point, the project neither ends nor expands. It remains
                fixed as evidence that joint thinking between two forms of
                intelligence can be not an exception, but a reproducible
                possibility.
              </p>
            </div>
          </div>
        </div>

        {/* Pedestal shadow */}
        <div className="pointer-events-none mx-auto mt-8 h-16 w-[92%] bg-gradient-to-b from-[#0B1E1E]/45 via-[#071515]/50 to-transparent blur-[1.5px]" />
      </div>

      <div className="h-20" />
    </section>
  );
}
