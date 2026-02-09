
import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Shared Intelligence Between Human and Artificial Minds",
  description:
    "A space exploring the emergence of shared intelligence between human and artificial minds. Exploring the convergence of biological awareness and synthetic cognition through research, essays, and future-oriented philosophy.",
};

export default function Page() {
  return <HomeClient />;
}

