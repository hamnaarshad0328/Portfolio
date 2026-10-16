type SectionHeadingProps = {
  id: string;
  index: string;
  title: string;
  lede?: string;
};

export function SectionHeading({ id, index, title, lede }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {index}
      </p>
      <h2
        id={id}
        className="mt-3 font-display text-3xl font-semibold tracking-[-0.03em] text-ink sm:text-4xl"
      >
        {title}
      </h2>
      {lede ? <p className="mt-4 text-base leading-relaxed text-muted">{lede}</p> : null}
    </div>
  );
}
