interface SectionTitleProps {
  title: string;
  kicker?: string;
  description?: string;
  className?: string;
}

export function SectionTitle({
  title,
  kicker,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={className ?? "max-w-3xl"}>
      {kicker && (
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
          {kicker}
        </p>
      )}

      <h2 className="mt-2 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 max-w-prose text-base leading-7 text-text-muted sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
