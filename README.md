# Renovate Configuration Presets

This repository contains shared Renovate configuration presets for consistent dependency management across projects.

## Available Presets

### 🔧 Main Configuration
- **`default.json`** - Complete configuration with all presets included
- **`renovate.json`** - Basic configuration extending the default preset

### 📦 Specialized Presets

#### Ansible (`ansible.json5`)
- Ansible Galaxy collections updates
- Custom regex manager for Ansible vars files
- Separate handling for patch/minor vs major updates

#### CI/CD (`ci.json5`)
- GitHub Actions updates
- Automatic merging for patch/minor versions
- Manual review for major versions

#### Docker (`docker.json5`)
- Docker Compose service updates
- Grouped updates by severity
- Automated patch/minor updates

#### GitOps (`git-ops.json5`)
- Kubernetes deployment files
- Helm charts (both OCI and traditional repos)
- ArgoCD compatible configurations

#### Miscellaneous (`no_category.json5`)
- Pre-commit hooks
- Other tools not fitting main categories

## Usage

To use these presets in your project, add to your `renovate.json`:

\`\`\`json
{
  "extends": ["github>trowaflo/renovate-config"]
}
\`\`\`

Or use specific presets:

\`\`\`json
{
  "extends": [
    "github>trowaflo/renovate-config:ci.json5",
    "github>trowaflo/renovate-config:docker.json5"
  ]
}
\`\`\`

## Configuration Details

### Package Rules Summary

#### ansible

      "packageRules": [
        // Ansible Galaxy Patch and Minor Updates
        {
          "matchManagers": ["ansible-galaxy"],
          "matchUpdateTypes": ["patch", "minor"],
          "labels": ["ansible-galaxy", "automerge"],
          "groupName": "AUTOMERGE - Ansible Galaxy Patch and Minor Updates",
          "commitMessageAction": "chore(ansible-galaxy):",
          "commitMessageTopic": "{{depName}}",
          "automerge": true

#### ci

      "packageRules": [
        {
          // GitHub Actions Updates - Automerge Patch and Minor
          "matchManagers": ["github-actions"],
          "matchUpdateTypes": ["patch", "minor"],
          "groupName": "AUTOMERGE - GitHub Actions",
          "commitMessagePrefix": "ci(github-actions):",
          "commitMessageAction": "",
          "commitMessageTopic": "{{depName}}",
          "automerge": true

#### docker

      "packageRules": [
        // Docker Patch and Minor Updates
        {
          "matchManagers": ["docker-compose"],
          "matchUpdateTypes": ["patch", "minor"],
          "labels": ["docker", "automerge"],
          "groupName": "AUTOMERGE - Docker Patch and Minor Updates",
          "commitMessageAction": "chore(docker):",
          "commitMessageTopic": "{{depName}}",
          "automerge": true

#### git-ops


#### no_category

      "packageRules": [
        {
          "matchManagers": ["pre-commit"],
          "matchPackageNames": ["ansible/ansible-lint"],
          "automerge": true
        }
      ]
    }

## Last Updated

Documentation generated on: Sun Nov  2 09:22:39 UTC 2025
