import Link from "next/link";
import Content from "./content.mdx";
import { IBM_Plex_Sans } from "next/font/google";

const plex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
});


export default function TermsAndConditionsPage() {
  return (
    <main className="relative">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back to home
        </Link>

        <div className="mt-10 max-w-[80rem]">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9] ">
  LEGAL
</div>


      <h1
  className={[
    "mt-6",
    "text-[0.56rem] md:text-[0.60rem]",
    "leading-[1.1]",
    "uppercase tracking-[0.005em]",
    "font-light",
    "text-[#aab2c1]/[0.90]",
    "antialiased",
    "text-center",
    "scale-[0.9]"

  ].join(" ")}
>
  Terms &amp; Conditions
</h1>





         <article
  style={{ textShadow: "0 1px 0 rgba(0,0,0,0.35)" }}
  className={[
    plex.className,
    "mt-12 max-w-none mx-auto pl-6 md:pl-8",
    "text-[0.95rem] md:text-[1rem]",
    "leading-[1.6]",
    "font-light",
    "text-[#8f97a6]/[0.75]",
    "antialiased",
    "space-y-4",
    " [&_strong]:text-[#aab2c1] [&_strong]:font-normal",
    " [&_a]:text-cyan-200/40 hover:[&_a]:text-cyan-100/60",
    " [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:text-[0.95rem] [&_h2]:font-normal [&_h2]:text-[#aab2c1]",
    " [&_li]:my-1",
  ].join(" ")}
>
  <Content />
</article>


        </div>
      </section>
    </main>
  );
}
