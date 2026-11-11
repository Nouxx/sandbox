# sandbox

Monorepo for front-end experiments across frameworks — always Node + TypeScript. Tooling is [Vite+](https://viteplus.dev) (`vp`) on pnpm workspaces.

## Setup

```bash
curl -fsSL https://vite.plus | bash   # install the global vp CLI (manages Node, see .node-version)
vp install
```

## Commands

Run from the repo root:

| Command                          | Description                                  |
| -------------------------------- | -------------------------------------------- |
| `vp check`                       | Format, lint (Oxlint) and type-check         |
| `vp fmt`                         | Format with Oxfmt                            |
| `vp test`                        | Run all Vitest tests                         |
| `vp run --filter <pkg> <script>` | Run a script in one app, e.g. `dev`, `build` |
| `vp run -r build`                | Build every app                              |
| `pnpm ready`                     | Check, test and build everything             |

Example: `vp run --filter nextjs dev`.

A pre-commit hook runs `vp staged` (check + fix on staged files).

## Apps

| App                                  | Package      | Description                                                                                         |
| ------------------------------------ | ------------ | --------------------------------------------------------------------------------------------------- |
| [`apps/nextjs`](apps/nextjs)         | `nextjs`     | Next.js App Router experiments (dialog, CSS grid overlay, email validation, header, hidden button). |
| [`apps/vanilla-ts`](apps/vanilla-ts) | `vanilla-ts` | Plain TypeScript + Vite+ starter.                                                                   |

## Conventions

- One workspace per framework under `apps/`, named after the framework folder (no scope, to keep `--filter` short); experiments live inside it. Split an experiment into its own app only when it needs isolated dependencies.
- Shared code goes in `packages/`. App `tsconfig.json` files extend `tsconfig.base.json`.
- Non-Vite frameworks (e.g. Next.js) keep their own dev/build commands; Vite+ still owns lint, format and tests.
