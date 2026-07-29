// renderers.js — HTML template functions for data-driven content
window.AC = window.AC || {};

(function() {
  var DATA = window.AC.DATA;

  var CV = function(v) { return 'var(--' + v + ')'; };
  var CP = CV('c-primary');
  var CS = CV('c-secondary');
  var CM2 = CV('c-muted-2');
  var CA2 = CV('c-accent-2');
  var FD = CV('font-display');
  var FB = CV('font-body');
  var FM = CV('font-mono');
  var BC = CV('bg-card');
  var BI = CV('bg-input');
  var SC = CV('shadow-card');
  var RC = CV('radius-card');

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function lbAttr(item) {
    return JSON.stringify(item).replace(/"/g, '&quot;');
  }

  // Nav — desktop buttons / mobile links, both driven by config.PAGES.
  function renderNav(mode) {
    var pages = DATA.config.PAGES;
    var cls = mode === 'mobile' ? 'mobile-link' : 'navlink';
    var html = pages.map(function(p) {
      return '<button class="' + cls + '" data-nav="' + p.key + '" onclick="window.__go(\'' + p.key + '\')">' + esc(p.label) + '</button>';
    }).join('');
    if (mode === 'mobile') {
      html += '<a class="mobile-link" href="' + DATA.site.instagram.url + '" target="_blank" rel="noopener" style="font-weight:600;background:rgba(143,95,32,.08);justify-content:center;margin-top:6px">Follow on Instagram · ' + esc(DATA.site.instagram.handle) + '</a>';
    }
    return html;
  }

  function renderNavCards() {
    return DATA.navCards.map(function(nc) {
      return '<button onclick="window.__go(\'' + nc.key + '\')" style="position:relative;text-align:left;background:' + BC + ';border:none;border-radius:' + RC + ';padding:24px 22px;cursor:pointer;overflow:hidden;box-shadow:' + SC + '" class="card-hover-sm">'
        + '<span style="position:absolute;top:0;left:0;right:0;height:5px;background:' + nc.bg + '"></span>'
        + '<div style="font-family:' + FD + ';font-weight:600;font-size:20px;color:' + CP + ';margin:6px 0">' + esc(nc.title) + '</div>'
        + '<div style="font-size:15px;color:' + CS + ';line-height:1.5">' + esc(nc.desc) + '</div>'
        + '<div style="margin-top:14px;font:600 11px/1 ' + FM + ';letter-spacing:.12em;text-transform:uppercase;color:' + CA2 + '">' + esc(nc.label) + ' →</div>'
        + '</button>';
    }).join('');
  }

  // Past events — one card per category, VP copy verbatim.
  function renderPast() {
    return DATA.past.map(function(cat) {
      var body = '';
      if (cat.intro) {
        body += '<p style="font-size:16px;color:' + CS + ';margin:0 0 8px">' + esc(cat.intro) + '</p>';
      }
      if (cat.items) {
        body += '<ul class="past-list">' + cat.items.map(function(it) {
          return '<li>' + esc(it) + '</li>';
        }).join('') + '</ul>';
      }
      if (cat.body) {
        body += '<p style="font-size:16px;color:' + CS + ';margin:0">' + esc(cat.body) + '</p>';
      }
      return '<div class="card-hover" style="background:' + BC + ';border-radius:' + RC + ';overflow:hidden;box-shadow:' + SC + '">'
        + '<span style="display:block;height:5px;background:' + cat.bg + '"></span>'
        + '<div style="padding:20px 22px 22px">'
        + '<span style="display:inline-block;padding:4px 11px;border-radius:999px;background:' + BI + ';font:600 10px/1.4 ' + FM + ';letter-spacing:.1em;text-transform:uppercase;color:' + CA2 + ';margin-bottom:10px">' + esc(cat.kind) + '</span>'
        + '<div style="font-family:' + FD + ';font-weight:600;font-size:21px;color:' + CP + ';margin-bottom:8px">' + esc(cat.title) + '</div>'
        + body
        + '</div></div>';
    }).join('');
  }

  // Fall events — "Next up" banner.
  function renderFallNext() {
    var ev = DATA.fallNext;
    if (!ev) return '';
    return '<div style="position:relative;background:' + BC + ';border-radius:var(--radius-card-lg);padding:22px 26px;box-shadow:var(--shadow-elevated);display:flex;align-items:center;gap:20px;flex-wrap:wrap" class="card-hover-sm">'
      + '<div style="text-align:center;border-radius:12px;background:' + ev.bg + ';padding:12px 16px;min-width:76px">'
      + '<div style="font:700 13px/1.3 ' + FM + ';letter-spacing:.1em;text-transform:uppercase;color:' + CP + '">' + ev.mon + '</div>'
      + '<div style="font-family:' + FD + ';font-weight:700;font-size:28px;color:' + CP + ';line-height:1.1">' + ev.day + '</div>'
      + '</div>'
      + '<div style="flex:1;min-width:200px">'
      + '<span style="display:inline-flex;align-items:center;gap:8px;font:600 11px/1.4 ' + FM + ';letter-spacing:.14em;text-transform:uppercase;color:' + CM2 + '">'
      + '<span style="width:8px;height:8px;border-radius:50%;background:var(--c-green);animation:dotpulse 2s infinite"></span>Next up</span>'
      + '<div style="font-family:' + FD + ';font-weight:600;font-size:22px;color:' + CP + ';margin-top:6px">' + esc(ev.title) + '</div>'
      + '</div></div>';
  }

  // Fall events — schedule rows.
  function renderFall() {
    return DATA.fall.map(function(ev) {
      return '<div class="fall-row card-hover-sm" style="background:' + BC + ';border-radius:14px;padding:14px 16px;margin-bottom:12px;box-shadow:' + SC + '">'
        + '<div class="fall-date" style="text-align:center;border-radius:10px;background:' + ev.bg + ';padding:9px 6px">'
        + '<div style="font:700 12px/1.3 ' + FM + ';letter-spacing:.1em;text-transform:uppercase;color:' + CP + '">' + ev.mon + '</div>'
        + '<div style="font-family:' + FD + ';font-weight:700;font-size:24px;color:' + CP + ';line-height:1.1">' + ev.day + '</div>'
        + '</div>'
        + '<div class="fall-row-title" style="font-family:' + FB + ';font-weight:500;font-size:18px;color:' + CP + '">' + esc(ev.title) + '</div>'
        + '<span class="fall-tag" style="padding:5px 12px;border-radius:999px;background:' + BI + ';font:600 10px/1.4 ' + FM + ';letter-spacing:.08em;text-transform:uppercase;color:' + CA2 + ';white-space:nowrap">' + esc(ev.tag) + '</span>'
        + '</div>';
    }).join('');
  }

  // Merch — grouped product cards with add-to-order controls.
  function renderMerch() {
    var M = DATA.merch;
    var html = '';
    var lastGroup = null;
    M.products.forEach(function(p, i) {
      if (p.group !== lastGroup) {
        if (lastGroup !== null) html += '</div>';
        html += '<h2 class="merch-group-title">' + esc(p.group) + '</h2><div class="merch-grid">';
        lastGroup = p.group;
      }
      var lb = lbAttr({ title: p.name, meta: '$' + p.price, img: p.img });
      var imgs = '<img class="merch-img-front' + (p.imgBack ? ' has-back' : '') + '" src="' + p.img + '" alt="' + esc(p.name) + '" loading="lazy">';
      if (p.imgBack) {
        imgs += '<img class="merch-img-back" src="' + p.imgBack + '" alt="' + esc(p.name) + ' — back" loading="lazy">';
      }
      var size = '';
      if (p.sized) {
        size = '<select class="input-field" id="size-' + p.id + '" aria-label="Size" style="padding:7px 10px;font-size:15px;margin-bottom:9px">'
          + M.sizes.map(function(s) { return '<option>' + s + '</option>'; }).join('')
          + '</select>';
      }
      html += '<div class="card-hover" style="background:' + BC + ';border-radius:' + RC + ';overflow:hidden;box-shadow:' + SC + ';display:flex;flex-direction:column">'
        + '<button class="merch-img-wrap" onclick="window.__openLB(' + lb + ')" style="background:none;border:none;cursor:zoom-in;width:100%" aria-label="View ' + esc(p.name) + '">' + imgs + '</button>'
        + '<div style="padding:12px 15px 15px;display:flex;flex-direction:column;flex:1">'
        + '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px;margin-bottom:9px">'
        + '<span style="font-family:' + FB + ';font-weight:600;font-size:17px;color:' + CP + '">' + esc(p.name) + '</span>'
        + '<span style="font:700 14px/1.4 ' + FM + ';color:' + CP + '">$' + p.price + '</span>'
        + '</div>'
        + size
        + '<button class="btn-add" onclick="window.__addToOrder(\'' + p.id + '\')" style="margin-top:auto;padding:9px 14px;border-radius:999px;background:' + BI + ';border:1.5px solid rgba(143,95,32,.35);color:' + CP + ';font-family:' + FB + ';font-weight:600;font-size:15px;cursor:pointer;transition:background .2s">Add to order ✦</button>'
        + '</div></div>';
    });
    if (lastGroup !== null) html += '</div>';
    return html;
  }

  window.AC.renderers = {
    renderNav: renderNav,
    renderNavCards: renderNavCards,
    renderPast: renderPast,
    renderFallNext: renderFallNext,
    renderFall: renderFall,
    renderMerch: renderMerch
  };
})();
