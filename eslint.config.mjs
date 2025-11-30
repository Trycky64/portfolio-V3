import nextConfig from "eslint-config-next";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // Config Next.js officielle (core-web-vitals, etc.)
  ...nextConfig,

  // Désactive les règles conflictuelles avec Prettier
  eslintConfigPrettier,

  // Règles custom éventuelles
  {
    rules: {
      // Exemple si tu veux plus tard :
      // "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];
