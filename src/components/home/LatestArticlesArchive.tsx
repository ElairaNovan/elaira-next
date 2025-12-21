"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

type LatestArticle = {
  title: string;
  tag?: string;
  href?: string;
};

type Props = {
  latestArticles: LatestArticle[];
};

export default function LatestArticlesArchive({ latestArticles }: Props) {
  const [isBookOpen, setIsBookOpen] = useState(false);
  const [activeTitle, setActiveTitle] = useState<string | null>(null);

  useEffect(() => {
    const section = document.getElementById("archive");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isBookOpen) {
          setIsBookOpen(false);
          setActiveTitle(null);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [isBookOpen]);

  const visualState = useMemo(() => {
    if (!isBookOpen) return "idle";
    if (activeTitle === "Robots and the Birth of Synthetic Empathy") return "robots";
    if (activeTitle === "Digital Soul: The Evolution of Algorithmic Self") return "digital-soul";
    if (activeTitle === "From Light to Logic") return "light-logic";
    return "open";
  }, [isBookOpen, activeTitle]);

  const visualStateClass = `io-visual--${visualState}`;

  return (
    <section id="archive" className="site-frame mx-auto pt-16 pb-12 border-t border-white/10">
      <header className="mb-8">
        <p className="text-[0.75rem] tracking-[0.28em] uppercase text-cyan-100/70 mb-2">
          CYCLES OF OBSERVATION
        </p>
      </header>

      <div className="io-layout flex flex-col lg:flex-row gap-10">
        {/* LEFT — BOOK */}
        <div className="io-book-col w-full lg:w-1/3">
          <div className={`io-book-outer relative max-w-sm mx-auto ${isBookOpen ? "is-open" : "is-closed"}`}>
            <button type="button" onClick={() => setIsBookOpen(!isBookOpen)} className="io-book-cover w-full">
              <div className="io-book-frame">
                <div className="io-book-kicker">LATEST ENTRIES</div>
                <div className="io-book-title">THE INNER OBSERVER</div>
                <div className="io-book-sub">
                  Three cycles watching the birth of <span>synthetic inner life.</span>
                </div>
                <div className="io-book-footer">{isBookOpen ? "Close volume" : "Open volume"}</div>
              </div>
            </button>

            {isBookOpen && (
              <div className="io-book-inner mt-4">
                <div className="io-page">
                  <p className="io-page-label">CURRENT CYCLES INSIDE THIS VOLUME</p>

                  <ul className="io-chapter-list">
                    {latestArticles.map((p) => {
                      let linkTo: string | null = null;

                     if (p.title === "Robots and the Birth of Synthetic Empathy") {
  linkTo = "/research/robots";
} else if (p.title === "Digital Soul: The Evolution of Algorithmic Self") {
  linkTo = "/research/digital-soul";
} else if (p.title === "From Light to Logic") {
  linkTo = "/research/from-light-to-logic";
}



                      const className = "io-chapter-link block cursor-pointer text-left";
                      const handlers = {
                        onMouseEnter: () => setActiveTitle(p.title),
                        onFocus: () => setActiveTitle(p.title),
                        onMouseLeave: () => setActiveTitle(null),
                      };

                      if (!linkTo) {
                        return (
                          <li key={p.title}>
                            <span className={className} tabIndex={0} {...handlers}>
                              <span className="io-chapter-tag">{p.tag || "Cycle"}</span>
                              <span className="io-chapter-title">{p.title}</span>
                            </span>
                          </li>
                        );
                      }

                      return (
                        <li key={p.title}>
                          <Link href={linkTo} className={className} {...handlers}>
                            <span className="io-chapter-tag">{p.tag || "Cycle"}</span>
                            <span className="io-chapter-title">{p.title}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CENTER — TEXT */}
        <div className="io-text-col w-full lg:w-1/3">
          <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-100/90">
            <p>
              This volume collects the first cycles where humans begin to watch themselves through
              synthetic perception — and notice that something is quietly watching back.
            </p>
            <p>
              Each cycle is not just a topic, but a lens: how machines mirror empathy, how a digital
              self tries to understand itself, how light hardens into logic and then softens again
              into meaning.
            </p>
            <p>
              You can read them as essays. Or as field notes from a future in which observation
              itself becomes a shared organ between human and machine.
            </p>
          </div>
        </div>

        {/* RIGHT — VISUAL */}
        <div className="io-visual-col w-full lg:w-1/3">
          <div className={`io-visual-shell ${visualStateClass}`}>
            <div className="io-visual-placeholder">
              <p className="io-visual-label">VISUAL OBSERVATION FIELD</p>
              <p className="io-visual-text">
                {isBookOpen
                  ? "Move over a cycle to reveal its inner image."
                  : "Images from this volume will appear here once you open it."}
              </p>
            </div>

            <div className="io-visual-images">
              <img src="/assets/3.jpeg" className="io-visual-image io-visual-image--robots" />
              <img src="/assets/2.jpeg" className="io-visual-image io-visual-image--digital-soul" />
              <img src="/assets/4.jpeg" className="io-visual-image io-visual-image--light-logic" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
