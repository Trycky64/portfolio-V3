import clsx from "clsx";
import type { AnchorHTMLAttributes, ReactNode } from "react";

export type IconLinkIcon =
  | "github"
  | "linkedin"
  | "email"
  | "external";

interface IconLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children"> {
  icon: IconLinkIcon;
  label: string;
  showLabel?: boolean;
  external?: boolean;
}

function Icon({
  name,
  className,
}: {
  name: IconLinkIcon;
  className?: string;
}) {
  const commonProps = {
    className,
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "github":
      return (
        <svg {...commonProps} viewBox="0 0 24 24">
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.28-.36 6.72-1.61 6.72-7.25A5.65 5.65 0 0 0 19.22 3.3 5.3 5.3 0 0 0 19.08.1S17.9-.27 15 1.6a13.4 13.4 0 0 0-6 0C6.1-.27 4.92.1 4.92.1a5.3 5.3 0 0 0-.14 3.2 5.65 5.65 0 0 0-1.5 3.95c0 5.63 3.44 6.88 6.72 7.25A4.8 4.8 0 0 0 9 18v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...commonProps}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
          <path d="M2 9h4v12H2z" />
          <path d="M4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      );

    case "email":
      return (
        <svg {...commonProps}>
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );

    case "external":
      return (
        <svg {...commonProps}>
          <path d="M15 3h6v6" />
          <path d="M10 14 21 3" />
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        </svg>
      );
  }
}

export function IconLink({
  icon,
  label,
  showLabel = true,
  external = false,
  className,
  target,
  rel,
  ...props
}: IconLinkProps) {
  const resolvedTarget = target ?? (external ? "_blank" : undefined);
  const resolvedRel = rel ?? (external ? "noreferrer noopener" : undefined);

  return (
    <a
      className={clsx(
        "focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-surface hover:text-text-primary",
        className,
      )}
      target={resolvedTarget}
      rel={resolvedRel}
      aria-label={showLabel ? undefined : label}
      {...props}
    >
      <Icon name={icon} className="shrink-0" />
      {showLabel && <span>{label}</span>}
    </a>
  );
}
