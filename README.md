# 🔧 Renovate Configuration Presets

This repository contains shared Renovate configuration presets for consistent dependency management across projects.

## 🚀 Quick Start

To get started with these presets, simply include them in your Renovate configuration.

Add to your `renovate.json`:
```json
{
  "extends": ["github>trowaflo/renovate-config"]
}
```

## 📦 Available Presets

### 🎯 default

```json
"extends": ["github>trowaflo/renovate-config:default.json"]
```

### 🎯 ansible

```json
"extends": ["github>trowaflo/renovate-config:ansible.json5"]
```

### 🎯 ci

```json
"extends": ["github>trowaflo/renovate-config:ci.json5"]
```

### 🎯 docker

```json
"extends": ["github>trowaflo/renovate-config:docker.json5"]
```

### 🎯 git-ops

```json
"extends": ["github>trowaflo/renovate-config:git-ops.json5"]
```

### 🎯 no_category

```json
"extends": ["github>trowaflo/renovate-config:no_category.json5"]
```

### 🎯 renovate

```json
"extends": ["github>trowaflo/renovate-config:renovate.json5"]
```


## 🔒 Minimum Release Age

The default preset enforces a **30-day minimum release age** for all dependencies, with strict security settings:

| Option | Value | Description |
|--------|-------|-------------|
| `minimumReleaseAge` | `30 days` | Renovate attend 30 jours après la publication d'une release avant de proposer la mise à jour. |
| `minimumReleaseAgeBehaviour` | `timestamp-required` | Si une release n'a pas de timestamp, elle est considérée comme non éligible (comportement sécuritaire). |
| `internalChecksFilter` | `strict` | Aucune branche ni PR n'est créée tant que le délai de `minimumReleaseAge` n'est pas atteint. Les mises à jour en attente sont visibles dans le Dependency Dashboard sous "Pending Status Checks". |

> **Note** : Les mises à jour de sécurité (security updates) contournent le `minimumReleaseAge` et sont proposées immédiatement.

## 📋 Preset Details

| Preset | Purpose | Auto-merge | Labels |
|--------|---------|------------|--------|
| ansible | Ansible | 0 rules | ansible-galaxy |
| ci | Ci | 0 rules |  |
| docker | Docker | 0 rules | docker |
| git-ops | Git-Ops | 0 rules |  |
| no_category | No Category | 0 rules |  |
| renovate | Renovate | 0 rules |  |

---
*Documentation auto-generated on Mon Apr  6 08:04:22 UTC 2026*
