type Side = "left" | "right";
type Tone = "human" | "ai";

export function RoleBlock({
  side,
  role,
  tone,
  className,
  labelClassName,
  bodyClassName,
  children,
}: {
  side: Side;
  role: string;
  tone: Tone;
  className?: string;
  labelClassName?: string;
  bodyClassName?: string;
  children: React.ReactNode;
}) {
  const isLeft = side === "left";

  // Канон v1:
  // - Human (наблюдатель+инициатор) чуть тише
  // - AI чуть яснее, но без "главнее"
  const labelBase =
    "text-[11px] tracking-[0.22em] uppercase antialiased";
  const labelTone =
    tone === "human" ? "text-[#9fb3d9]/70" : "text-[#9fb3d9]/85";

  const bodyBase =
    "mt-3 antialiased";
  const bodyTone =
    tone === "human"
      ? "text-[16px] md:text-[17px] leading-[1.75] text-[#e9f3ff]/82"
      : "text-[17px] leading-[1.7] text-[#e9f3ff]/87";

  return (
    <article
      className={[
        isLeft ? "" : "ml-auto",
        // мягче и удобнее на разных ширинах
        "max-w-[72%] md:max-w-[66%] lg:max-w-[60%]",
        className ?? "",
      ].join(" ")}
    >
      <div className={[labelBase, labelTone, labelClassName ?? ""].join(" ")}>
        {role}
      </div>

      <div className={[bodyBase, bodyTone, bodyClassName ?? ""].join(" ")}>
        {children}
      </div>
    </article>
  );
}



export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 text-[13px] tracking-[0.12em] uppercase text-[#9fb3d9]/70">
      {children}
    </div>
  );
}

export function Paragraphs({ children }: { children: React.ReactNode }) {
  // Делает ровный вертикальный ритм между параграфами внутри одного блока
  return <div className="space-y-2">{children}</div>;
}

export function DashList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-2">
      {items.map((t, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.55em] h-[1px] w-3 bg-[#9fb3d9]/50 shrink-0" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function NumberedList({
  items,
}: {
  items: { n: string; text: string }[];
}) {
  return (
    <ol className="mt-6 space-y-4">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3">
          <span className="text-[#9fb3d9]/70 w-6 shrink-0">{it.n}.</span>
          <span>{it.text}</span>
        </li>
      ))}
    </ol>
  );
}
