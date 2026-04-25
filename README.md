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

### 🎯 helm

```json
"extends": ["github>trowaflo/renovate-config:helm.json5"]
```

### 🎯 kubernetes

```json
"extends": ["github>trowaflo/renovate-config:kubernetes.json5"]
```

### 🎯 no_category

```json
"extends": ["github>trowaflo/renovate-config:no_category.json5"]
```

### 🎯 renovate

```json
"extends": ["github>trowaflo/renovate-config:renovate.json5"]
```

## 📋 Preset Details

| Preset | Purpose | Auto-merge | Labels |
|--------|---------|------------|--------|
| ansible | Ansible | 0 rules |  |
| ci | Ci | 0 rules |  |
| docker | Docker | 0 rules | docker |
| git-ops | Git-Ops | 0 rules |  |
| helm | Helm | 0 rules | helm |
| kubernetes | Kubernetes | 0 rules |  |
| no_category | No Category | 0 rules |  |
| renovate | Renovate | 0 rules |  |

## 🔒 Minimum Release Age

The default preset enforces a **30 days** minimum release age with strict security settings:

| Option | Value |
|--------|-------|
| `minimumReleaseAge` | `30 days` |
| `internalChecksFilter` | `strict` |

> **Note** : Security updates bypass minimumReleaseAge.

---
*Documentation auto-generated on Sat Apr 25 19:56:49 UTC 2026*
