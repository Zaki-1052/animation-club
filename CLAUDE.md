# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for the UC San Diego Animation Club. Vanilla HTML/CSS/JS with no build tools, bundler, or package manager. The site now carries real club content (events, merch, prices) supplied by the club VP; source assets live in `files/` and copy facts in `website-information.md`. Hidden pages (history, officers, contact) still hold placeholders until officers provide content.

## Development

Open `index.html` directly in a browser, or serve with any static file server:

```bash
python3 -m http.server 8000
# or
npx serve .
```

No build step, no linting, no tests.

## Architecture

**Single-page app via class toggling.** Pages are `<div class="page" data-page="...">` elements in `index.html`. The global `window.__go(page)` function (defined in `app.js`) toggles the `.active` class to show/hide pages. There is no URL-based routing.

**Content layer.** All editable copy/data lives in `content/*.js` (each sets a slice of `window.AC.CONTENT`). Files are marked `EDIT ME` and flag VP-verbatim text vs. connective copy. `data.js` is a thin assembler: it reads `AC.CONTENT`, decorates entries with gradient tokens (`AC.G`), and produces `AC.DATA`.

- `content/config.js` — visible pages (`PAGES` / `HIDDEN_PAGES`) and EmailJS order delivery (`ORDER`: service/template/public key; recipients live in the EmailJS template, see `emailjs-template.md`)
- `content/site.js` — welcome line, page headers, nav cards, footer, Instagram links
- `content/events.js` — past event categories + Fall 2026 schedule
- `content/merch.js` — products, prices, image paths, sizes, order-form copy

**Rendering.** Each section has a `render*()` function in `renderers.js` building HTML strings from `AC.DATA`, injected via `innerHTML` from `window.__rerender()` in `app.js` (runs on DOMContentLoaded and after theme switches; all lookups are null-guarded). The nav (desktop + mobile) is rendered from `config.PAGES` — hiding/showing a page is a one-line config change.

**Merch orders.** `order.js` owns the order builder: `__addToOrder` from product cards, quantity/remove controls, a floating order bar, and `__submitOrder` which POSTs to the EmailJS REST API (plain-text `OK` response, not JSON; recipients are hardcoded in the EmailJS template). With incomplete `ORDER` config it shows an explicit error pointing at Instagram — it never fakes success.

**Page frame system (storybook theme).** Each visible page is a "storybook page" built from the VP's drawn art (`files/website-background/`, optimized into `assets/frame/`):

- `.masthead` — per-page arch crop (`arch-*.webp`, art y0–2050 of 3640×4096) with the page title absolutely positioned inside the arch; the home masthead instead holds the wordmark and Bonnie gif positioned into the two drawn gold frames (percent coordinates measured from the art)
- `.page-body` — continues the drawing: per-page interior gradient (`--pb-a`/`--pb-b`, sampled from each art file at the crop line) plus the vine-column strips (`column-*.webp`, sky keyed out, tile period art y2050–3692) tiling down both edges via `repeat-y`
- the document backdrop (`--root-bg` on `.site-root`) is the drawn sky as a calibrated CSS gradient, so art edges and CSS meet seamlessly
- under 820px the column strips drop and content goes full-width

Non-storybook themes collapse this via the `:root:not([data-theme="storybook"])` block in `styles.css` (arch hidden, plain themed hero/headers).

**Shared namespace.** `window.AC`: content files set `AC.CONTENT`, `data.js` sets `AC.DATA`/`AC.G`, `renderers.js` sets `AC.renderers`, `app.js`/`order.js` wire the DOM.

**Key globals on `window`:** `__go`, `__openLB`, `__closeLB`, `__toggleNav`, `__rerender`, `__addToOrder`, `__orderQty`, `__orderRemove`, `__renderOrderItems`, `__submitOrder`, `__resetOrderForm`.

**Script load order matters:** `content/config.js` → `content/site.js` → `content/events.js` → `content/merch.js` → `data.js` → `renderers.js` → `app.js` → `order.js` → `theme-switcher.js` → `oneko.plugin.js`

## File Roles

