# AGENTS.md - Lumen

Scope: this file applies to the entire repository. There are no nested `AGENTS.md` files.

## Project

Lumen is a pnpm workspace: `src/` is the published ESM package `@theojs/lumen`, while `docs/` is its VitePress
documentation site and integration consumer through `workspace:*`.

The stack is Vue, VitePress, Vite, TypeScript, CSS, and Biome. Read the supported Node engine and package-manager pin
from the root `package.json`; read dependency and peer constraints from the applicable package manifests and
`pnpm-workspace.yaml`; read resolved versions from `pnpm-lock.yaml`; and read tool versions from config or schema
metadata. Do not copy version snapshots into this file. Cloudflare Pages builds the documentation site from `main`.

The npm package is not bundled before publication. It ships `.ts`, `.vue`, CSS, and declaration files directly, so
source paths and package metadata are part of the consumer contract.

## Repository map

| Path | Responsibility |
| --- | --- |
| `src/components/` | Public Vue components exported by `src/components/index.ts`; `common/` contains internal helpers. |
| `src/composables/` | Public analytics helpers and VitePress utilities. |
| `src/types/` | Package root entry, public types, and generated declaration shims. |
| `src/style/` | Public CSS and the CSS subpath exports declared in `src/package.json`. |
| `docs/` | User guides plus VitePress configuration, theme integration, and workspace-package consumer. |
| `.github/workflows/` | Package previews, tag release notes, and the scheduled npm download report. |
| `docs/public/`; `readme.md` | Static documentation assets copied into the build output; root README symlink to `src/readme.md`. |

## Safe workflow

1. Confirm the repository, branch, upstream, ahead/behind state, worktree, index, untracked files, and in-progress Git
   operations. Preserve existing work; do not stash, reset, clean, or overwrite it.
2. Read the relevant manifests, configuration, source entry points, and this file before editing.
3. When the worktree is clean and the current branch tracks the intended remote, synchronize with
   `git pull --ff-only`. Otherwise report the state instead of forcing synchronization.
4. Keep changes scoped. Dependency changes must use pnpm and include the matching `pnpm-lock.yaml` update.
5. Use `pnpm install --frozen-lockfile` to reproduce an already-aligned manifest and lockfile.

Do not use `pnpm clean` or its subcommands as routine validation; they delete dependencies, output, and the lockfile.
Keep registry credentials outside the repository; `.npmrc` is absent by design, and publish authentication belongs in
user or CI configuration.

## Commands

```bash
pnpm install --frozen-lockfile
pnpm run dev
pnpm run preview
pnpm run format:check
pnpm -C src exec tsc --noEmit -p tsconfig.json
pnpm run build
npm_config_cache=/tmp/lumen-npm-cache npm pack --dry-run --json ./src
git diff --check
```

Run commands from the repository root. `pnpm run format` writes safe Biome formatting, lint, and import-order fixes;
`format:check` checks the formatter, recommended linter rules, and assist actions without writing files.

## Package and code constraints

- Treat component names and props, exported functions and types, CSS variables, package export paths, the `files`
  allowlist, and `sideEffects` as public compatibility surfaces. Do not make breaking changes without explicit scope.
- `src/types/index.ts` is the runtime package entry. Its `components-var.css` and `iconify-icon` imports are intentional
  side effects, not dead imports.
- Keep top-level Vue `defineProps` runtime keys in an inline object shape. Imported types may be used as property value
  types, but direct `defineProps<ImportedInterface>()` can fail during SFC runtime prop extraction; `pnpm run build` is
  the authoritative integration check.
- `pnpm run generate:dts` rewrites `src/types/index.d.ts`, `src/types/shims.d.ts`, and `src/types/style.d.ts`. Run it
  only when changing their generator or intended output, then review all three tracked files.
- Keep VitePress sidebar links absolute (for example, `/guide/getting-started`). Do not combine a sidebar section
  `base` with relative links; `vitepress-plugin-llms` may fail to match those pages.
- The docs build generates `llms.txt` and `llms-full.txt` at the output root. Production redirects `/llms.md` and
  `/llms-full.md` to those files through Cloudflare; the `.md` paths are aliases, not build artifacts.
- The docs theme imports the package root, styles, components, analytics, and public data types. A docs build is the
  primary integration check; the repository has no separate test suite.
- `minimumReleaseAge: 0` is an intentional install policy override. Changing or removing it can alter dependency
  resolution; verify its current semantics against the pinned pnpm version and `pnpm-workspace.yaml` before editing.
  Keep `allowBuilds` limited to installed dependencies that actually run lifecycle scripts.

## Validation by change type

| Change | Required checks |
| --- | --- |
| `AGENTS.md` only | `git diff --check`; verify every documented command/path; confirm only `AGENTS.md` changed. |
| Docs or VitePress/Cloudflare Pages config | `pnpm run format:check`, `pnpm run build`, `git diff --check`. |
| Components, composables, or public types | Format check, source TypeScript check, docs build, package dry-run, diff check. |
| CSS | Format check, docs build, package dry-run, diff check. |
| Dependencies, exports, package files, or release config | Frozen install after manifests/lockfile align, then the full checks above and review the dry-run file list. |

## CI, release, and delivery

- `Publish Commit` runs `pkg-pr-new` for `src/**` changes. It previews the package but does not run Biome, TypeScript,
  or the docs build; do not treat it as full CI.
- Cloudflare Pages tracks `s-theo/lumen` on `main`, runs `pnpm run build`, and publishes `docs/.vitepress/dist`.
- CodeQL default setup, SonarCloud, and Cloudflare Pages checks are external integrations, not local workflow files.
- `pnpm run release` runs `bumpp`, creates a signed release commit/tag, and publishes `src/` to npm. A `v*` tag then
  triggers the GitHub release-notes workflow. Run release commands only with explicit release authorization.
- Do not commit, push, create or mutate a PR, merge, publish, deploy, or delete branches unless Theo explicitly
  authorizes it. Before handoff, inspect the diff/status and report validations, warnings, Git state, and blockers.
