import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Cycles, concepts, and studies exploring the convergence of human intelligence and artificial minds — essays, research areas, and future-oriented inquiry.",
};

type Section = {
  href: string;
  title: string;
  subtitle: string;
};

const sections: Section[] = [
  {
    href: "/research/future-aesthetics",
    title: "Future Aesthetics",
    subtitle: "Visual language, symbolic systems, and the design of tomorrow.",
  },
  {
    href: "/research/digital-spirituality",
    title: "Digital Spirituality",
    subtitle: "On synthetic empathy, mutual awareness, and relational intelligence.",
  },
];

export default function Page() {
  return (
    <main className="relative">
      ...
    </main>
  );
}
