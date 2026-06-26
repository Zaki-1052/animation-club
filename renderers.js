// renderers.js — HTML template functions for data-driven content
window.AC = window.AC || {};

(function() {
  var DATA = window.AC.DATA;

  var CV = function(v) { return 'var(--' + v + ')'; };
  var CP = CV('c-primary');
  var CS = CV('c-secondary');
  var CM2 = CV('c-muted-2');
  var CA2 = CV('c-accent-2');
  var FB = CV('font-body');
  var FM = CV('font-mono');
  var BC = CV('bg-card');
  var BI = CV('bg-input');
  var SC = CV('shadow-card');
  var RC = CV('radius-card');

  var PLAY_ICON = '<span style="width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(30,58,95,.2)"><span style="margin-left:4px;border-left:18px solid ' + CP + ';border-top:11px solid transparent;border-bottom:11px solid transparent"></span></span>';

  function renderFilms() {
    return DATA.films.map(function(f) {
      return '<button onclick="window.__openLB(' + JSON.stringify(f).replace(/"/g, '&quot;') + ')" style="display:block;text-align:left;background:' + BC + ';border:none;border-radius:' + RC + ';overflow:hidden;cursor:pointer;box-shadow:' + SC + ';padding:0" class="card-hover">'
        + '<div style="position:relative;aspect-ratio:16/9;background:' + f.bg + ';display:flex;align-items:center;justify-content:center">'
        + PLAY_ICON
        + '<span style="position:absolute;top:12px;right:12px;padding:4px 9px;border-radius:999px;background:rgba(255,255,255,.85);font:600 10px/1 ' + FM + ';letter-spacing:.08em;color:' + CP + '">' + f.dur + '</span>'
        + '</div>'
        + '<div style="padding:14px 16px 16px">'
        + '<div style="font-family:' + FB + ';font-weight:600;font-size:17px;color:' + CP + '">' + f.title + '</div>'
        + '<div style="font-size:12px;color:' + CM2 + ';margin-top:3px">' + f.meta + '</div>'
        + '</div></button>';
    }).join('');
  }

  function renderGallery() {
    return DATA.gallery.map(function(art) {
      return '<button onclick="window.__openLB(' + JSON.stringify(art).replace(/"/g, '&quot;') + ')" style="break-inside:avoid;margin:0 0 18px;width:100%;display:block;background:' + BC + ';border:none;border-radius:16px;overflow:hidden;cursor:pointer;box-shadow:' + SC + ';padding:0" class="card-hover">'
        + '<div style="aspect-ratio:' + art.ar + ';background:' + art.bg + ';position:relative">'
        + '<span style="position:absolute;bottom:10px;left:12px;font:600 9px/1 ' + FM + ';letter-spacing:.1em;color:rgba(30,58,95,.55);text-transform:uppercase">placeholder</span>'
        + '</div>'
        + '<div style="padding:11px 13px">'
        + '<div style="font-family:' + FB + ';font-weight:600;font-size:14px;color:' + CP + '">' + art.title + '</div>'
        + '<div style="font-size:11px;color:' + CM2 + ';margin-top:2px">' + art.meta + '</div>'
        + '</div></button>';
    }).join('');
  }

  function renderNavCards() {
    return DATA.navCards.map(function(nc) {
      return '<button onclick="window.__go(\'' + nc.key + '\')" style="position:relative;text-align:left;background:' + BC + ';border:none;border-radius:' + RC + ';padding:22px;cursor:pointer;overflow:hidden;box-shadow:' + SC + '" class="card-hover-sm">'
        + '<span style="position:absolute;top:0;left:0;right:0;height:5px;background:' + nc.bg + '"></span>'
        + '<span style="display:inline-flex;width:46px;height:46px;border-radius:14px;background:' + nc.bg + ';align-items:center;justify-content:center;font-size:22px;margin-bottom:14px">' + nc.glyph + '</span>'
        + '<div style="font-family:' + FB + ';font-weight:600;font-size:19px;color:' + CP + ';margin-bottom:6px">' + nc.title + '</div>'
        + '<div style="font-size:13px;color:' + CS + ';line-height:1.55">' + nc.desc + '</div>'
        + '<div style="margin-top:14px;font:600 11px/1 ' + FM + ';letter-spacing:.12em;text-transform:uppercase;color:' + CA2 + '">' + nc.label + ' →</div>'
        + '</button>';
    }).join('');
  }

  function renderTimeline() {
    return DATA.timeline.map(function(t) {
      return '<div style="position:relative;margin-bottom:32px">'
        + '<span style="position:absolute;left:-44px;top:2px;width:18px;height:18px;border-radius:50%;background:var(--holo);box-shadow:0 0 0 4px ' + BC + ',0 2px 8px rgba(30,58,95,.18)"></span>'
        + '<div style="font:600 12px/1 ' + FM + ';letter-spacing:.14em;color:' + CA2 + ';margin-bottom:6px">' + t.year + '</div>'
        + '<div style="font-family:' + FB + ';font-weight:600;font-size:20px;color:' + CP + ';margin-bottom:6px">' + t.title + '</div>'
        + '<p style="font-size:14px;color:' + CS + ';margin:0">Lorem ipsum placeholder.</p>'
        + '</div>';
    }).join('');
  }

  function renderFounders() {
    return DATA.founders.map(function(f) {
      return '<div style="background:' + BC + ';border-radius:' + RC + ';padding:24px;box-shadow:' + SC + ';position:relative;overflow:hidden" class="card-hover-sm">'
        + '<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">'
        + '<span style="width:54px;height:54px;border-radius:50%;background:' + f.bg + ';display:flex;align-items:center;justify-content:center;font-family:' + FB + ';font-weight:700;font-size:18px;color:' + CP + ';box-shadow:inset 0 0 0 2px rgba(255,255,255,.6)">' + f.initials + '</span>'
        + '<div>'
        + '<div style="font-family:' + FB + ';font-weight:600;font-size:18px;color:' + CP + '">' + f.name + '</div>'
        + '<div style="font:600 11px/1 ' + FM + ';letter-spacing:.1em;text-transform:uppercase;color:' + CM2 + ';margin-top:3px">' + f.role + '</div>'
        + '</div></div>'
        + '<p style="font-size:14px;color:' + CS + ';margin:0">Lorem ipsum dolor sit amet. Placeholder founder bio.</p>'
        + '</div>';
    }).join('');
  }

  function renderOfficers() {
    var L = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.';
    return DATA.officers.map(function(o) {
      return '<div style="background:' + BC + ';border-radius:' + RC + ';overflow:hidden;box-shadow:' + SC + '" class="card-hover">'
        + '<div style="height:96px;background:' + o.bg + ';position:relative">'
        + '<span style="position:absolute;left:24px;bottom:-28px;width:64px;height:64px;border-radius:50%;background:' + BC + ';display:flex;align-items:center;justify-content:center;font-family:' + FB + ';font-weight:700;font-size:20px;color:' + CP + ';box-shadow:0 4px 14px rgba(30,58,95,.18)">' + o.initials + '</span>'
        + '</div>'
        + '<div style="padding:38px 22px 22px">'
        + '<div style="font-family:' + FB + ';font-weight:600;font-size:18px;color:' + CP + '">' + o.name + '</div>'
        + '<div style="font:600 11px/1 ' + FM + ';letter-spacing:.1em;text-transform:uppercase;color:' + CA2 + ';margin:5px 0 12px">' + o.role + '</div>'
        + '<p style="font-size:13px;color:' + CS + ';margin:0 0 14px">' + L + '</p>'
        + '<a href="' + o.link + '" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;font:600 12px/1 ' + FM + ';letter-spacing:.06em;color:' + CP + ';padding:7px 13px;border-radius:999px;border:1.5px solid rgba(127,180,217,.4);text-decoration:none;transition:background .2s" onmouseover="this.style.background=\'var(--holo)\';this.style.borderColor=\'transparent\'" onmouseout="this.style.background=\'none\';this.style.borderColor=\'rgba(127,180,217,.4)\'">Portfolio ↗</a>'
        + '</div></div>';
    }).join('');
  }

  function renderPast() {
    return DATA.past.map(function(e) {
      return '<button onclick="window.__openLB(' + JSON.stringify({title:e.title,meta:e.kind,bg:e.bg}).replace(/"/g, '&quot;') + ')" style="text-align:left;background:' + BC + ';border:none;border-radius:' + RC + ';overflow:hidden;cursor:pointer;box-shadow:' + SC + ';padding:0" class="card-hover">'
        + '<div style="aspect-ratio:4/3;background:' + e.bg + ';position:relative">'
        + '<span style="position:absolute;top:12px;left:12px;padding:5px 11px;border-radius:999px;background:rgba(255,255,255,.9);font:600 10px/1 ' + FM + ';letter-spacing:.1em;text-transform:uppercase;color:' + CP + '">' + e.kind + '</span>'
        + '</div>'
        + '<div style="padding:16px">'
        + '<div style="font-family:' + FB + ';font-weight:600;font-size:17px;color:' + CP + '">' + e.title + '</div>'
        + '<div style="font:600 11px/1 ' + FM + ';color:' + CM2 + ';margin:5px 0 9px">' + e.date + '</div>'
        + '<p style="font-size:13px;color:' + CS + ';margin:0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>'
        + '</div></button>';
    }).join('');
  }

  function renderFall() {
    return DATA.fall.map(function(ev) {
      return '<div style="display:grid;grid-template-columns:96px 1fr auto;gap:18px;align-items:center;background:' + BC + ';border-radius:16px;padding:18px;margin-bottom:14px;box-shadow:' + SC + '" class="card-hover-sm">'
        + '<div style="text-align:center;border-radius:12px;background:' + ev.bg + ';padding:12px 8px">'
        + '<div style="font:700 13px/1 ' + FM + ';letter-spacing:.1em;text-transform:uppercase;color:' + CP + '">' + ev.mon + '</div>'
        + '<div style="font-family:' + FB + ';font-weight:700;font-size:26px;color:' + CP + ';line-height:1">' + ev.day + '</div>'
        + '</div>'
        + '<div>'
        + '<div style="font-family:' + FB + ';font-weight:600;font-size:18px;color:' + CP + '">' + ev.title + '</div>'
        + '<div style="font:600 11px/1 ' + FM + ';color:' + CM2 + ';margin:4px 0 6px">' + ev.time + ' · ' + ev.place + '</div>'
        + '<p style="font-size:13px;color:' + CS + ';margin:0">' + ev.body + '</p>'
        + '</div>'
        + '<span style="padding:5px 12px;border-radius:999px;background:' + BI + ';font:600 10px/1 ' + FM + ';letter-spacing:.08em;text-transform:uppercase;color:' + CA2 + ';white-space:nowrap">' + ev.tag + '</span>'
        + '</div>';
    }).join('');
  }

  function renderMerch() {
    return DATA.merch.map(function(m) {
      return '<button onclick="window.__openLB(' + JSON.stringify({title:m.name,meta:m.desc,bg:m.bg}).replace(/"/g, '&quot;') + ')" style="text-align:left;background:' + BC + ';border:none;border-radius:' + RC + ';overflow:hidden;cursor:pointer;box-shadow:' + SC + ';padding:0" class="card-hover">'
        + '<div style="aspect-ratio:1;background:' + m.bg + ';display:flex;align-items:center;justify-content:center;font-size:46px">' + m.glyph + '</div>'
        + '<div style="padding:16px">'
        + '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">'
        + '<span style="font-family:' + FB + ';font-weight:600;font-size:16px;color:' + CP + '">' + m.name + '</span>'
        + '<span style="font:700 14px/1 ' + FM + ';color:' + CP + '">' + m.price + '</span>'
        + '</div>'
        + '<p style="font-size:12px;color:' + CM2 + ';margin:7px 0 0">' + m.desc + '</p>'
        + '</div></button>';
    }).join('');
  }

  window.AC.renderers = {
    renderFilms: renderFilms,
    renderGallery: renderGallery,
    renderNavCards: renderNavCards,
    renderTimeline: renderTimeline,
    renderFounders: renderFounders,
    renderOfficers: renderOfficers,
    renderPast: renderPast,
    renderFall: renderFall,
    renderMerch: renderMerch
  };
})();
