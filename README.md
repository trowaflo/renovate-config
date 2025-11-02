# 🔧 Renovate Configuration Presets

This repository contains shared Renovate configuration presets for consistent dependency management across projects.

## 📦 Available Presets

### 🎯 default

```json
"extends": ["github>trowaflo/renovate-config:default.json"]
```

### 🎯 ansible

```json
"extends": ["github>trowaflo/renovate-config:ansible.json5"]
```

**Package Rules:**
-       "matchManagers": ["ansible-galaxy"],
-       "matchUpdateTypes": ["patch", "minor"],
-       "labels": ["ansible-galaxy", "automerge"],

### 🎯 ci

```json
"extends": ["github>trowaflo/renovate-config:ci.json5"]
```

**Package Rules:**
-       "matchManagers": ["github-actions"],
-       "matchUpdateTypes": ["patch", "minor"],
-       "groupName": "AUTOMERGE - GitHub Actions",

### 🎯 docker

```json
"extends": ["github>trowaflo/renovate-config:docker.json5"]
```

**Package Rules:**
-       "matchManagers": ["docker-compose"],
-       "matchUpdateTypes": ["patch", "minor"],
-       "labels": ["docker", "automerge"],

### 🎯 git-ops

```json
"extends": ["github>trowaflo/renovate-config:git-ops.json5"]
```

### 🎯 no_category

```json
"extends": ["github>trowaflo/renovate-config:no_category.json5"]
```

**Package Rules:**
-       "matchManagers": ["pre-commit"],


## 🚀 Quick Start

Add to your `renovate.json`:
```json
{
  "extends": ["github>trowaflo/renovate-config"]
}
```

## 📋 Preset Details

| Preset | Purpose | Auto-merge | Labels |
|--------|---------|------------|--------|
| ansible | Ansible | 2 rules | ansible-galaxy, automerge |
| ci | Ci | 2 rules |  |
| docker | Docker | 1 rules | docker, automerge |
| git-ops | Git-Ops | 0 rules |  |
| no_category | No Category | 1 rules |  |

---
*Documentation auto-generated on Sun Nov  2 09:26:32 UTC 2025*
