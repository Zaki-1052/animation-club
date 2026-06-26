// app.js
(function() {
  const G = {
    pink: 'linear-gradient(135deg,#FFB5C5,#FFD0DC)',
    blue: 'linear-gradient(135deg,#7FB4D9,#C2E6F6)',
    mint: 'linear-gradient(135deg,#9FE0C0,#CDF1DC)',
    lav: 'linear-gradient(135deg,#C5B6F0,#E2DDFB)',
    coral: 'linear-gradient(135deg,#FF9AAB,#FFD7C8)',
    gold: 'linear-gradient(135deg,#FFD58A,#FFF1CF)',
    holo: 'linear-gradient(135deg,#FFD0DC,#C2E6F6,#E2DDFB)',
    holo2: 'linear-gradient(135deg,#CDF1DC,#FFD0DC,#C5B6F0)'
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
    pastFeatured: { title: 'Spring Animation Jam — Recap', date: 'PLACEHOLDER DATE', bg: 'linear-gradient(135deg,#FFD0DC,#C2E6F6,#E2DDFB)' },
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

  const INSTAGRAM_SVG = '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2c-2.7 0-3.05.01-4.12.06-1.06.05-1.79.22-2.43.47-.66.25-1.22.6-1.77 1.16-.56.55-.9 1.1-1.16 1.77-.25.64-.42 1.37-.47 2.43C2.01 8.95 2 9.3 2 12s.01 3.05.06 4.12c.05 1.06.22 1.79.47 2.43.25.66.6 1.22 1.16 1.77.55.56 1.1.9 1.77 1.16.64.25 1.37.42 2.43.47C8.95 21.99 9.3 22 12 22s3.05-.01 4.12-.06c1.06-.05 1.79-.22 2.43-.47a4.9 4.9 0 0 0 1.77-1.16c.56-.55.9-1.1 1.16-1.77.25-.64.42-1.37.47-2.43.05-1.07.06-1.42.06-4.12s-.01-3.05-.06-4.12c-.05-1.06-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.16-1.77 4.9 4.9 0 0 0-1.77-1.16c-.64-.25-1.37-.42-2.43-.47C15.05 2.01 14.7 2 12 2Zm0 1.8c2.65 0 2.96.01 4.01.06.97.04 1.5.21 1.85.34.46.18.8.4 1.15.74.34.35.56.69.74 1.15.13.35.3.88.34 1.85.05 1.05.06 1.36.06 4.01s-.01 2.96-.06 4.01c-.04.97-.21 1.5-.34 1.85-.18.46-.4.8-.74 1.15-.35.34-.69.56-1.15.74-.35.13-.88.3-1.85.34-1.05.05-1.36.06-4.01.06s-2.96-.01-4.01-.06c-.97-.04-1.5-.21-1.85-.34a3.1 3.1 0 0 1-1.15-.74 3.1 3.1 0 0 1-.74-1.15c-.13-.35-.3-.88-.34-1.85-.05-1.05-.06-1.36-.06-4.01s.01-2.96.06-4.01c.04-.97.21-1.5.34-1.85.18-.46.4-.8.74-1.15.35-.34.69-.56 1.15-.74.35-.13.88-.3 1.85-.34C9.04 3.81 9.35 3.8 12 3.8Zm0 3.06A5.14 5.14 0 1 0 12 17.14 5.14 5.14 0 0 0 12 6.86Zm0 8.47A3.33 3.33 0 1 1 12 8.67a3.33 3.33 0 0 1 0 6.66Zm5.34-8.67a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"></path></svg>';
  const PLAY_ICON = '<span style="width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,.9);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(30,58,95,.2)"><span style="margin-left:4px;border-left:18px solid #1E3A5F;border-top:11px solid transparent;border-bottom:11px solid transparent"></span></span>';
  const PLAY_ICON_LG = '<span style="width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,.92);display:flex;align-items:center;justify-content:center;box-shadow:0 6px 18px rgba(30,58,95,.25)"><span style="margin-left:5px;border-left:22px solid #1E3A5F;border-top:13px solid transparent;border-bottom:13px solid transparent"></span></span>';

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
    const btn = document.getElementById('hamburger');
    btn.innerHTML = navOpen
      ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>'
      : '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>';
  }

  function openLightbox(item) {
    const lb = document.getElementById('lightbox');
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
      return '<button onclick="window.__openLB(' + JSON.stringify(f).replace(/"/g, '&quot;') + ')" style="display:block;text-align:left;background:#fff;border:none;border-radius:18px;overflow:hidden;cursor:pointer;box-shadow:0 1px 3px rgba(30,58,95,.08);padding:0" class="card-hover">'
        + '<div style="position:relative;aspect-ratio:16/9;background:' + f.bg + ';display:flex;align-items:center;justify-content:center">'
        + PLAY_ICON
        + '<span style="position:absolute;top:12px;right:12px;padding:4px 9px;border-radius:999px;background:rgba(255,255,255,.85);font:600 10px/1 ui-monospace,monospace;letter-spacing:.08em;color:#1E3A5F">' + f.dur + '</span>'
        + '</div>'
        + '<div style="padding:14px 16px 16px">'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:17px;color:#1E3A5F">' + f.title + '</div>'
        + '<div style="font-size:12px;color:#8B95A1;margin-top:3px">' + f.meta + '</div>'
        + '</div></button>';
    }).join('');
  }

  function renderGallery() {
    return DATA.gallery.map(function(art) {
      return '<button onclick="window.__openLB(' + JSON.stringify(art).replace(/"/g, '&quot;') + ')" style="break-inside:avoid;margin:0 0 18px;width:100%;display:block;background:#fff;border:none;border-radius:16px;overflow:hidden;cursor:pointer;box-shadow:0 1px 3px rgba(30,58,95,.08);padding:0" class="card-hover">'
        + '<div style="aspect-ratio:' + art.ar + ';background:' + art.bg + ';position:relative">'
        + '<span style="position:absolute;bottom:10px;left:12px;font:600 9px/1 ui-monospace,monospace;letter-spacing:.1em;color:rgba(30,58,95,.55);text-transform:uppercase">placeholder</span>'
        + '</div>'
        + '<div style="padding:11px 13px">'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:14px;color:#1E3A5F">' + art.title + '</div>'
        + '<div style="font-size:11px;color:#8B95A1;margin-top:2px">' + art.meta + '</div>'
        + '</div></button>';
    }).join('');
  }

  function renderNavCards() {
    return DATA.navCards.map(function(nc) {
      return '<button onclick="window.__go(\'' + nc.key + '\')" style="position:relative;text-align:left;background:#fff;border:none;border-radius:18px;padding:22px;cursor:pointer;overflow:hidden;box-shadow:0 1px 3px rgba(30,58,95,.08)" class="card-hover-sm">'
        + '<span style="position:absolute;top:0;left:0;right:0;height:5px;background:' + nc.bg + '"></span>'
        + '<span style="display:inline-flex;width:46px;height:46px;border-radius:14px;background:' + nc.bg + ';align-items:center;justify-content:center;font-size:22px;margin-bottom:14px">' + nc.glyph + '</span>'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:19px;color:#1E3A5F;margin-bottom:6px">' + nc.title + '</div>'
        + '<div style="font-size:13px;color:#5A6C7D;line-height:1.55">' + nc.desc + '</div>'
        + '<div style="margin-top:14px;font:600 11px/1 ui-monospace,monospace;letter-spacing:.12em;text-transform:uppercase;color:#7FB4D9">' + nc.label + ' →</div>'
        + '</button>';
    }).join('');
  }

  function renderTimeline() {
    return DATA.timeline.map(function(t) {
      return '<div style="position:relative;margin-bottom:32px">'
        + '<span style="position:absolute;left:-44px;top:2px;width:18px;height:18px;border-radius:50%;background:var(--holo);box-shadow:0 0 0 4px #fff,0 2px 8px rgba(30,58,95,.18)"></span>'
        + '<div style="font:600 12px/1 ui-monospace,monospace;letter-spacing:.14em;color:#7FB4D9;margin-bottom:6px">' + t.year + '</div>'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:20px;color:#1E3A5F;margin-bottom:6px">' + t.title + '</div>'
        + '<p style="font-size:14px;color:#5A6C7D;margin:0">Lorem ipsum placeholder.</p>'
        + '</div>';
    }).join('');
  }

  function renderFounders() {
    return DATA.founders.map(function(f) {
      return '<div style="background:#fff;border-radius:18px;padding:24px;box-shadow:0 1px 3px rgba(30,58,95,.08);position:relative;overflow:hidden" class="card-hover-sm">'
        + '<div style="display:flex;align-items:center;gap:14px;margin-bottom:14px">'
        + '<span style="width:54px;height:54px;border-radius:50%;background:' + f.bg + ';display:flex;align-items:center;justify-content:center;font-family:\'Fredoka\',sans-serif;font-weight:700;font-size:18px;color:#1E3A5F;box-shadow:inset 0 0 0 2px rgba(255,255,255,.6)">' + f.initials + '</span>'
        + '<div>'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:18px;color:#1E3A5F">' + f.name + '</div>'
        + '<div style="font:600 11px/1 ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;color:#8B95A1;margin-top:3px">' + f.role + '</div>'
        + '</div></div>'
        + '<p style="font-size:14px;color:#5A6C7D;margin:0">Lorem ipsum dolor sit amet. Placeholder founder bio.</p>'
        + '</div>';
    }).join('');
  }

  function renderOfficers() {
    var L = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.';
    return DATA.officers.map(function(o) {
      return '<div style="background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 1px 3px rgba(30,58,95,.08)" class="card-hover">'
        + '<div style="height:96px;background:' + o.bg + ';position:relative">'
        + '<span style="position:absolute;left:24px;bottom:-28px;width:64px;height:64px;border-radius:50%;background:#fff;display:flex;align-items:center;justify-content:center;font-family:\'Fredoka\',sans-serif;font-weight:700;font-size:20px;color:#1E3A5F;box-shadow:0 4px 14px rgba(30,58,95,.18)">' + o.initials + '</span>'
        + '</div>'
        + '<div style="padding:38px 22px 22px">'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:18px;color:#1E3A5F">' + o.name + '</div>'
        + '<div style="font:600 11px/1 ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;color:#7FB4D9;margin:5px 0 12px">' + o.role + '</div>'
        + '<p style="font-size:13px;color:#5A6C7D;margin:0 0 14px">' + L + '</p>'
        + '<a href="' + o.link + '" target="_blank" rel="noopener" style="display:inline-flex;align-items:center;gap:6px;font:600 12px/1 ui-monospace,monospace;letter-spacing:.06em;color:#1E3A5F;padding:7px 13px;border-radius:999px;border:1.5px solid rgba(127,180,217,.4);text-decoration:none;transition:background .2s" onmouseover="this.style.background=\'var(--holo)\';this.style.borderColor=\'transparent\'" onmouseout="this.style.background=\'none\';this.style.borderColor=\'rgba(127,180,217,.4)\'">Portfolio ↗</a>'
        + '</div></div>';
    }).join('');
  }

  function renderPast() {
    return DATA.past.map(function(e) {
      return '<button onclick="window.__openLB(' + JSON.stringify({title:e.title,meta:e.kind,bg:e.bg}).replace(/"/g, '&quot;') + ')" style="text-align:left;background:#fff;border:none;border-radius:18px;overflow:hidden;cursor:pointer;box-shadow:0 1px 3px rgba(30,58,95,.08);padding:0" class="card-hover">'
        + '<div style="aspect-ratio:4/3;background:' + e.bg + ';position:relative">'
        + '<span style="position:absolute;top:12px;left:12px;padding:5px 11px;border-radius:999px;background:rgba(255,255,255,.9);font:600 10px/1 ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;color:#1E3A5F">' + e.kind + '</span>'
        + '</div>'
        + '<div style="padding:16px">'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:17px;color:#1E3A5F">' + e.title + '</div>'
        + '<div style="font:600 11px/1 ui-monospace,monospace;color:#8B95A1;margin:5px 0 9px">' + e.date + '</div>'
        + '<p style="font-size:13px;color:#5A6C7D;margin:0">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>'
        + '</div></button>';
    }).join('');
  }

  function renderFall() {
    return DATA.fall.map(function(ev) {
      return '<div style="display:grid;grid-template-columns:96px 1fr auto;gap:18px;align-items:center;background:#fff;border-radius:16px;padding:18px;margin-bottom:14px;box-shadow:0 1px 3px rgba(30,58,95,.08)" class="card-hover-sm">'
        + '<div style="text-align:center;border-radius:12px;background:' + ev.bg + ';padding:12px 8px">'
        + '<div style="font:700 13px/1 ui-monospace,monospace;letter-spacing:.1em;text-transform:uppercase;color:#1E3A5F">' + ev.mon + '</div>'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:700;font-size:26px;color:#1E3A5F;line-height:1">' + ev.day + '</div>'
        + '</div>'
        + '<div>'
        + '<div style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:18px;color:#1E3A5F">' + ev.title + '</div>'
        + '<div style="font:600 11px/1 ui-monospace,monospace;color:#8B95A1;margin:4px 0 6px">' + ev.time + ' · ' + ev.place + '</div>'
        + '<p style="font-size:13px;color:#5A6C7D;margin:0">' + ev.body + '</p>'
        + '</div>'
        + '<span style="padding:5px 12px;border-radius:999px;background:#F5F7FA;font:600 10px/1 ui-monospace,monospace;letter-spacing:.08em;text-transform:uppercase;color:#7FB4D9;white-space:nowrap">' + ev.tag + '</span>'
        + '</div>';
    }).join('');
  }

  function renderMerch() {
    return DATA.merch.map(function(m) {
      return '<button onclick="window.__openLB(' + JSON.stringify({title:m.name,meta:m.desc,bg:m.bg}).replace(/"/g, '&quot;') + ')" style="text-align:left;background:#fff;border:none;border-radius:18px;overflow:hidden;cursor:pointer;box-shadow:0 1px 3px rgba(30,58,95,.08);padding:0" class="card-hover">'
        + '<div style="aspect-ratio:1;background:' + m.bg + ';display:flex;align-items:center;justify-content:center;font-size:46px">' + m.glyph + '</div>'
        + '<div style="padding:16px">'
        + '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:8px">'
        + '<span style="font-family:\'Fredoka\',sans-serif;font-weight:600;font-size:16px;color:#1E3A5F">' + m.name + '</span>'
        + '<span style="font:700 14px/1 ui-monospace,monospace;color:#1E3A5F">' + m.price + '</span>'
        + '</div>'
        + '<p style="font-size:12px;color:#8B95A1;margin:7px 0 0">' + m.desc + '</p>'
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

  document.addEventListener('DOMContentLoaded', function() {
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

    render();
    setupReveals();
  });
})();
