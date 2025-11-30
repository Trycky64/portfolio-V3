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
        "rounded-full border border-slate-700 bg-slate-900 px-2 py-1 text-[11px] text-slate-200",
        className,
      )}
    >
      {children}
    </span>
  );
}
