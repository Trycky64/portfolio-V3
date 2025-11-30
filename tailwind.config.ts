import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: [
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    safelist: [
      "bg-qp-bg",
      "bg-qp-bg/80",
      "bg-qp-bg-soft",
      "text-qp-primary",
      "bg-qp-primary",
      "bg-qp-primary-soft",
      "hover:bg-qp-primary/10",
      "focus:border-qp-primary",
    ],
  },
  theme: {
    extend: {
      colors: {
        "qp-bg": "#020617",
        "qp-bg-soft": "#050816",
        "qp-primary": "#6366F1",
        "qp-primary-soft": "#4F46E5",
        "qp-accent": "#22C55E",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
      },
      spacing: {
        "section-y": "4rem",
      },
    },
  },
  safelist: [
    "bg-qp-bg",
    "bg-qp-bg/80",
    "bg-qp-bg-soft",
    "text-qp-primary",
    "bg-qp-primary",
    "bg-qp-primary-soft",
    "hover:bg-qp-primary/10",
    "focus:border-qp-primary",
  ],
  plugins: [],
};

export default config;
