// scripts/verify/screenshot.js — capture site pages/themes/widths for review.
// Usage: node scripts/verify/screenshot.js [outDir]
// Requires the playwright package (installed in the session scratchpad).
const path = require('path');
const { chromium } = require(process.env.PLAYWRIGHT_PKG || 'playwright');

const BASE = process.env.SITE_URL || 'http://localhost:8741';
const OUT = process.argv[2] || 'scripts/verify/shots';

const PAGES = ['home', 'past', 'fall', 'merch'];
const WIDTHS = [[1440, 900], [820, 900], [390, 844]];
const THEMES = ['holo', 'scrapbook', 'floral', 'forest', 'baroque'];

(async () => {
  const browser = await chromium.launch();
  const errors = [];

  async function newPage(w, h) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    page.on('console', m => { if (m.type() === 'error') errors.push(`[console] ${m.text()}`); });
    page.on('pageerror', e => errors.push(`[pageerror] ${e.message}`));
    page.on('requestfailed', r => errors.push(`[requestfailed] ${r.url()} ${r.failure().errorText}`));
    return page;
  }

  // Reveal-forcer: fullPage shots would otherwise capture below-fold sections
  // at opacity 0 (IntersectionObserver hasn't seen them).
  const forceReveals = p => p.evaluate(() => {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
  });

  // Storybook (default) — all pages × widths, full page
  for (const [w, h] of WIDTHS) {
    const page = await newPage(w, h);
    await page.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(1200);
    for (const key of PAGES) {
      await page.evaluate(k => window.__go(k), key);
      await forceReveals(page);
      await page.waitForTimeout(600);
      await page.screenshot({ path: path.join(OUT, `storybook-${key}-${w}.png`), fullPage: true });
    }
    await page.close();
  }

  // Theme sweep — home + merch at 1440 (?themes enables the dev-gated picker)
  for (const theme of THEMES) {
    const page = await newPage(1440, 900);
    await page.addInitScript(t => localStorage.setItem('ac-theme', t), theme);
    await page.goto(BASE + '/?themes', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await page.waitForTimeout(1000);
    for (const key of ['home', 'merch']) {
      await page.evaluate(k => window.__go(k), key);
      await forceReveals(page);
      await page.waitForTimeout(400);
      await page.screenshot({ path: path.join(OUT, `${theme}-${key}-1440.png`), fullPage: true });
    }
    await page.close();
  }

  // Order form: add items, submit with unset key → expect explicit error
  const p2 = await newPage(1280, 900);
  await p2.goto(BASE, { waitUntil: 'domcontentloaded', timeout: 60000 });
  await p2.waitForTimeout(800);
  await p2.evaluate(() => window.__go('merch'));
  await p2.waitForTimeout(400);
  await p2.evaluate(() => {
    window.__addToOrder('sticker-pride');
    window.__addToOrder('sticker-pride');
    window.__addToOrder('hoodie-rose');
  });
  await p2.waitForTimeout(200);
  await p2.fill('#order-name', 'Test Person');
  await p2.fill('#order-email', 'test@ucsd.edu');
  await p2.click('#order-submit');
  await p2.waitForTimeout(300);
  const errText = await p2.textContent('#order-error');
  console.log('ORDER-ERROR-SHOWN:', JSON.stringify(errText && errText.trim().slice(0, 90)));
  await p2.locator('#order-section').scrollIntoViewIfNeeded();
  await p2.screenshot({ path: path.join(OUT, 'order-form-error.png') });
  await p2.close();

  await browser.close();
  if (errors.length) {
    console.log('PAGE ERRORS:');
    [...new Set(errors)].forEach(e => console.log('  ' + e));
  } else {
    console.log('NO PAGE ERRORS');
  }
})();
