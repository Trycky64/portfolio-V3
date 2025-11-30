import type { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "outline";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export function Button({ variant = "primary", children, className, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center rounded-full px-5 py-2 text-sm font-medium transition disabled:opacity-60";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-sky-400 text-slate-950 hover:bg-indigo-400",
    outline:
      "border border-sky-400 text-sky-400 hover:bg-sky-500/10",
  };

  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
