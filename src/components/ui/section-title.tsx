interface SectionTitleProps {
  title: string;
  eyebrow?: string;
  description?: string;
}

export function SectionTitle({ title, eyebrow, description }: SectionTitleProps) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-sky-400">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">{title}</h2>
      {description && <p className="mt-2 text-sm text-slate-300">{description}</p>}
    </div>
  );
}