- `index.html` — page markup (home, past, fall, merch + hidden history/officers/contact stubs), nav shell, footer, lightbox
- `content/*.js` — all editable copy and data (see above)
- `data.js` — assembles `AC.DATA` from content, adds gradient tokens
- `renderers.js` — nav + section renderers exposed as `AC.renderers`
- `app.js` — SPA routing, lightbox (image or gradient), scroll-reveal, static copy injection
- `order.js` — merch order state, order bar, EmailJS submission
- `styles.css` — **storybook base theme** (`:root` tokens + all component styles + storybook decoration + non-storybook fallback layout)
- `theme-switcher.js` — floating picker; storybook is default (`file:''`), others load `themes/*.css`
- `themes/` — `holo.css` (the original holographic look), `scrapbook.css`, `floral.css`, `forest.css`, `baroque.css`
- `assets/` — optimized production images (webp); regenerate from `files/` with ImageMagick, never edit by hand
- `files/` — VP-supplied source art, photos, and the docx. Source of truth; never modified
- `oneko.plugin.js` — cursor-following cat (third-party, self-contained)

## Visual Foundations (storybook default)

**Palette** — sampled from the wordmark/arch art: plum ink `#3B2A52` on parchment `#FDF9F0`; accents rose `#C96F8E`, sky `#4E8CA8`, vine `#6E7D3F`; gold hairlines `rgba(143,95,32,…)`. Committed palette: plum ink, never navy; parchment, never white.

**Typography:** `--font-display` Fredoka (chunky-rounded, echoes the hand-lettered wordmark) · `--font-body` Patrick Hand (handwriting, the anti-slop signal) · `--font-mono` Cinzel (carved-stone eyebrow labels/dates).

**Anti-slop DNA carried from scrapbook:** hard offset shadows (`2px 3px 0`, stacked-paper), slight card tilt on browsy grids only, physical-metaphor details (double gold frame borders echoing the drawn frames, `─ ✦ ─` footer rule), no gradient text.

**Shadow scale:** `--shadow-card` → `--shadow-card-hover` → `--shadow-elevated` → `--shadow-hero` → `--shadow-btn` (all hard-offset + soft tail under storybook).

**Ambient layer:** fixed sky-cloud blobs + `✦` sparkles behind the stage; respects `[data-motion="0"]`.

## Theme Architecture

Six themes: `storybook` (default, lives in `styles.css` `:root` — no FOUC), `holo`, `scrapbook`, `floral`, `forest`, `baroque`. Each theme file overrides the CSS custom properties (including `--root-bg`) under `[data-theme="..."]` plus its own decorative rules. Storybook-only decoration is scoped `[data-theme="storybook"]` inside `styles.css`.

Theme files must target the **stable hooks**, never DOM position: `.site-nav`, `.nav-accent`, `.site-footer`, `.ambient-layer`, `.masthead`, `.page-arch`, `.page-body`, `.hero-frame-wordmark`, `.hero-frame-bonnie`, `.masthead-title`.

### Adding a New Theme

1. Create `themes/<name>.css` with `[data-theme="<name>"]` overriding the custom properties from `:root` in `styles.css` (including `--root-bg`)
2. Add an entry to `THEMES` in `theme-switcher.js` with `id`, `name`, `swatch`, `file`

### Re-enabling a Hidden Page

1. Move its entry from `HIDDEN_PAGES` to `PAGES` in `content/config.js`
2. Replace the placeholder stub in `index.html` with a real masthead + `.page-body` (add interior colors: a `.page[data-page="<key>"] .page-body` rule — `files/website-background/Officers.png` is already drawn for the officers page)
3. Add its content to a `content/*.js` file and a renderer if data-driven

## Voice & Tone

Warm, casual, student-to-student; "we" (the club) to "you" (the reader). Sentence case headings; UPPERCASE only in eyebrow kickers; `·` separators; `✦` ends CTAs; emoji sparingly (nav-card glyphs). VP-provided text ships verbatim (marked in content files).

**Do not write original AI-sounding copy.** Connective copy must be minimal and follow `anti-ai-writing-style-guide.md` (binding). Anything the club hasn't supplied stays placeholder — real content comes from club members.

## Design Kit Reference

The `Animation Club — Holographic UI Kit/` directory contains a design system export (from Claude Design) documenting the holo theme's token layer. Reference only — the live site is the source of truth.

@website-information.md
@requests.txt
