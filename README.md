# UC San Diego Animation Club

The official website for the UC San Diego Animation Club.

**Live site:** [animation-club-ucsd.netlify.app](https://animation-club-ucsd.netlify.app/)

## Running locally

Open `index.html` in a browser, or serve with any static file server:

```bash
python3 -m http.server 8000
```

No build step, no dependencies.

## Structure

```
index.html          Single-page app shell (all pages as toggled divs)
styles.css          Base styles + storybook default theme
content/            Editable content (events, merch, site copy, config)
data.js             Assembles content into AC.DATA
renderers.js        Builds HTML from data
app.js              SPA routing, lightbox, scroll-reveal
order.js            Merch order builder + EmailJS submission
theme-switcher.js   Floating theme picker
themes/             Alternate theme stylesheets (holo, scrapbook, floral, forest, baroque)
assets/             Optimized production images (webp)
files/              VP-supplied source art and docs (not edited)
oneko.plugin.js     Cursor-following cat
```

## Content editing

All editable text and data lives in `content/*.js`. Each file sets a slice of `window.AC.CONTENT`:

- **config.js** -- visible/hidden pages, EmailJS order delivery settings
- **site.js** -- welcome line, page headers, nav cards, footer, social links
- **events.js** -- past event history + current quarter schedule
- **merch.js** -- products, prices, images, sizes, order form copy

The fall schedule's "Next up" banner auto-advances based on the current date.

## Themes

Six themes are available via the floating picker. Storybook (the default) is defined in `styles.css`; the others live in `themes/*.css` and override CSS custom properties.

To add a theme:

1. Create `themes/<name>.css` overriding the `:root` custom properties under `[data-theme="<name>"]`
2. Add an entry to `THEMES` in `theme-switcher.js`

## Deployment

Hosted on Netlify. Push to `main` to deploy.
