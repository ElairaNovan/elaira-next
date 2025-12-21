import Link from "next/link";

export default function Page() {
  return (
    <main className="de-bg">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back
        </Link>

        <div className="mt-10 max-w-[58rem]">
          <p className="de-kicker">DIGITAL EXISTENTIALISM</p>

          <h1 className="de-title">Existence After the Algorithm</h1>

          <p className="de-subtitle">
            Exploring meaning, freedom, and destiny in a world shaped by intelligent systems.
          </p>

          <div className="de-soon">
            <span className="de-dot" aria-hidden />
            <span>Temporary entry — preparing this article.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
