# Portfolio V5 — Quentin Perriere

[![CI](https://github.com/Trycky64/portfolio-V3/actions/workflows/ci.yml/badge.svg?branch=feat%2Fportfolio-v5)](https://github.com/Trycky64/portfolio-V3/actions/workflows/ci.yml)

Portfolio bilingue français/anglais présentant mes projets, compétences et expériences en développement Python, backend, web et applicatif.

## Stack

- Next.js 16 et React 19
- TypeScript
- Tailwind CSS 4
- Vitest

## Prérequis

- Node.js 22
- npm 10 ou version supérieure

La version majeure de Node utilisée localement et en CI est aussi déclarée dans `.nvmrc`.

## Développement

```bash
npm ci
npm run dev
```

Le site est ensuite disponible sur [http://localhost:3000](http://localhost:3000).

## Validation

```bash
npm run verify
```

Cette commande exécute ESLint, la vérification TypeScript, les tests Vitest en mode non interactif, puis le build de production.

Les mêmes étapes sont exécutées séparément dans GitHub Actions afin de rendre les erreurs plus faciles à identifier.
