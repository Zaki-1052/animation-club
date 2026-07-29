// order.js — merch order builder + Web3Forms submission
(function() {
  var DATA = window.AC.DATA;
  var ORDER = DATA.config.ORDER;

  // items: [{ id, name, price, size|null, qty }] — one row per product+size combo
  var items = [];
  var bar = null;

  function findProduct(id) {
    return DATA.merch.products.find(function(p) { return p.id === id; });
  }

  function total() {
    return items.reduce(function(sum, it) { return sum + it.price * it.qty; }, 0);
  }

  function count() {
    return items.reduce(function(sum, it) { return sum + it.qty; }, 0);
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // ── validation + light spam protection ────────────────────────────
  var openedAt = Date.now();
  var DAY_MS = 86400000;
  var LINK_RE = /(https?:\/\/|www\.|\b[a-z0-9-]+\.(com|net|org|io|ru|xyz|top|shop|link|biz|info)\b)/i;

  function fieldError(field, msg) {
    var el = document.getElementById('err-order-' + field);
    var input = document.getElementById('order-' + field);
    if (el) { el.textContent = msg || ''; el.style.display = msg ? 'block' : 'none'; }
    if (input) {
      input.classList.toggle('invalid', !!msg);
      if (msg) input.setAttribute('aria-invalid', 'true');
      else input.removeAttribute('aria-invalid');
    }
  }

  function clearFieldErrors() {
    ['name', 'email', 'notes'].forEach(function(f) { fieldError(f, ''); });
  }

  // Rolling 24h submission log, kept in localStorage.
  function recentSubmissions() {
    var raw;
    try { raw = JSON.parse(localStorage.getItem('ac-order-log') || '[]'); }
    catch (e) { raw = []; }
    var cutoff = Date.now() - DAY_MS;
    return raw.filter(function(t) { return typeof t === 'number' && t > cutoff; });
  }

  function logSubmission() {
    var log = recentSubmissions();
    log.push(Date.now());
    try { localStorage.setItem('ac-order-log', JSON.stringify(log)); } catch (e) {}
  }

  // Returns an error message, or '' when the form is good to send.
  function validate() {
    clearFieldErrors();
    var ok = true;

    if (!items.length) return 'Your order is empty — add at least one item first.';

    var pieces = count();
    var maxItems = ORDER.MAX_ITEMS || 40;
    if (pieces > maxItems) {
      return 'That\'s ' + pieces + ' pieces. For orders over ' + maxItems
        + ', message us on Instagram so we can plan stock with you.';
    }

    var name = document.getElementById('order-name').value.trim();
    var email = document.getElementById('order-email').value.trim();
    var notes = document.getElementById('order-notes').value.trim();

    if (name.length < 2) { fieldError('name', 'Please enter your name.'); ok = false; }

    if (!email) {
      fieldError('email', 'Please enter your email.'); ok = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
      fieldError('email', 'That email doesn\'t look right.'); ok = false;
    }

    if (notes && LINK_RE.test(notes)) {
      fieldError('notes', 'Please leave links out of the notes.'); ok = false;
    }

    if (!ok) return 'Check the highlighted fields above.';

    if (recentSubmissions().length >= (ORDER.MAX_PER_DAY || 8)) {
      return 'You\'ve sent a lot of requests today. Message us on Instagram and we\'ll sort it out.';
    }

    var minMs = (ORDER.MIN_SECONDS || 3) * 1000;
    if (Date.now() - openedAt < minMs) return 'One moment — then hit send again.';

    return '';
  }

  function renderItems() {
    var el = document.getElementById('order-items');
    if (!el) return;
    if (!items.length) {
      el.innerHTML = '<div class="order-empty">Nothing here yet — add items from the shelves above.</div>';
      updateBar();
      return;
    }
    el.innerHTML = items.map(function(it, i) {
      return '<div class="order-item-row">'
        + '<span class="order-item-name">' + esc(it.name) + '</span>'
        + (it.size ? '<span class="order-item-size">' + esc(it.size) + '</span>' : '')
        + '<button class="order-qty-btn" onclick="window.__orderQty(' + i + ',-1)" aria-label="Fewer">−</button>'
        + '<span style="min-width:18px;text-align:center">' + it.qty + '</span>'
        + '<button class="order-qty-btn" onclick="window.__orderQty(' + i + ',1)" aria-label="More">+</button>'
        + '<span style="min-width:44px;text-align:right;font-weight:600">$' + (it.price * it.qty) + '</span>'
        + '<button class="order-remove" onclick="window.__orderRemove(' + i + ')" aria-label="Remove">✕</button>'
        + '</div>';
    }).join('')
    + '<div class="order-total-row"><span>Total</span><span>$' + total() + '</span></div>';
    updateBar();
  }

  function updateBar() {
    if (!bar) {
      bar = document.createElement('button');
      bar.className = 'order-bar';
      bar.onclick = function() {
        window.__go('merch');
        var target = document.getElementById('order-section');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      };
      document.body.appendChild(bar);
    }
    if (count() > 0) {
      bar.innerHTML = '<span class="order-bar-count">' + count() + '</span> Your order · $' + total();
      bar.classList.add('show');
    } else {
      bar.classList.remove('show');
    }
  }

  function showError(msg) {
    var el = document.getElementById('order-error');
    if (!el) return;
    el.innerHTML = msg;
    el.style.display = msg ? 'block' : 'none';
  }

  window.__addToOrder = function(id) {
    var p = findProduct(id);
    if (!p) return;
    var size = null;
    if (p.sized) {
      var sel = document.getElementById('size-' + id);
      size = sel ? sel.value : null;
    }
    var existing = items.find(function(it) { return it.id === id && it.size === size; });
    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ id: id, name: p.name, price: p.price, size: size, qty: 1 });
    }
    renderItems();
  };

  window.__orderQty = function(i, delta) {
    if (!items[i]) return;
    items[i].qty += delta;
    if (items[i].qty <= 0) items.splice(i, 1);
    renderItems();
  };

  window.__orderRemove = function(i) {
    items.splice(i, 1);
    renderItems();
  };

  window.__renderOrderItems = renderItems;

  window.__resetOrderForm = function() {
    document.getElementById('order-form-wrap').style.display = 'block';
    document.getElementById('order-sent').style.display = 'none';
    items = [];
    renderItems();
    var form = document.querySelector('#order-form-wrap form');
    if (form) form.reset();
    clearFieldErrors();
    showError('');
    openedAt = Date.now();
  };

  // Clear a field's error as soon as the visitor starts fixing it.
  document.addEventListener('input', function(e) {
    var id = e.target && e.target.id;
    if (id && /^order-(name|email|notes)$/.test(id)) fieldError(id.slice(6), '');
  });

  window.__submitOrder = function(e) {
    e.preventDefault();
    showError('');

    var problem = validate();
    if (problem) { showError(esc(problem)); return; }

    if (!ORDER.ACCESS_KEY || ORDER.ACCESS_KEY === 'PASTE-KEY-HERE') {
      showError('The order form isn\'t set up yet (missing form key). DM us on Instagram '
        + '<a href="' + DATA.site.instagram.url + '" target="_blank" rel="noopener" style="font-weight:600;text-decoration:underline">' + esc(DATA.site.instagram.handle) + '</a>'
        + ' with your order instead.');
      return;
    }

    var form = e.target;
    if (form.botcheck && form.botcheck.checked) return; // honeypot

    var name = document.getElementById('order-name').value.trim();
    var email = document.getElementById('order-email').value.trim();
    var notes = document.getElementById('order-notes').value.trim();

    var lines = items.map(function(it) {
      return '- ' + it.qty + ' x ' + it.name + (it.size ? ' (size ' + it.size + ')' : '') + ' — $' + (it.price * it.qty);
    });
    var message = 'Merch order request\n\n'
      + 'Items:\n' + lines.join('\n') + '\n'
      + 'Total: $' + total() + ' (before taxes and shipping)\n\n'
      + (notes ? 'Notes: ' + notes + '\n\n' : '')
      + 'From: ' + name + ' <' + email + '>\n'
      + 'For: ' + ORDER.RECIPIENTS.join(', ');

    var submitBtn = document.getElementById('order-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    fetch(ORDER.ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({
        access_key: ORDER.ACCESS_KEY,
        subject: 'Merch order request from ' + name,
        from_name: name,
        email: email,
        message: message,
        botcheck: false
      })
    }).then(function(res) {
      return res.json().then(function(json) { return { ok: res.ok, json: json }; });
    }).then(function(r) {
      if (r.ok && r.json.success) {
        logSubmission();
        document.getElementById('order-form-wrap').style.display = 'none';
        document.getElementById('order-sent').style.display = 'block';
        items = [];
        updateBar();
      } else {
        showError('Sending failed: ' + esc(r.json.message || 'unknown error') + ' — try again, or DM us on Instagram.');
      }
    }).catch(function(err) {
      showError('Sending failed: ' + esc(err.message) + ' — try again, or DM us on Instagram.');
    }).finally(function() {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send order request ✦';
    });
  };
})();
