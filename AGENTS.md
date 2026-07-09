# AGENTS.md - Lumen

## Project Overview

Lumen is a pnpm workspace for the `@theojs/lumen` VitePress theme enhancement package and its documentation site.

- Repository: `s-theo/lumen`
- Package source: `src/`
- Documentation site: `docs/`
- Package manager: `pnpm@11.10.0`
- Runtime/deploy target: Node 22 on Netlify
- Netlify command: `pnpm run build`
- Netlify publish directory: `docs/.vitepress/dist`

## Workspace Layout

```text
src/   - Published `@theojs/lumen` package, Vue components, composables, styles, and public types.
docs/  - VitePress documentation site that consumes `@theojs/lumen` through `workspace:*`.
```

The root `package.json` delegates docs build/dev commands:

```bash
pnpm run build      # pnpm -F=docs build
pnpm run dev        # pnpm -F=docs dev
pnpm run preview    # pnpm -F=docs preview
pnpm run format     # biome check --write .
pnpm run format:check
```

## Before Editing

1. Run `git pull` in the repository root before making changes.
2. Read this file and inspect the relevant package files before editing.
3. Keep changes scoped to the PR or task; avoid unrelated dependency churn.
4. Use `pnpm install --frozen-lockfile` after dependency changes.

## Coding Notes

- Use Biome, not Prettier or ad-hoc formatting. Config lives in `biome.json`.
- Style is 2 spaces, single quotes, no semicolons, no trailing commas.
- `pnpm run format` applies Biome safe fixes, formatting, and import organization.
- `pnpm run format:check` verifies formatting/import organization without writing.
- Biome is configured with `files.ignoreUnknown`; unsupported file types are skipped instead of failing the run.
- Keep VitePress sidebar links absolute, such as `/guide/getting-started`. Do not combine sidebar section `base` with relative item links, because `vitepress-plugin-llms` can fail to match those files and emit "No matching file found for sidebar link" warnings.
- Public package types are exported from `src/types/`; keep those interfaces stable unless the task is explicitly a breaking API change.
- Vue SFC `defineProps` in this repo should prefer inline prop shapes when the runtime prop keys are needed. Direct `defineProps<ImportedInterface>()` can fail under the current Vite/VitePress/Rolldown build because Vue SFC cannot resolve imported type members without an fs resolver in that environment.

## Verification

For dependency or component changes, run:

```bash
pnpm run build
```

For formatting-only or broad code changes, also run:

```bash
pnpm run format:check
```
