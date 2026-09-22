import clsx from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

export type CardVariant = "default" | "project" | "experience" | "info";

interface CardProps extends HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  children: ReactNode;
}

const variants: Record<CardVariant, string> = {
  default: "bg-surface/55",
  project:
    "bg-surface/70 transition-colors hover:border-primary/45 hover:bg-surface",
  experience: "bg-surface-soft/80",
  info: "bg-surface/35",
};

export function Card({
  variant = "default",
  children,
  className,
  ...props
}: CardProps) {
  return (
    <article
      className={clsx(
        "flex h-full flex-col rounded-lg border border-border p-5 shadow-sm sm:p-6",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </article>
  );
}
