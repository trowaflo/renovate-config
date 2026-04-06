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


## 📋 Preset Details

| Preset | Purpose | Auto-merge | Labels |
|--------|---------|------------|--------|
| ansible | Ansible | 2 rules | ansible-galaxy, automerge |
| ci | Ci | 0 rules |  |
| docker | Docker | 1 rules | docker, automerge |
| git-ops | Git-Ops | 0 rules |  |
| no_category | No Category | 1 rules |  |
| renovate | Renovate | 0 rules |  |

---
*Documentation auto-generated on Mon Apr  6 07:55:35 UTC 2026*
