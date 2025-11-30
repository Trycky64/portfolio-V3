import type { ReactNode } from "react";
import clsx from "clsx";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={clsx(
        "flex h-full flex-col rounded-xl border border-slate-800 bg-slate-900/40 p-5 transition hover:-translate-y-0.5 hover:border-qp-primary/70 hover:bg-slate-900/80 hover:shadow-lg",
        className,
      )}
    >
      {children}
    </article>
  );
}
