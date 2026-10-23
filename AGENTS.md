# Lumen

Repository-wide; no nested `AGENTS.md`.

## Ownership and contracts

- `src/` ships unbundled TS/Vue/CSS/declarations as ESM package `@theojs/lumen`. Components
  (`src/components/index.ts`), composables, types and styles are public; `src/components/common/` is internal.
  Names, props, exports, CSS variables, paths, `files` and `sideEffects` require compatibility or explicit breaking-change scope.
- `docs/` is the VitePress site and `workspace:*` integration consumer. `docs/public/` is copied to build output;
  root `readme.md` is a symlink to `src/readme.md`.
- Read pins from `.nvmrc`/root `package.json`, constraints from manifests/`pnpm-workspace.yaml`, resolutions from
  `pnpm-lock.yaml`, and tool versions from config/schema metadata; do not duplicate version snapshots here.
- Read relevant source/config before editing. Preserve pinned inputs; no incidental content refresh or hand-edited generated
  files. Registry credentials stay outside the repo; `.npmrc` is intentionally absent.

## Working safely

- Check cwd/origin, branch/upstream, head/base, ahead/behind, worktree/index/untracked, stash and Git operations once.
  Preserve existing edits: no stash/reset/clean/overwrite. If clean and behind the intended upstream, `git pull --ff-only`;
  report divergence/unknown edits. Recheck remote/candidate guards before delivery.
- Reuse installed tools/dependencies. When needed, `pnpm install --frozen-lockfile`; authorized dependency edits use pnpm
  with a matching lockfile. Never validate with `pnpm clean` or its subcommands: they delete dependencies/output/lockfile.
- Keep logs/tools outside build-cleaned caches. Validate the final candidate once; reuse only with unchanged head/base,
  diff, pinned inputs, lock/config, toolchain and relevant environment. Concrete failures invalidate affected evidence;
  do not suppress them or collapse distinct assertions.

## Checks

Run from the root. `pnpm run dev` / `pnpm run preview` serve docs, not validation.

| Check | Command and coverage |
| --- | --- |
| Format | `pnpm run format:check`: read-only Biome format/lint/import checks; `pnpm run format` writes fixes. |
| Types | `pnpm -C src exec tsc --noEmit -p tsconfig.json`: source TS, not full Vue template type checking. |
| Build | `pnpm run build` -> `pnpm -F=docs build` -> `vitepress build`: integration, not Format/Types/Pack. |
| Pack | `npm_config_cache=/tmp/lumen-npm-cache npm pack --dry-run --json ./src`: review the full publish file list. |
| Diff | `git diff --check`. |

Shared-host Build: `flock -w 60 -E 75 /tmp/workspace-content-build-0902.lock pnpm run build`.
Exit 75 means lock contention; retry within task limits, never bypass/kill the holder. No separate test suite exists.
Docs exercise package root/styles/components/analytics/public types. Retain change-specific independent artifact checks.

| Changed surface | Required validation |
| --- | --- |
| Only `AGENTS.md` | Diff; verify documented paths/commands and that no other file changed. |
| Docs or VitePress/Cloudflare config | Format, Build, Diff. |
| Components, composables or public types | Format, Types, Build, Pack, Diff. |
| CSS | Format, Build, Pack, Diff. |
| Dependencies, exports, package files or release config | Aligned frozen install; Format, Types, Build, Pack, Diff. |
| Build/CI/tooling behavior | Regression tests plus affected full checks, including Build where applicable. |

## Non-obvious constraints

- `src/types/index.ts` intentionally imports `components-var.css` and `iconify-icon` for side effects.
- Keep Vue `defineProps` runtime keys inline; imported property-value types are fine, but
  `defineProps<ImportedInterface>()` can fail SFC extraction. Build is the integration gate.
- `pnpm run generate:dts` owns `src/types/index.d.ts`, `src/types/shims.d.ts` and `src/types/style.d.ts`.
  Run it for generator/output changes and before every release; review all three and commit resulting diffs before release.
- Keep sidebar links absolute (e.g. `/guide/getting-started`), not section `base` + relative links: the LLM plugin can miss
  pages. Build emits `llms.txt`/`llms-full.txt`; Cloudflare's `/llms.md`/`llms-full.md` are redirect aliases.
- `minimumReleaseAge: 0` is intentional; verify pinned pnpm/config semantics before changing it.
  `allowBuilds` is only for installed packages with lifecycle scripts.

## CI and release

- `.github/workflows/cr.yml` (`Publish Commit`) only previews `src/**` with `pkg-pr-new`, not Format/Types/Build.
  The scheduled npm download report is not validation either.
- Cloudflare Pages builds `s-theo/lumen` main with `pnpm run build`, publishing `docs/.vitepress/dist`.
  Pages, CodeQL default setup and SonarCloud are external integrations, not local workflow definitions.
- Explicit release authorization only: `pnpm run release` invokes bumpp to create/push a signed commit/tag;
  the `v*` workflow publishes `src/` to npm via trusted publishing and creates GitHub release notes.
- Commit/push/PR mutation/merge/publish/deploy/branch deletion require Theo's explicit authorization. Stage exact reviewed
  paths, push normally, verify remote SHA/checks, and report warnings, Git state and blockers. Distinguish pending/failed/success;
  do not rebuild unchanged validated inputs after delivery.
