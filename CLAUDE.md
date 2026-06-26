# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the UC San Diego Animation Club. Vanilla HTML/CSS/JS with no build tools, bundler, or package manager. Currently a prototype with placeholder content — all copy is lorem ipsum and should stay that way until a human provides real content.

## Development

Open `index.html` directly in a browser, or serve with any static file server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

No build step, no linting, no tests.

## Architecture

**Single-page app via class toggling.** Pages are `<div class="page" data-page="...">` elements in `index.html`. The global `window.__go(page)` function (defined in `app.js`) toggles the `.active` class to show/hide pages. Navigation buttons call `__go()` directly via `onclick` attributes. There is no URL-based routing.

**Data-driven rendering.** All content (films, officers, events, merch, etc.) lives in the `DATA` object in `data.js`. Each section has a `render*()` function in `renderers.js` that builds HTML strings from `DATA` and injects them via `innerHTML`. The global `window.__rerender()` calls all renderers — it runs on DOMContentLoaded and after theme switches.

**Shared namespace.** The three JS files communicate via `window.AC`: `data.js` sets `AC.DATA` and `AC.G`, `renderers.js` reads those and sets `AC.renderers`, and `app.js` wires everything to the DOM.

**Theming system.** `styles.css` defines the default theme via CSS custom properties on `:root`. Each theme file in `themes/` (scrapbook, floral, forest, baroque) overrides these variables under a `[data-theme="..."]` selector. `theme-switcher.js` builds a floating theme picker, swaps the `<link id="theme-css">` href, sets `data-theme` on `<html>`, persists to localStorage, and calls `__rerender()` to refresh data-driven gradients.

**Key globals exposed on `window`:** `__go`, `__openLB`, `__closeLB`, `__toggleNav`, `__submitForm`, `__resetForm`, `__rerender`.

## File Roles

- `index.html` — All page markup (home, history, officers, past events, fall events, merch, contact) plus the lightbox overlay
- `data.js` — Gradient token shortcuts (`AC.G`) and the `DATA` object (`AC.DATA`) with all placeholder content
- `renderers.js` — CSS variable helpers and 9 `render*()` functions that build HTML from DATA, exposed as `AC.renderers`
- `app.js` — SPA routing, lightbox, scroll-reveal (IntersectionObserver), form handling, `__rerender()` orchestration
- `styles.css` — Default theme variables, base styles, animations, responsive breakpoints
- `theme-switcher.js` — Theme picker UI, theme application, localStorage persistence
- `oneko.plugin.js` — Cursor-following cat animation (third-party plugin, self-contained)
- `themes/*.css` — Theme overrides (each file is a complete set of CSS custom property overrides plus theme-specific decorative rules)

**Script load order matters:** `data.js` → `renderers.js` → `app.js` → `theme-switcher.js` → `oneko.plugin.js`

## Visual Foundations

**Color palette.** Navy ink (`--c-primary #1E3A5F`) on near-white surfaces. Personality comes from pastels: the 6-stop `--holo` gradient (pink → peach → mint → sky → lavender → pink) plus named duotones (`--g-pink/blue/mint/lav/coral/gold`). Accents are pink `#FF7E9A` and sky blue `#7FB4D9`.

**Typography (4 roles):**
- `--font-body` (Quicksand) — body text and most headings
- `--font-display` (Playfair Display) — serif for hero h1/h2 sub-headings
- `--font-logo` (Pacifico) — script wordmark, hero "Animation Club" line
- `--font-mono` (system monospace) — eyebrow kickers, metadata, uppercase `.22em` tracking

**The `--holo` gradient** is the signature element — it appears on buttons, nav accent strip, card top-bars, ambient blobs, and CTA bands. It is a highlight, not a wallpaper.

**Shadow elevation scale:** `--shadow-card` (resting) → `--shadow-card-hover` (lifted) → `--shadow-elevated` (panels) → `--shadow-hero` (glass) → `--shadow-btn` (buttons).

**Ambient layer:** Fixed behind content — large blurred floaty blobs (11-14s morph) in pastel ambient colors, plus twinkling `✦` sparkles. Respects `[data-motion="0"]` kill-switch.

## Theme Architecture

Five themes: `default` (holographic pastel), `scrapbook` (paper/dashed/washi), `floral` (warm ceramic garden), `forest` (dark enchanted, gold accents), `baroque` (parchment, ornate serif).

Each theme overrides **50+ CSS custom properties**: colors, gradients, backgrounds, typography (font-family), shapes (border-radius), shadows, ambient/sparkle colors, borders, and body patterns.

**Per-theme font stacks:**
| Theme | `--font-display` | `--font-body` | `--font-logo` |
|-------|-----------------|---------------|---------------|
| Default | Playfair Display | Quicksand | Pacifico |
| Scrapbook | Patrick Hand | Patrick Hand | Patrick Hand |
| Floral | Fredoka | Quicksand | Fredoka |
| Forest | Cinzel | Quicksand | Cinzel Decorative |
| Baroque | Cinzel Decorative | Quicksand | Cinzel Decorative |

Each theme also has **decorative CSS rules** beyond variable overrides (e.g. scrapbook: dashed borders, rotated cards, washi tape; forest: gold glows, firefly sparkles; baroque: ornate flourishes, running rabbits footer).

## Voice & Tone (for placeholder text)

Warm, casual, student-to-student. Copy speaks as "we" (the club) to "you" (the reader). Sentence case for headings. UPPERCASE reserved for mono eyebrow kickers. Middle dot `·` as separator. Sparkle `✦` ends CTAs. Emoji used sparingly as nav-card/merch glyphs only.

**Do not write original AI-generated copy.** Always use lorem ipsum or clearly labeled placeholders. Real content will be provided by club members.

## Adding a New Theme

1. Create `themes/<name>.css` with a `[data-theme="<name>"]` selector overriding the CSS custom properties from `:root` in `styles.css`
2. Add an entry to the `THEMES` array in `theme-switcher.js` with `id`, `name`, `swatch` gradient, and `file` path

## Adding a New Page

1. Add a `<div class="page" data-page="<key>">` section in `index.html`
2. Add nav buttons with `onclick="window.__go('<key>')"` to both desktop and mobile nav
3. If data-driven, add data to the `DATA` object in `data.js`, a `render*()` function in `renderers.js` (and export it in `AC.renderers`), then call it from `__rerender()` in `app.js`

## Design Kit Reference

The `Animation Club — Holographic UI Kit/` directory contains a design system export (from Claude Design) that documents the full token layer, React components, and visual guidelines. It is a reference, not a dependency — the live site is the source of truth. Useful for understanding design intent, token names, and component anatomy.
