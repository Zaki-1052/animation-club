// app.js — SPA routing, lightbox, scroll reveal, static copy injection
(function() {
  var DATA = window.AC.DATA;
  var R = window.AC.renderers;

  var currentPage = 'home';
  var navOpen = false;
  var io = null;

  function validPage(key) {
    return !!document.querySelector('.page[data-page="' + key + '"]');
  }

  function pageFromPath() {
    var slug = location.pathname.replace(/^\/+|\/+$/g, '').split('/')[0];
    return (slug && validPage(slug)) ? slug : 'home';
  }

  function go(page, pushState) {
    if (page === currentPage) return;
    if (navOpen) {
      navOpen = false;
      document.getElementById('mobile-menu').style.display = 'none';
      setHamburgerIcon(false);
    }
    var swap = function() {
      currentPage = page;
      render();
      window.scrollTo({ top: 0, behavior: 'auto' });
      setupReveals();
    };
    if (pushState !== false) {
      history.pushState({ page: page }, '', page === 'home' ? '/' : '/' + page);
    }
    if (document.startViewTransition
        && document.documentElement.getAttribute('data-motion') !== '0') {
      document.startViewTransition(swap);
    } else {
      swap();
    }
  }

  window.addEventListener('popstate', function(e) {
    var page = (e.state && e.state.page) ? e.state.page : pageFromPath();
    if (page !== currentPage) {
      go(page, false);
    }
  });

  function setHamburgerIcon(open) {
    var btn = document.getElementById('hamburger');
    if (!btn) return;
    btn.innerHTML = open
      ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"></path></svg>'
      : '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"></path></svg>';
  }

  function toggleNav() {
    navOpen = !navOpen;
    document.getElementById('mobile-menu').style.display = navOpen ? 'flex' : 'none';
    setHamburgerIcon(navOpen);
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
    setHamburgerIcon(false);
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
    setText('home-welcome-arch', site.welcome);
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
    setText('order-note', DATA.merch.priceNote);
    setText('order-sent-title', DATA.merch.form.sentTitle);
    setText('order-sent-body', DATA.merch.form.sentBody);

    // Order list is owned by order.js
    if (window.__renderOrderItems) window.__renderOrderItems();

    render();
  };

  document.addEventListener('DOMContentLoaded', function() {
    currentPage = pageFromPath();
    history.replaceState({ page: currentPage }, '', currentPage === 'home' ? '/' : '/' + currentPage);
    window.__rerender();
    render();
    setupReveals();
  });
})();
