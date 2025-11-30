import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition disabled:opacity-60";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-qp-primary text-slate-950 hover:bg-qp-primary-soft",
    outline: "border border-qp-primary text-qp-primary hover:bg-qp-primary/10",
  };

  return (
    <button className={clsx(base, variants[variant], "focus-ring", className)} {...props}>
      {children}
    </button>
  );
}
