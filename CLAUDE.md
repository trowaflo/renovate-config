# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A collection of shared [Renovate](https://docs.renovatebot.com/) configuration presets published as `github>trowaflo/renovate-config`. Other repos consume these presets via `"extends"` in their `renovate.json`.

## CI — what runs on PRs

Three workflows trigger on pull requests:

| Workflow | Trigger | What it does |
|----------|---------|--------------|
| `validate.yml` | `*.json`, `*.json5` changed | Validates Renovate config syntax via `trowaflo/github-actions` reusable workflow |
| `quality.yml` | any PR | Runs gitleaks, checkov, actionlint, markdownlint, jsonlint, KICS, trivy |
| `docs.yml` | `*.json`, `*.json5` changed | Auto-regenerates `README.md` and commits it (`[skip ci]`) |

There is no local lint/test command — CI runs entirely on GitHub Actions via reusable workflows pinned to SHAs.

## File structure and conventions

- **`default.json`** — the root preset consumed by `"extends": ["github>trowaflo/renovate-config"]`. Defines global settings: `minimumReleaseAge: 30 days`, `minimumReleaseAgeBehaviour: timestamp-required`, `internalChecksFilter: strict`, and extends all domain presets.
- **`*.json5`** — one preset per domain (ansible, ci, docker, git-ops, helm, kubernetes, no_category, renovate). Each defines `packageRules` and/or `customManagers` scoped to its manager(s).
- **`renovate.json5`** — Renovate config for *this repo itself* (self-hosted), extends `github>trowaflo/renovate-config`.

## Preset conventions

Each preset follows the same pattern:

1. **Group patch+minor together**, major separately — one `groupName` per update type bucket.
2. **`commitMessagePrefix`** follows conventional commits: `chore(<scope>):` for non-major, `chore(<scope>)!:` for major.
3. **Labels** match the domain name (e.g. `"docker"`, `"helm"`, `"ansible-galaxy"`).
4. No auto-merge is configured in any preset.

When adding a new preset:

- Create `<name>.json5` at the root.
- Add it to the `"extends"` list in `default.json`.
- The `docs.yml` workflow will regenerate `README.md` automatically — do not edit `README.md` manually.

## Workflow pinning policy

All `uses:` in workflows are pinned to a **full commit SHA** with a `# vX.Y.Z` comment. Never use a floating tag or branch reference. When updating a workflow reference, update both the SHA and the comment.

## Security tools config

- **`.gitleaks.toml`** — extends the default ruleset, no custom rules.
- **`kics.config`** — excludes two KICS query IDs (known false positives for this repo).
- **`.markdownlint.yml`** — disables MD013 (line length) and MD060 (table column style) for auto-generated tables.
