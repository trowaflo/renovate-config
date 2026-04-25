# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repo is

A collection of shared [Renovate](https://docs.renovatebot.com/) configuration presets published at `github>trowaflo/renovate-config`. Consumers extend these presets in their own `renovate.json`.

## Files at a glance

| File | Role |
|------|------|
| `default.json` | Root preset — global defaults (minimumReleaseAge, schedule, reviewers, commitMessageExtra) |
| `renovate.json5` | Self-referencing config used to keep this repo's own deps up-to-date |
| `ansible.json5` | Preset for Ansible Galaxy + regex-based vars files |
| `ci.json5` | Preset for GitHub Actions |
| `docker.json5` | Preset for docker-compose |
| `git-ops.json5` | Preset for GitOps/ArgoCD (OCI + Helm repo custom managers, disables platformAutomerge) |
| `helm.json5` | Preset for Helm charts (helmv3/helm-values, with `bumpVersion`) |
| `kubernetes.json5` | Preset for Kubernetes YAML files + regex renovate comments |
| `no_category.json5` | Preset for pre-commit hooks (ansible-lint, gitleaks) |

## Preset conventions

Every preset follows the same structure: **non-major** (patch + minor) updates are grouped together; **major** updates get a separate group. Commit message prefixes follow Conventional Commits with a scope, e.g. `chore(docker):` / `chore(docker)!:` for breaking. Major PRs automatically get the `breaking` label (set in `default.json`).

## CI workflows (all run on PRs only)

| Workflow | Trigger | What it does |
|----------|---------|--------------|
| `validate.yml` | PR touching `*.json`/`*.json5` | Validates Renovate config via `trowaflo/github-actions` reusable workflow |
| `quality.yml` | Any PR | Runs gitleaks, checkov, actionlint, markdownlint, jsonlint, kics, trivy |
| `docs.yml` | PR touching `*.json`/`*.json5` | Auto-generates `README.md` and commits it back to the branch |

There is **no local lint/test command** — validation runs exclusively in CI. To test a change locally, push to a branch and open a PR.

## Key design decisions

- `minimumReleaseAge: "30 days"` with `internalChecksFilter: "strict"` in `default.json` — new releases must be at least 30 days old before Renovate proposes them. Security updates bypass this.
- `commitMessageExtra` in `default.json` injects the list of upgraded packages into commit titles.
- `git-ops.json5` sets `platformAutomerge: false` — GitOps repos should not auto-merge.
- `helm.json5` uses `bumpVersion` to propagate the upstream chart version bump into the chart's own `Chart.yaml`.
- `kubernetes.json5` includes three regex custom managers to handle `# renovate:` annotation patterns in YAML files (image, value, and version-in-group_vars variants).

## Adding a new preset

1. Create `<name>.json5` at the repo root.
2. Follow the non-major / major split pattern used by existing presets.
3. Reference the new preset from `default.json`'s `extends` array if it should apply globally.
4. The `docs.yml` workflow will regenerate `README.md` automatically when the PR is merged.
