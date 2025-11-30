import type { ReactNode } from "react";
import clsx from "clsx";

type BadgeVariant = "default" | "blue";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}) {
  const base = "rounded-full px-2 py-1 text-[11px]";
  const variants: Record<BadgeVariant, string> = {
    default: "border border-slate-700 bg-slate-900 text-slate-200",
    blue: "border border-qp-primary/40 bg-slate-900 text-qp-primary",
  };

  return <span className={clsx(base, variants[variant], className)}>{children}</span>;
}
