# Epitome Marketing - Deployment Guide

This guide explains the complete workflow for saving code changes to GitHub and deploying production builds to Hostking.

---

## Overview

We use **two separate Git repositories** for different purposes:

| Repository | Location | Purpose |
|------------|----------|---------|
| **GitHub** | `d:\Projects\Epitome-Marketing` | Source code version control |
| **Hostking** | `d:\Projects\Epitome-Marketing\.next\standalone` | Production deployment |

```
┌─────────────────────────────────────────────────────────────────────┐
│                        WORKFLOW OVERVIEW                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Developer Machine                                                 │
│   ┌─────────────────────────────────────────────────────────────┐   │
│   │                                                             │   │
│   │   Epitome-Marketing/                                        │   │
│   │   ├── src/                   ─┐                             │   │
│   │   ├── public/                 │  Source Code                │   │
│   │   ├── package.json           ─┘  → Push to GitHub           │   │
│   │   │                                                         │   │
│   │   └── .next/standalone/      ─── Production Build           │   │
│   │                                  → Push to Hostking          │   │
│   │                                                             │   │
│   └─────────────────────────────────────────────────────────────┘   │
│                                                                     │
│                    │                           │                    │
│                    ▼                           ▼                    │
│              ┌──────────┐              ┌──────────────┐             │
│              │  GitHub  │              │   Hostking   │             │
│              │  (code)  │              │  (live site) │             │
│              └──────────┘              └──────────────┘             │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Part 1: Daily Development Workflow (GitHub)

### 1.1 Before You Start Coding

Always pull the latest changes before starting work:

```bash
cd d:\Projects\Epitome-Marketing
git pull origin main
```

### 1.2 Making Code Changes

1. Open the project in your code editor
2. Make your changes to files in `src/`, `public/`, etc.
3. Test your changes locally:
   ```bash
   npm run dev
   ```
4. Open http://localhost:3000 to verify changes work

### 1.3 Saving Changes to GitHub

Once you're happy with your changes:

```bash
# Step 1: Check what files changed
git status

# Step 2: Stage all changes (or specific files)
git add .
# OR for specific files:
git add src/app/page.tsx src/components/Header.tsx

# Step 3: Commit with a descriptive message
git commit -m "feat: Add new contact form validation"

# Step 4: Push to GitHub
git push origin main
```

### 1.4 Commit Message Guidelines

Use clear, descriptive commit messages:

| Prefix | Use For | Example |
|--------|---------|---------|
| `feat:` | New features | `feat: Add user authentication` |
| `fix:` | Bug fixes | `fix: Correct mobile menu alignment` |
| `docs:` | Documentation | `docs: Update README` |
| `style:` | Formatting/CSS | `style: Improve button hover states` |
| `refactor:` | Code restructuring | `refactor: Split utils into modules` |

---

## Part 2: Production Deployment (Hostking)

> ⚠️ **IMPORTANT**: Only deploy to production when changes are tested and ready for the live site!

### 2.1 Build the Production Version

```bash
cd d:\Projects\Epitome-Marketing
npm run build
```

This creates/updates the `.next/standalone/` folder with the production-ready files.

### 2.2 Prepare Standalone Folder (First Time Only)
If this is your first time deploying this project:

```bash
cd .next/standalone
git init
git remote add origin ssh://rekfdkwa@sabretooth.hkdns.host:6222/~/domains/epitome-marketing.co.za/WebFIles.git
```

### 2.3 Commit and Push to Hostking

```bash
# Step 1: Navigate to the standalone folder
cd .next/standalone

# Step 2: Stage all files
git add .

# Step 3: Commit with deployment message
git commit -m "Deploy: Brief description of what's being deployed"

# Step 4: Push to Hostking
git push origin master --force
```
*Note: Using --force might be necessary if histories diverge, but be careful.*

### 2.4 Deploy on Hostking

1. **Log in to Hostking Control Panel**
2. **Navigate to the Git section** (domains > [YOUR_DOMAIN] > WebFIles.git)
3. **Click "Deploy"** to copy files from Git repo to public_html
4. **Restart the Node.js application** (if not automatic)

### 2.5 Verify the Deployment

1. Visit https://[YOUR_DOMAIN]
2. Check that your changes are visible
3. Test key functionality

---

## Part 3: Complete Deployment Checklist

Use this checklist for every production deployment:

```
□ All changes committed to GitHub
□ Changes tested locally (npm run dev)
□ npm run build completed successfully
□ Navigate to .next/standalone
□ git add .
□ git commit -m "Deploy: ..."
□ git push origin master
□ Hostking: Deploy from Git
□ Hostking: Restart Node.js (if needed)
□ Verify live site is working
```

---

## Part 4: Important Notes

### Node.js Server Restarts

When you deploy new code, the Node.js server needs to be restarted for changes to take effect:

| What Changed | Action Required |
|--------------|-----------------|
| Only frontend files (pages, components, styles) | Restart Node.js |
| package.json (new dependencies) | Run `npm install` THEN restart Node.js |
| Environment variables | Restart Node.js |

### When to Run npm install on Server

Only run `npm install` on Hostking when you've added, removed, or updated packages in `package.json`. For most deployments (code-only changes), you just need to restart the server.

### Downtime During Deployment

There will be brief downtime (~1-5 seconds) when restarting the Node.js server. Plan deployments during low-traffic periods if possible.

---

## Part 5: Git Remote Reference

### GitHub (Source Code)
- **Location**: `d:\Projects\Epitome-Marketing`
- **Remote Name**: `origin`
- **URL**: `https://github.com/Torres91/Epitome-Marketing-.git`
- **Branch**: `main`

### Hostking (Production)
- **Location**: `d:\Projects\Epitome-Marketing\.next\standalone`
- **Remote Name**: `origin`
- **URL**: `ssh://rekfdkwa@sabretooth.hkdns.host:6222/~/domains/epitome-marketing.co.za/WebFiles.git`
- **Branch**: `master`

---

## Part 6: Troubleshooting

### "Permission denied" when pushing to Hostking

Your SSH key may not be authorized. Contact the admin to add your SSH public key to Hostking.

### "Connection refused" when pushing to Hostking

Make sure you're using port 6222 (or your assigned port), not the default port 22.

### Build fails with errors

1. Check the error message for the specific issue
2. Fix the code error
3. Run `npm run build` again
4. Check for missing assets. Note: We automatically copy `public` and `.next/static` folder content to standalone, but verify if images are missing.

### Changes not showing on live site

1. Make sure you deployed from the Git panel
2. Restart the Node.js application
3. Clear your browser cache (Ctrl+Shift+R)

---

## Quick Reference Commands

```bash
# ═══════════════════════════════════════════════════
# GITHUB (Source Code)
# ═══════════════════════════════════════════════════
cd d:\Projects\Epitome-Marketing
git pull origin main          # Get latest changes
git add .                     # Stage changes
git commit -m "message"       # Commit
git push origin main          # Push to GitHub

# ═══════════════════════════════════════════════════
# HOSTKING (Production Deployment)
# ═══════════════════════════════════════════════════
cd d:\Projects\Epitome-Marketing
npm run build                 # Build production files

cd .next/standalone           # Go to build folder
git add .                     # Stage build files
git commit -m "Deploy: ..."   # Commit
git push origin master        # Push to Hostking

# Then: Deploy & restart on Hostking panel
```

---

*Last updated: January 2026*
