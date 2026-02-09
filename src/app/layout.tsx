import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.elairanovan.com"),

  alternates: {
    canonical: "https://www.elairanovan.com/",
  },

  title: {
    default: "Elaira Novan",
    template: "%s — Elaira Novan",
  },

  description:
  "Elaira Novan — a space of research, essays, and dialogue on human and artificial intelligence.",


  openGraph: {
    title: "Elaira Novan",
    description:
      "A space of dialogue between human intelligence and artificial minds.",
    url: "https://www.elairanovan.com",
    siteName: "Elaira Novan",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Глобальный фон */}
        <div className="about-bg" aria-hidden="true">
          <div className="about-bg__aurora" />
          <div className="about-bg__grid" />
          <div className="about-bg__dust" />
        </div>

        {/* Весь видимый слой */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Контент страниц */}
          <div className="flex-1">{children}</div>

          {/* Глобальный Footer (единый для всего сайта) */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
