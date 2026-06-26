// app.js — SPA routing, lightbox, scroll reveal, form handling
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

  window.__go = go;
  window.__openLB = openLightbox;
  window.__closeLB = closeLightbox;
  window.__toggleNav = toggleNav;

  window.__submitForm = function(e) {
    e.preventDefault();
    document.getElementById('contact-form').style.display = 'none';
    document.getElementById('contact-sent').style.display = 'block';
  };

  window.__resetForm = function() {
    document.getElementById('contact-form').style.display = 'block';
    document.getElementById('contact-sent').style.display = 'none';
    document.querySelector('#contact-form form').reset();
  };

  window.__rerender = function() {
    document.getElementById('films-grid').innerHTML = R.renderFilms();
    document.getElementById('gallery-grid').innerHTML = R.renderGallery();
    document.getElementById('nav-cards-grid').innerHTML = R.renderNavCards();
    document.getElementById('timeline-list').innerHTML = R.renderTimeline();
    document.getElementById('founders-grid').innerHTML = R.renderFounders();
    document.getElementById('officers-grid').innerHTML = R.renderOfficers();
    document.getElementById('past-grid').innerHTML = R.renderPast();
    document.getElementById('fall-list').innerHTML = R.renderFall();
    document.getElementById('merch-grid').innerHTML = R.renderMerch();

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
