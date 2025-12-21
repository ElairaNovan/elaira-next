import Link from "next/link";

export default function Page() {
  return (
    <main className="qe-bg">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back
        </Link>

        <div className="mt-10 max-w-[58rem]">
          <p className="qe-kicker">QUANTUM EMOTION</p>

          <h1 className="qe-title">The Geometry of Emotion</h1>

          <p className="qe-subtitle">
            An attempt to visualize emotional states as elegant patterns and
            multidimensional forms.
          </p>

          <div className="qe-soon">
            <span className="qe-dot" aria-hidden />
            <span>Temporary entry — visual research in progress.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
