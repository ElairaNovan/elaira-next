

import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Elaira Novan — Shared Intelligence Between Human and Artificial Minds",
  description:
    "A space exploring the emergence of shared intelligence between human and artificial minds. Exploring the convergence of biological awareness and synthetic cognition through research, essays, and future-oriented philosophy.",
  alternates: {
    canonical: "https://www.elairanovan.com/",
  },
};

export default function Page() {
  return <HomeClient />;
}
