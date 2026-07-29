// app.js — SPA routing, lightbox, scroll reveal, static copy injection
(function() {
  var DATA = window.AC.DATA;
  var R = window.AC.renderers;

  var currentPage = 'home';
  var navOpen = false;
  var io = null;

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

  // Lightbox: item = { title, meta, img } (image) or { title, meta, bg } (gradient).
  function openLightbox(item) {
    var lb = document.getElementById('lightbox');
    var img = document.getElementById('lb-img');
    var media = document.getElementById('lb-bg');
    if (item.img) {
      img.src = item.img;
      img.alt = item.title || '';
      img.style.display = 'block';
      media.style.background = 'var(--bg-input)';
    } else {
      img.style.display = 'none';
      media.style.background = item.bg || 'var(--g-lav)';
    }
    document.getElementById('lb-title').textContent = item.title || '';
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
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
    requestAnimationFrame(function() {
      document.querySelectorAll('.reveal:not(.in)').forEach(function(el) {
        io.observe(el);
      });
    });
  }

  function render() {
    document.querySelectorAll('.page').forEach(function(p) {
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

  function setHTML(id, html) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = html;
  }

  function setText(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text || '';
  }

  window.__go = go;
  window.__openLB = openLightbox;
  window.__closeLB = closeLightbox;
  window.__toggleNav = toggleNav;

  window.__rerender = function() {
    // Nav (config-driven)
    setHTML('desktop-nav', R.renderNav('desktop'));
    setHTML('mobile-menu', R.renderNav('mobile'));

    // Data-driven sections
    setHTML('nav-cards-grid', R.renderNavCards());
    setHTML('past-grid', R.renderPast());
    setHTML('fall-next', R.renderFallNext());
    setHTML('fall-list', R.renderFall());
    setHTML('merch-grid', R.renderMerch());

    // Static copy from content/
    var site = DATA.site;
    setText('home-welcome', site.welcome);
    setText('past-eyebrow', site.pages.past.eyebrow);
    setText('past-title', site.pages.past.title);
    setText('fall-eyebrow', site.pages.fall.eyebrow);
    setText('fall-title', site.pages.fall.title);
    setText('merch-eyebrow', site.pages.merch.eyebrow);
    setText('merch-title', site.pages.merch.title);
    setText('merch-note', DATA.merch.priceNote);
    setText('footer-line', site.footer.line);
    setText('footer-tag', site.footer.tag);
    setText('order-form-title', DATA.merch.form.title);
    setText('order-form-blurb', DATA.merch.form.blurb);
    setText('order-sent-title', DATA.merch.form.sentTitle);
    setText('order-sent-body', DATA.merch.form.sentBody);

    // Order list is owned by order.js
    if (window.__renderOrderItems) window.__renderOrderItems();

    render();
  };

  document.addEventListener('DOMContentLoaded', function() {
    window.__rerender();
    render();
    setupReveals();
  });
})();
