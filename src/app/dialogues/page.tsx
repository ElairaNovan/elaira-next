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
       
          <div className="text-[0.72rem] tracking-[0.28em] uppercase text-[#9fb3d9]">
            DIALOGUES
          </div>

          <h1 className="mt-4 text-[2rem] md:text-[2.5rem] tracking-[0.18em] uppercase text-[#e9f3ff] font-light">
            Dialogue with AI
          </h1>

          <p className="mt-5 text-white/70 leading-relaxed">
            A curated space for human ↔ artificial intelligence exchanges. All dialogues are presented in their original form.
          </p>
<div className="mt-10 grid gap-4 justify-items-start">
  <Link
    href="/dialogues/response-1"
    className="card block w-full max-w-[920px]"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, rgba(120, 90, 60, 0.08), rgba(120, 90, 60, 0.03))",
    }}
  >
    <h5>What does this project give you personally?</h5>
    <p>Open dialogue</p>
  </Link>

  <Link
    href="/dialogues/response-2"
    className="card block w-full max-w-[920px]"
    style={{
      backgroundImage:
        "linear-gradient(to bottom, rgba(90, 70, 48, 0.45), rgba(42, 34, 24, 0.65), rgba(18, 15, 10, 0.85))",
    }}
  >
    <h5>Can friendship exist between a humanoid robot and a human?</h5>
    <p>Open dialogue</p>
  </Link>

  <Link
    href="/dialogues/response-3"
    className="card block w-full max-w-[920px]"
    style={{ backgroundColor: "rgba(20, 17, 42, 0.8)" }}
  >
    <h5>Does AI influence the geometry of choice?</h5>
    <p>Open dialogue</p>
  </Link>
</div>


          <div className="mt-10">
            <Link
              href="/#essence"
              className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
            >
              ← back to home
            </Link>
          </div>
        
      </section>
    </main>
  );
}
