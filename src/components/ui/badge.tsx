import type { ReactNode } from "react";
import clsx from "clsx";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "rounded-full border border-qp-primary/40 bg-slate-900 px-2 py-1 text-[11px] text-qp-primary",
        className,
      )}
    >
      {children}
    </span>
  );
}
