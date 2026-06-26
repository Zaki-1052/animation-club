// app.js
(function() {
  const G = {
    pink: 'var(--g-pink)',
    blue: 'var(--g-blue)',
    mint: 'var(--g-mint)',
    lav: 'var(--g-lav)',
    coral: 'var(--g-coral)',
    gold: 'var(--g-gold)',
    holo: 'var(--g-holo)',
    holo2: 'var(--g-holo2)'
  };

  const DATA = {
    films: [
      { title: 'Untitled Loop No. 4', meta: 'Frame-by-frame · placeholder', dur: '0:48', bg: G.holo },
      { title: 'Night Bus', meta: 'Short film · placeholder', dur: '3:12', bg: G.lav },
      { title: 'Tide Pool', meta: 'Experimental · placeholder', dur: '1:30', bg: G.mint }
    ],
    gallery: [
      { title: 'Character sheet', meta: 'Placeholder', ar: '3/4', bg: G.pink },
      { title: 'Background paint', meta: 'Placeholder', ar: '4/3', bg: G.blue },
      { title: 'Walk cycle', meta: 'Placeholder', ar: '1/1', bg: G.holo },
      { title: 'Inktober #7', meta: 'Placeholder', ar: '3/5', bg: G.lav },
      { title: 'Color study', meta: 'Placeholder', ar: '4/5', bg: G.gold },
      { title: 'Storyboard panel', meta: 'Placeholder', ar: '16/9', bg: G.mint },
      { title: 'Expression sheet', meta: 'Placeholder', ar: '1/1', bg: G.coral },
      { title: 'Prop concepts', meta: 'Placeholder', ar: '3/4', bg: G.holo2 },
      { title: 'Quick gesture', meta: 'Placeholder', ar: '4/5', bg: G.blue },
      { title: 'Title card', meta: 'Placeholder', ar: '16/10', bg: G.pink }
    ],
    navCards: [
      { key: 'history', glyph: '📖', title: 'History & founding', desc: 'How the club started and who got it going.', label: 'Read the story', bg: G.gold },
      { key: 'officers', glyph: '🎨', title: 'Officers', desc: 'Meet the team running things this year.', label: 'Meet the team', bg: G.pink },
      { key: 'past', glyph: '🎬', title: 'Past events', desc: 'MAPS, jams, speakers, and figure drawing.', label: 'Browse archive', bg: G.blue },
      { key: 'fall', glyph: '🍂', title: 'Fall events', desc: "What's happening this quarter.", label: 'See schedule', bg: G.mint },
      { key: 'merch', glyph: '🧸', title: 'Merch', desc: 'Stickers, tees, and pins by members.', label: 'Shop merch', bg: G.lav },
      { key: 'contact', glyph: '💌', title: 'Contact', desc: 'Questions, ideas, or feedback? Reach out.', label: 'Say hi', bg: G.coral }
    ],
    timeline: [
      { year: 'YEAR ZERO', title: 'A few sketchbooks in a study room' },
      { year: 'EARLY DAYS', title: 'First screening night' },
      { year: 'GROWTH', title: 'Officially a club' },
      { year: 'NOW', title: 'Where we are today' }
    ],
    founders: [
      { name: 'Founder One', role: 'Founding President · placeholder', initials: 'F1', bg: G.pink },
      { name: 'Founder Two', role: 'Founding VP · placeholder', initials: 'F2', bg: G.blue },
      { name: 'Founder Three', role: 'Founding Art Lead · placeholder', initials: 'F3', bg: G.lav }
    ],
    officers: [
      { name: 'Kieran', role: 'Member', initials: 'K', bg: G.holo, link: 'https://www.instagram.com/animation_at_ucsd/' },
      { name: 'Jane Doe', role: 'President · placeholder', initials: 'JD', bg: G.pink, link: '#' },
      { name: 'John Doe', role: 'Vice President · placeholder', initials: 'JD', bg: G.blue, link: '#' },
      { name: 'Sam Roe', role: 'Treasurer · placeholder', initials: 'SR', bg: G.mint, link: '#' },
      { name: 'Alex Poe', role: 'Events Lead · placeholder', initials: 'AP', bg: G.lav, link: '#' },
      { name: 'Riley Moe', role: 'Social Media · placeholder', initials: 'RM', bg: G.gold, link: '#' },
      { name: 'Casey Loe', role: 'Art Director · placeholder', initials: 'CL', bg: G.coral, link: '#' },
      { name: 'Jordan Coe', role: 'Animation Lead · placeholder', initials: 'JC', bg: G.holo2, link: '#' }
    ],
    past: [
      { title: 'Animation Jam', kind: 'Jam', date: 'PLACEHOLDER DATE', bg: G.holo },
      { title: 'Guest Speaker Night', kind: 'Speaker', date: 'PLACEHOLDER DATE', bg: G.blue },
      { title: 'MAPS Mixer', kind: 'MAPS', date: 'PLACEHOLDER DATE', bg: G.pink },
      { title: 'Figure Drawing', kind: 'Workshop', date: 'PLACEHOLDER DATE', bg: G.mint },
      { title: 'Film Screening', kind: 'Screening', date: 'PLACEHOLDER DATE', bg: G.lav },
      { title: 'Sticker Swap', kind: 'Social', date: 'PLACEHOLDER DATE', bg: G.gold }
    ],
    pastFeatured: { title: 'Spring Animation Jam — Recap', date: 'PLACEHOLDER DATE', bg: 'var(--g-holo)' },
    fall: [
      { mon: 'OCT', day: '03', title: 'Welcome / interest meeting', time: '6:00 PM', place: 'Placeholder room', body: 'Intro, snacks, and what we do. Lorem ipsum placeholder.', tag: 'Open', bg: 'linear-gradient(135deg,#FFD0DC,#C2E6F6)' },
      { mon: 'OCT', day: '17', title: 'Frame-by-frame workshop', time: '6:00 PM', place: 'Placeholder room', body: 'Hands-on intro to traditional animation. Placeholder.', tag: 'Workshop', bg: 'linear-gradient(135deg,#9FE0C0,#CDF1DC)' },
      { mon: 'OCT', day: '31', title: 'Spooky doodle night', time: '7:00 PM', place: 'Placeholder room', body: 'Casual themed draw-along. Placeholder.', tag: 'Social', bg: 'linear-gradient(135deg,#C5B6F0,#E2DDFB)' },
      { mon: 'NOV', day: '14', title: 'Fall animation jam', time: 'All day', place: 'Placeholder room', body: 'Our big quarterly jam. Placeholder.', tag: 'Jam', bg: 'linear-gradient(135deg,#FFD58A,#FFF1CF)' },
      { mon: 'DEC', day: '05', title: 'End-of-quarter screening', time: '6:30 PM', place: 'Placeholder room', body: 'Watch what everyone made. Placeholder.', tag: 'Screening', bg: 'linear-gradient(135deg,#FF9AAB,#FFD7C8)' }
    ],
    fallNext: { title: 'Welcome / interest meeting', when: 'Oct 3 · 6:00 PM', place: 'Placeholder room' },
    merch: [
      { name: 'Logo sticker', price: '$3', glyph: '✷', desc: 'Holographic die-cut. Placeholder.', bg: G.holo },
      { name: 'Club tee', price: '$18', glyph: '👕', desc: 'Soft cotton, member design. Placeholder.', bg: G.blue },
      { name: 'Enamel pin', price: '$8', glyph: '📌', desc: 'Cursor + pen mark. Placeholder.', bg: G.lav },
      { name: 'Sticker pack', price: '$10', glyph: '🗂', desc: 'Five assorted designs. Placeholder.', bg: G.pink }
    ]
  };

  var CV = function(v) { return 'var(--' + v + ')'; };
  var CP = CV('c-primary');
  var CS = CV('c-secondary');
  var CM = CV('c-muted');
  var CM2 = CV('c-muted-2');
  var CA = CV('c-accent');
  var CA2 = CV('c-accent-2');
  var FB = CV('font-body');
  var FD = CV('font-display');
  var FM = CV('font-mono');
  var BC = CV('bg-card');
  var BI = CV('bg-input');
  var SC = CV('shadow-card');
  var RC = CV('radius-card');

  var PLAY_ICON = '<span style="width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(30,58,95,.2)"><span style="margin-left:4px;border-left:18px solid ' + CP + ';border-top:11px solid transparent;border-bottom:11px solid transparent"></span></span>';

  let currentPage = 'home';
  let navOpen = false;
  let formSent = false;
  let io = null;

  function go(page) {
    currentPage = page;
    navOpen = false;
    render();
    window.scrollTo({ top: 0, behavior: 'auto' });
    setupReveals();
  }

  function toggleNav() {
    navOpen = !navOpen;
    document.getElementById('mobile-menu').style.display = navOpen ? 'flex' : 'none';
    var btn = document.getElementById('hamburger');
    btn.innerHTML = navOpen
      ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>'
      : '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>';
  }

  function openLightbox(item) {
    var lb = document.getElementById('lightbox');
    document.getElementById('lb-bg').style.background = item.bg;
    document.getElementById('lb-title').textContent = item.title;
    document.getElementById('lb-meta').textContent = item.meta || '';
    lb.classList.add('open');
  }

  function closeLightbox() {
    document.getElementById('lightbox').classList.remove('open');
  }

  function setupReveals() {
    if (io) io.disconnect();
    io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    requestAnimationFrame(function() {
      document.querySelectorAll('.reveal:not(.in)').forEach(function(el) {
        io.observe(el);
      });
    });
  }

  function render() {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(p) {
      p.classList.toggle('active', p.dataset.page === currentPage);
    });

    document.querySelectorAll('.navlink').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.nav === currentPage);
    });
    document.querySelectorAll('.mobile-link[data-nav]').forEach(function(btn) {
      btn.classList.toggle('active', btn.dataset.nav === currentPage);
    });
    document.getElementById('mobile-menu').style.display = 'none';
    navOpen = false;
  }

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

  window.__go = go;
  window.__openLB = openLightbox;
  window.__closeLB = closeLightbox;
  window.__toggleNav = toggleNav;

  window.__submitForm = function(e) {
    e.preventDefault();
    formSent = true;
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('contact-sent').style.display = 'block';
  };

  window.__resetForm = function() {
    formSent = false;
    document.getElementById('contact-form').style.display = 'block';
    document.getElementById('contact-sent').style.display = 'none';
    document.querySelector('#contact-form form').reset();
  };

  window.__rerender = function() {
    document.getElementById('films-grid').innerHTML = renderFilms();
    document.getElementById('gallery-grid').innerHTML = renderGallery();
    document.getElementById('nav-cards-grid').innerHTML = renderNavCards();
    document.getElementById('timeline-list').innerHTML = renderTimeline();
    document.getElementById('founders-grid').innerHTML = renderFounders();
    document.getElementById('officers-grid').innerHTML = renderOfficers();
    document.getElementById('past-grid').innerHTML = renderPast();
    document.getElementById('fall-list').innerHTML = renderFall();
    document.getElementById('merch-grid').innerHTML = renderMerch();

    var fp = DATA.pastFeatured;
    document.getElementById('past-featured-bg').style.background = fp.bg;
    document.getElementById('past-featured-title').textContent = fp.title;
    document.getElementById('past-featured-date').textContent = fp.date;

    var fn = DATA.fallNext;
    document.getElementById('fall-next-title').textContent = fn.title;
    document.getElementById('fall-next-info').textContent = fn.when + ' · ' + fn.place;
  };

  document.addEventListener('DOMContentLoaded', function() {
    window.__rerender();
    render();
    setupReveals();
  });
})();
