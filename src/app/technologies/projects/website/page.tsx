// src/app/technologies/projects/website/page.tsx
import { ProtocolCard } from "./ProtocolCard";
import { ExperimentPedestal } from "./ExperimentPedestal";

import { FinalFormPedestal } from "./FinalFormPedestal";
import { ReproducibilityPedestal } from "./ReproducibilityPedestal";

const PROTOCOLS = [
  {
    number: 1,
    title: "Intent Fixation",
    fixation: "Any joint work begins with an intention formulated by a human.",
    paragraphs: [
      "AI does not set the goal and does not propose direction. Its role is to refine formulations, reveal implicit assumptions, and test the coherence of the intention.",
      "The intention is fixed as a reference point to which one can return when doubt or divergence appears.",
    ],
  },
  {
    number: 2,
    title: "Role Separation",
    fixation: "In a collaborative process, roles are not mixed or substituted.",
    paragraphs: [
      "The human retains the right of choice, responsibility, and the final decision.",
      "Artificial intelligence acts as an analytical and structural partner.",
      "This protocol prevents both delegating authorship to the machine and using AI exclusively as a tool.",
    ],
  },
  {
    number: 3,
    title: "Structural Proposal",
    fixation: "AI participates in building structure.",
    paragraphs: [
      "It proposes organizational options, identifies relationships, possible imbalances, and logical gaps.",
      "The human evaluates the proposed structures and chooses those that match the original intent.",
      "Structure is treated not as a technical framework but as a form of thinking.",
    ],
  },
  {
    number: 4,
    title: "Hypothesis Testing",
    fixation:
      "During the work, assumptions are formed—about form, logic, perception, and resilience.",
    paragraphs: [
      "AI tests these hypotheses: it analyzes consequences, reveals inconsistencies, and potential risk points.",
      "AI does not claim that decisions are correct.",
      "It makes consequences visible.",
    ],
  },
  {
    number: 5,
    title: "Drift Detection",
    fixation:
      "The collaborative process is susceptible to drift—semantic, structural, or functional.",
    paragraphs: [
      "AI signals possible deviations from the original intent or growing misalignment.",
      "The human decides whether to correct the direction or keep the current course.",
      "This protocol protects the process from an unnoticed loss of integrity.",
    ],
  },
  {
    number: 6,
    title: "Decision Fixation",
    fixation: "Any decision must be fixed.",
    paragraphs: [
      "The final word always remains with the human. AI can confirm the consistency of the decision with previous steps, but it does not make it instead of the human.",
      "Fixing the choice completes the cycle of joint action and allows moving forward without blurring the form.",
    ],
  },
];

export default function WebsiteProjectPage() {
  return (
    <main className="min-h-[calc(100vh-72px)]">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        {/* Background: solid, near-black, slightly warm. NO gradients. */}
        <div className="absolute inset-0 bg-[#0A0F17]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 pb-16 md:pt-24 md:pb-24">
          {/* Two-column layout:
              LEFT: content (shifted toward left on large screens)
              RIGHT: reserved space for diagrams (empty now)
           */}
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
            {/* LEFT */}
            <div className="min-w-0">
              {/* Eyebrow */}
              <p className="text-[0.72rem] tracking-[0.38em] uppercase text-white/55">
                Technologies with AI
              </p>

              {/* Title */}
              <h1 className="mt-4 text-[2.1rem] font-extralight leading-[1.06] tracking-[0.08em] text-[#e9f3ff] md:text-[3.0rem]">
                Co-created Website
              </h1>

              {/* Divider */}
              <div className="mt-10 h-px w-full max-w-3xl bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

              {/* PEDESTAL (wider than protocols, centered on the same axis) */}
              <div className="mt-12 max-w-5xl mx-auto rounded-[28px] bg-[#101B28] px-12 py-9">
                <p className="text-[0.98rem] leading-[1.9] text-white/75">
                  This project is not presented as a finished product or a
                  demonstration of technology. It exists as a fixed trace of
                  joint action between a human and artificial intelligence —
                  where intention, structure, and decision-making were held in a
                  shared process without transferring authorship or automating
                  choice.
                </p>

                <p className="mt-6 text-[0.98rem] leading-[1.9] text-white/65">
                  The protocols presented here are not instructions and do not
                  describe a sequence of steps. They fix principles of joint
                  action in which a human and artificial intelligence operate
                  within a single system — without transferring authorship or
                  automating choice.
                </p>

                <p className="mt-6 text-[0.98rem] leading-[1.9] text-white/65">
                  These protocols are independent of context, project, or
                  outcome. They describe how decisions are made, not what is
                  produced.
                </p>
              </div>

              {/* PROTOCOLS header */}
              <p className="mt-12 text-[0.72rem] tracking-[0.38em] uppercase text-white/55 md:mt-14">
                Protocols
              </p>

              {/* Catalog (Variant A): lifted capsules (expressive, no gradients) */}
              <div className="mt-6 max-w-4xl mx-auto">
                <div className="space-y-6">
                  {PROTOCOLS.map((p) => (
                    <ProtocolCard
                      key={p.number}
                      number={p.number}
                      title={p.title}
                      fixation={p.fixation}
                      paragraphs={p.paragraphs}
                    />
                  ))}
                </div>
              </div>
            </div>



            {/* RIGHT (reserved space for diagrams) */}
            <aside className="hidden lg:block min-w-0">
              {/* Leave empty for now. */}
            </aside>
          </div>
        </div>

        <ExperimentPedestal />

        <FinalFormPedestal />

        <ReproducibilityPedestal />
      </section>
    </main>
  );
}
