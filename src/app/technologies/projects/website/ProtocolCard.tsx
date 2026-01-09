type ProtocolCardProps = {
  number: number;
  title: string;
  fixation: string;
  paragraphs: string[];
};

export function ProtocolCard({
  number,
  title,
  fixation,
  paragraphs,
}: ProtocolCardProps) {
  return (
    <article
      className="
        group relative overflow-hidden
        rounded-2xl
        bg-[#0E141D]
        border border-white/10
        p-8
        shadow-[0_20px_40px_rgba(0,0,0,0.45)]
        transition
        hover:border-white/16
        hover:shadow-[0_28px_56px_rgba(0,0,0,0.55)]
      "
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/5" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/12" />
      <div className="pointer-events-none absolute left-0 top-6 bottom-6 w-px bg-white/12" />
      <div className="pointer-events-none absolute left-0 top-10 h-10 w-px bg-white/25" />

      <div className="flex items-baseline gap-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(201,179,126,0.08)] px-3 py-1">
          <span className="text-[0.65rem] tracking-[0.32em] uppercase text-[#C9B37E]">
            Protocol
          </span>
          <span className="text-[0.65rem] tracking-[0.28em] uppercase text-[#C9B37E]/80">
            {String(number).padStart(2, "0")}
          </span>
        </div>

        <h2 className="text-[1.10rem] md:text-[1.18rem] tracking-[0.06em] text-white/90">
          {title}
        </h2>
      </div>

      <p className="mt-4 max-w-3xl text-[0.99rem] leading-[1.85] text-white/78">
        {fixation}
      </p>

      <div className="mt-4 max-w-3xl space-y-4 text-[0.98rem] leading-[1.85] text-white/60">
        {paragraphs.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
    </article>
  );
}
