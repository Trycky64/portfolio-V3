# Toolchain V5

The Portfolio V5 baseline uses **Node.js 22**.

- Local development: Node.js 22
- GitHub Actions CI: Node.js 22
- Production target (Raspberry Pi): Node.js 22
- Minimum supported runtime: Node.js 22.13.0
- npm: 10 or newer

## Validation commands

```bash
npm run check
npm run verify
```

`check` runs lint, TypeScript type-checking and the test suite. `verify` runs the complete check and then the production build.

> Vitest dependency correction is handled separately because `package-lock.json` must be regenerated from the npm registry together with `package.json`; do not hand-edit the lockfile.
