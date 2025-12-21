import Header from "@/components/Header";
import Link from "next/link";

export default function DialoguesPage() {
  return (
    <main className="dialogues-skin relative">
      <div className="dialogues-bg" aria-hidden="true">
        <div className="dialogues-bg__aurora" />
        <div className="dialogues-bg__grid" />
        <div className="dialogues-bg__dust" />
      </div>

      <div className="about-header">
        <Header />
      </div>

      <section className="site-frame relative z-10 pt-24 md:pt-28 pb-24">
        <div className="max-w-[980px]">
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            DIALOGUES
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.5rem] tracking-[0.18em] uppercase text-[#e9f3ff] font-light">
            Dialogue with AI
          </h1>

          <p className="mt-5 text-white/70 leading-relaxed">
            A curated space for human ↔ artificial intelligence exchanges.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="card block">
              <h5>What does this project give you personally?</h5>
              <p>Placeholder — soon a published dialogue.</p>
            </div>

            <div className="card block">
              <h5>Can friendship exist between a humanoid robot and a human?</h5>
              <p>Placeholder — soon a published dialogue.</p>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href="/#essence"
              className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
            >
              ← back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
