# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Repo Does

This is a single-page website builder project. The workflow is: receive a reference image → generate `index.html` → screenshot it → compare → fix → repeat until pixel-accurate.

## Commands

```bash
# Take a screenshot of index.html (saved to /tmp/current_screenshot.png)
node screenshot.js

# Install dependencies (only needed once, Puppeteer is the only dep)
npm install
```

There are no build, lint, or test commands — the project is a single static HTML file with no compile step.

## Architecture

- **`index.html`** — the entire site. Single file, all styles inline via Tailwind CDN. No external CSS or JS files.
- **`screenshot.js`** — Puppeteer script that renders `index.html` at 1440×900 and saves a full-page PNG to `/tmp/current_screenshot.png`. Used for visual comparison during iteration.
- **`Logo - Primary Accent.png`** — brand logo asset referenced directly from `index.html`.

## Workflow & Rules

Detailed rules live in `.claude/rules/`:
- `workflow.md` — the iterative screenshot → compare → fix loop (always do ≥2 rounds)
- `technical-defaults.md` — Tailwind CDN, `https://placehold.co/` for images, single `index.html`
- `design-fidelity.md` — match references exactly; report pixel-level differences specifically

## Brand Tokens

| Token | Value |
|---|---|
| Primary Navy | `#0d1b2a` |
| Primary Accent (teal) | `#7fd8be` |
| Slate Gray | `#475569` |
| Coral | `#ff6b6b` |
| Warm White (bg) | `#fafaf8` |
| Midnight Blue | `#1b263b` |

Fonts: **Open Sans** (titles/headings) and **Inter** (body/UI), both via Google Fonts CDN. Quotes use Georgia italic.
