import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

export type BadgeVariant = "tech" | "muted" | "success";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: ReactNode;
}

const variants: Record<BadgeVariant, string> = {
  tech: "border-primary/30 bg-primary/10 text-indigo-200",
  muted: "border-border bg-surface text-text-muted",
  success: "border-success/30 bg-success/10 text-green-300",
};

export function Badge({
  variant = "tech",
  children,
  className,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex min-h-7 items-center rounded-full border px-2.5 py-1 text-xs font-medium leading-none",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
