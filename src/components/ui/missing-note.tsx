type MissingNoteProps = {
  title: string;
  children: string;
};

export function MissingNote({ title, children }: MissingNoteProps) {
  return (
    <div className="rounded-xl border border-dashed border-line bg-bg/50 px-4 py-3">
      <p className="font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-2">
        To add
      </p>
      <p className="mt-1 text-sm font-medium text-ink">{title}</p>
      <p className="mt-1 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}
