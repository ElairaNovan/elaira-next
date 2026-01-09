// src/app/technologies/projects/website/FinalFormPedestal.tsx

// src/app/technologies/projects/website/FinalFormPedestal.tsx

export function FinalFormPedestal() {
  return (
    <section className="relative mt-20" aria-label="Final form pedestal">
      {/* (Top transition removed as you decided) */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[36px]">
          {/* Base — warm dark */}
          <div className="absolute inset-0 bg-[#1A140C]" />

          {/* Warm structural glow */}
          <div
            className="
              pointer-events-none absolute inset-0
              [background:
                radial-gradient(900px_420px_at_20%_25%,rgba(214,166,96,0.18),transparent_60%),
                radial-gradient(760px_360px_at_80%_40%,rgba(184,122,56,0.14),transparent_62%),
                radial-gradient(960px_460px_at_50%_120%,rgba(255,200,120,0.10),transparent_55%)
              ]
            "
          />

          {/* Depth shading */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-black/35" />

          {/* Bottom grounding */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-black/40" />

          {/* CONTENT */}
          <div className="relative px-10 py-14 md:px-16 md:py-20">
            {/* Level label */}
            <p className="text-[0.72rem] tracking-[0.42em] uppercase text-white/60">
             FINAL FORM
            </p>

            

            <div className="mt-6 h-px w-36 bg-white/12" />

            {/* Larger body text than previous pedestal */}
            <div className="mt-9 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              {/* Section: Form as result */}
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Form as the result of Human × AI co-creation
              </p>

              <p>
                The final form of this project was not defined in advance and
                did not exist as an image one had to reach. It emerged
                gradually—as the result of shared decisions, discussions,
                re-assemblies, and refusals. The site was not “finished” in a
                single moment; it formed as a living object in which each part
                found its place through dialogue between human vision and
                machine structure.
              </p>

              <p className="text-white/78">
                It is important to emphasize: the final form is not a compromise
                and not an averaging. It is the trace of joint creation, where
                aesthetics, structure, and meaning developed simultaneously,
                shaping one another.
              </p>
            </div>

            {/* VISUAL 1 — wide, full width, panoptic but lower height */}
            <div className="mt-12 relative overflow-hidden rounded-3xl">
              <img
                src="/assets/781.png"
                alt="Final form — overview"
                className="w-full h-[300px] sm:h-[340px] lg:h-[520px] object-cover object-center"
                loading="lazy"
              />
            </div>

            {/* Section: Site as whole space */}
            <div className="mt-12 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                The site as a coherent space
              </p>

              <p>
                The project took shape not as a set of pages and not as a linear
                story. It became a space in which movement, pause, return, and
                re-reading are possible. The site’s internal logic is not
                governed by chronology or algorithmic order—it is built around
                semantic relations and tensions.
              </p>

              <p>
                This decision did not come from templates or ready-made
                patterns. It was the consequence of many discussions about what
                interaction with this space should feel like: not haste, not
                consumption, but presence and attention.
              </p>
            </div>

            {/* Section: Design */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Design as an expression of creativity, not decoration
              </p>

              <p>
                In the final form, design plays a key role. It is not a
                demonstration of “beauty for beauty’s sake” and it is not
                reduced to functional minimalism. Design here is a form of
                creative expression and authorial character that revealed itself
                through the process of joint work.
              </p>

              <p>
                Visual decisions were revised many times. We returned to color,
                rhythm, density, accents, and the overall feeling of the space.
                Some decisions were made intuitively by the human; others—after
                structural analysis and alternative proposals from artificial
                intelligence. The process was neither fast nor linear: it
                included doubt, abandoning what had already been done, and the
                search for a more precise expression of intent.
              </p>

              <p className="text-white/78">
                As a result, the site’s aesthetics became not a separate layer,
                but part of the overall system—the visual language works
                together with the structure, strengthening the sense of
                coherence and depth.
              </p>
            </div>

            {/* VISUAL 2 — compact panel, centered, smaller than Visual 1 */}
            <div className="mt-12">
              <div className="relative mx-auto overflow-hidden rounded-3xl max-w-4xl">
                <img
                  src="/assets/882.png"
                  alt="Design language — integrated system"
                  className="w-full h-[300px] sm:h-[540px] object-cover object-center"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Section: Joint formation */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Joint formation of form
              </p>

              <p>
                The final form of the project emerged from the continuous
                interaction of two different modes of thinking. The human held
                the direction, sensation, and the emotional and philosophical
                vector.
              </p>

              <p className="text-white/78">Artificial intelligence helped to:</p>

              <div className="space-y-3 pl-4">
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  structure ideas,
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  reveal inconsistencies,
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  propose alternative paths of implementation,
                </p>
                <p className="relative before:absolute before:-left-4 before:top-[0.65em] before:h-1 before:w-1 before:rounded-full before:bg-white/35">
                  test the resilience of decisions.
                </p>
              </div>

              <p>
                In some points the initiative came from the human; in others it
                was consciously handed to AI in order to see the form from a
                different perspective. Some proposals were accepted; others
                rejected. The process was not governed by efficiency—it was
                governed by precision of expression.
              </p>
            </div>

            {/* Section: Stability */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Stability as the criterion of form
              </p>

              <p className="text-white/78">
                The form was fixed not when the site became “beautiful enough,”
                but when it became clear:
              </p>

              <p className="text-white/86">
                it withstands growth and change without losing its identity.
              </p>

              <p>
                Adding new materials, ideas, and sections does not require
                rebuilding the entire system. The internal logic remains
                legible, and the space recognizable. This became the main sign
                that the form had reached a stable state.
              </p>
            </div>

            {/* Section: Not a template */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Why this form is not a template
              </p>

              <p>
                The final form of the project is not intended for copying and
                does not claim universality. It is unique precisely to the
                extent that the path of its creation is unique. Its value is
                not in repeatability of external appearance, but in making the
                result of Human × AI joint thinking visible.
              </p>

              <p>
                The site is fixed as a working form—not finally completed, but
                coherent enough to speak for itself and to continue developing
                without losing meaning.
              </p>
            </div>

            {/* Fixation */}
            <div className="mt-14 max-w-4xl space-y-6 text-[1.06rem] leading-[1.95] text-white/72">
              <p className="text-[0.78rem] tracking-[0.34em] uppercase text-white/50">
                Fixation
              </p>

              <p>This level does not summarize and does not close the process.</p>

              <p className="text-white/78">
                It fixes the moment in which form became a result—
              </p>

              <p className="text-white/86">
                not a goal, but a path traversed in the joint work of a human
                and artificial intelligence.
              </p>

              <p>
                The next level moves beyond the concrete project and carefully
                shows what in this process can be reproducible—not the form,
                but the method.
              </p>
            </div>
          </div>
        </div>

        {/* Pedestal shadow — warm */}
        <div className="pointer-events-none mx-auto mt-8 h-16 w-[92%] bg-gradient-to-b from-[#1A140C]/40 via-[#0F0A05]/45 to-transparent blur-[1.5px]" />
      </div>

      <div className="h-20" />
    </section>
  );
}
