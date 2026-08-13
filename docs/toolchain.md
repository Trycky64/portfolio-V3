# Toolchain V5

The Portfolio V5 baseline uses **Node.js 22**.

- Local development: Node.js 22
- GitHub Actions CI: Node.js 22
- Production target (Raspberry Pi): Node.js 22
- Minimum supported runtime: Node.js 22.13.0
- npm: 10 or newer
- Vitest: 4.1.10

## Validation commands

```bash
npm run check
npm run verify
```

`check` runs:

- ESLint
- TypeScript type-checking
- Vitest

`verify` runs the complete validation suite and then creates the production Next.js build.

## Dependency installation

Use:

```bash
npm ci
```

for clean and reproducible installations.

When dependencies are intentionally changed, regenerate `package-lock.json` through npm rather than editing the lockfile manually.
