# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Angular DevKit Schematics that generate **NestJS module boilerplate**. Generated modules land in `dist/<names>/` and are **manually copied** into the sibling `nestjs-boilerplate` project. This package is a local tool — not published to npm.

## Commands

```bash
npm run build                                    # tsc — REQUIRED before running any schematic
npm run g:mongo  -- --name=country               # Mongo/Mongoose module (README says g:m — stale, use g:mongo)
npm run g:psql   -- --name=country               # PostgreSQL/Sequelize module (v1, legacy)
npm run g:psql_v2 -- --name=country --names=countries   # canonical generator
npm test                                         # builds, then jasmine (specs are placeholders — not a real gate)
```

- `psql_v2` is the canonical schematic. `psql` (v1) and `module` (mongo) are legacy — add new features/templates to `psql_v2`.
- If `--names` is omitted, plural falls back to `name + 's'` — pass it explicitly for irregular plurals.
- The `g:*` scripts pass `--no-dry-run` and write straight to `dist/`.

## Gotchas

- **`dist/` is generator output, not a TS build.** TypeScript compiles in-place: `.js`/`.d.ts`/`.js.map` sit next to `.ts` files in `src/` (gitignored). Stale compiled JS in `src/` means your TS changes won't take effect until `npm run build`.
- **Two template syntaxes.** File *contents* use Angular EJS `<%=Name%>`; file *names* use double-underscore `__name__` / `__name@dasherize__`. Mixing them up fails silently.
- **Template variables:** `name`/`names` (dasherized singular/plural), `Name`/`Names` (PascalCase), `NAMES` (SCREAMING_SNAKE), plus all `@angular-devkit/core` `strings` helpers and a custom `uppercase`. Note: `module` (mongo) computes `NAMES` differently (`toUpperCase` of dasherized) than `psql`/`psql_v2` (`underscore` then `toUpperCase`).
- **Templates are excluded from compilation** (`src/*/files/**` in tsconfig `exclude`) — TS errors inside `files/` are expected and fine.
- **Generated code imports external path aliases** (`@interfaces`, `@const`, `@modules/query`, `@modules/csv`, `@decorators`, `@utils`) that exist only in the consuming `nestjs-boilerplate` repo — don't try to resolve them here.

## Structure

Each schematic lives at `src/<schematic>/` with `index.ts` (factory), `files/` (templates), and is registered in `src/collection.json`.
