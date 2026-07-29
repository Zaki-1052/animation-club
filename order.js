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
    showError('');
  };

  window.__submitOrder = function(e) {
    e.preventDefault();
    showError('');

    if (!items.length) {
      showError('Your order is empty — add at least one item first.');
      return;
    }
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
        ccemail: ORDER.RECIPIENTS.slice(1).join(','),
        message: message,
        botcheck: false
      })
    }).then(function(res) {
      return res.json().then(function(json) { return { ok: res.ok, json: json }; });
    }).then(function(r) {
      if (r.ok && r.json.success) {
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
