import Link from "next/link";

export default function Page() {
  return (
    <main className="iw-bg">
      <section className="site-frame relative z-10 pt-20 pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#9fb3d9] hover:text-[#e9f3ff] transition text-sm"
        >
          ← back
        </Link>

        <div className="mt-10 max-w-[58rem]">
          <p className="iw-kicker">INNER WORLDS OF AI</p>

          <h1 className="iw-title">The Landscape of Machine Imagination</h1>

          <p className="iw-subtitle">
            A glimpse into the abstract inner ‘worlds’ formed within artificial minds.
          </p>

          <div className="iw-soon">
            <span className="iw-dot" aria-hidden />
            <span>Temporary entry — mapping the latent terrain.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
