// src/app/technologies/protocols/page.tsx
import Link from "next/link";
import { ProtocolCard } from "../projects/website/ProtocolCard"; // временно так, чтобы не переносить компонент
// Если хочешь — позже вынесем ProtocolCard в общий components, но сейчас делаем быстро.

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

export default function ProtocolsPage() {
  return (
    <main className="min-h-[calc(100vh-72px)]">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0F17]" />

        <div className="relative mx-auto max-w-6xl px-6 pt-16 md:pt-24 pb-16 md:pb-24">
          <p className="text-[0.72rem] tracking-[0.38em] uppercase text-white/55">
            Technologies with AI
          </p>

          <div className="mt-6 flex items-baseline justify-between gap-6">
            <h1 className="text-[2.1rem] md:text-[3.0rem] leading-[1.06] font-extralight tracking-[0.08em] text-[#e9f3ff]">
              Joint Action Protocols
            </h1>

            <Link
              href="/technologies"
              className="text-[0.72rem] tracking-[0.34em] uppercase text-white/55 hover:text-white/75 transition"
            >
              Back →
            </Link>
          </div>

          <div className="mt-10 h-px w-full max-w-3xl bg-gradient-to-r from-white/0 via-white/12 to-white/0" />

          <div className="mt-10 max-w-4xl mx-auto">
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
      </section>
    </main>
  );
}
