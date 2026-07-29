// theme-switcher.js
(function() {
  var THEMES = [
    { id: 'storybook', name: 'Storybook', swatch: 'linear-gradient(135deg,#E39FA0,#9C8E70,#5298B5)', file: '' },
    { id: 'holo', name: 'Holographic', swatch: 'linear-gradient(135deg,#FFD0DC,#C2E6F6,#E2DDFB)', file: 'themes/holo.css' },
    { id: 'scrapbook', name: 'Scrapbook', swatch: 'linear-gradient(135deg,#E8788A,#F4C2C2,#8FBC8F)', file: 'themes/scrapbook.css' },
    { id: 'floral', name: 'Floral Garden', swatch: 'linear-gradient(135deg,#E8836B,#F5D76E,#FFF8F0)', file: 'themes/floral.css' },
    { id: 'forest', name: 'Enchanted Forest', swatch: 'linear-gradient(135deg,#1a3a2a,#2d5a3d,#c9a84c)', file: 'themes/forest.css' },
    { id: 'baroque', name: 'Baroque Fairytale', swatch: 'linear-gradient(135deg,#4a7c59,#d4a843,#e8a0bf)', file: 'themes/baroque.css' }
  ];

  // Dev gate: the picker only exists when enabled in content/config.js or
  // via a ?themes URL param. Disabled -> visitors always get the default
  // theme, regardless of anything saved in localStorage.
  var CFG = (window.AC && window.AC.CONTENT && window.AC.CONTENT.config) || {};
  var enabled = CFG.SHOW_THEME_PICKER === true || /[?&]themes\b/.test(window.location.search);

  var current = enabled ? (localStorage.getItem('ac-theme') || 'storybook') : 'storybook';
  // Saved ids from older builds (e.g. 'default') fall back to the site default.
  if (!THEMES.some(function(t) { return t.id === current; })) current = 'storybook';
  var collapsed = true; // start tucked away as just the 🎨 button

  function applyTheme(id) {
    current = id;
    localStorage.setItem('ac-theme', id);
    document.documentElement.setAttribute('data-theme', id);

    var link = document.getElementById('theme-css');
    var theme = THEMES.find(function(t) { return t.id === id; });
    if (link && theme) {
      if (theme.file) {
        link.disabled = false;
        link.href = theme.file;
      } else {
        // Base theme lives in styles.css — no extra sheet to load.
        link.disabled = true;
        link.removeAttribute('href');
      }
    }

    updateSwitcher();

    if (window.__rerender) {
      setTimeout(function() { window.__rerender(); }, 50);
    }
  }

  function updateSwitcher() {
    var btns = document.querySelectorAll('.theme-swatch');
    btns.forEach(function(btn) {
      var isActive = btn.dataset.theme === current;
      btn.style.outline = isActive ? '3px solid var(--c-primary, #1E3A5F)' : 'none';
      btn.style.outlineOffset = isActive ? '3px' : '0';
      btn.style.transform = isActive ? 'scale(1.15)' : 'scale(1)';
    });

    var label = document.getElementById('theme-label');
    if (label) {
      var theme = THEMES.find(function(t) { return t.id === current; });
      label.textContent = theme ? theme.name : '';
    }
  }

  function toggleCollapse() {
    collapsed = !collapsed;
    var tray = document.getElementById('theme-tray');
    var toggle = document.getElementById('theme-toggle');
    if (tray) tray.style.display = collapsed ? 'none' : 'flex';
    if (toggle) toggle.textContent = collapsed ? '🎨' : '✕';
  }

  function buildSwitcher() {
    var bar = document.createElement('div');
    bar.id = 'theme-switcher';
    bar.style.cssText = 'position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;align-items:center;gap:8px;padding:8px 14px;background:rgba(255,255,255,.92);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border-radius:999px;box-shadow:0 8px 32px rgba(30,58,95,.2),0 1px 3px rgba(30,58,95,.1);border:1px solid rgba(127,180,217,.2);font-family:var(--font-body,Quicksand,sans-serif)';

    var toggle = document.createElement('button');
    toggle.id = 'theme-toggle';
    toggle.textContent = collapsed ? '🎨' : '✕';
    toggle.style.cssText = 'width:32px;height:32px;border-radius:50%;border:none;background:none;font-size:16px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .2s;flex-shrink:0';
    toggle.onclick = toggleCollapse;
    bar.appendChild(toggle);

    var tray = document.createElement('div');
    tray.id = 'theme-tray';
    tray.style.cssText = 'display:' + (collapsed ? 'none' : 'flex') + ';align-items:center;gap:6px';

    THEMES.forEach(function(t) {
      var btn = document.createElement('button');
      btn.className = 'theme-swatch';
      btn.dataset.theme = t.id;
      btn.title = t.name;
      btn.style.cssText = 'width:32px;height:32px;border-radius:50%;border:2px solid rgba(255,255,255,.8);background:' + t.swatch + ';cursor:pointer;transition:transform .2s,outline .2s;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,.12)';
      btn.onclick = function() { applyTheme(t.id); };
      btn.onmouseenter = function() {
        var label = document.getElementById('theme-label');
        if (label) label.textContent = t.name;
      };
      btn.onmouseleave = function() {
        var label = document.getElementById('theme-label');
        var cur = THEMES.find(function(th) { return th.id === current; });
        if (label) label.textContent = cur ? cur.name : '';
      };
      tray.appendChild(btn);
    });

    var label = document.createElement('span');
    label.id = 'theme-label';
    label.style.cssText = 'font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--c-primary,#1E3A5F);white-space:nowrap;min-width:90px;text-align:center;margin-left:4px';
    tray.appendChild(label);

    bar.appendChild(tray);
    document.body.appendChild(bar);

    applyTheme(current);
  }

  // Disabled: no picker UI — just apply the default theme.
  var init = enabled ? buildSwitcher : function() { applyTheme(current); };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
