// data.js — assembles AC.DATA from the content/ layer and adds presentation
// tokens (gradients). Copy lives in content/*.js; this file only decorates.
window.AC = window.AC || {};

(function() {
  var C = window.AC.CONTENT;

  var G = {
    pink: 'var(--g-pink)',
    blue: 'var(--g-blue)',
    mint: 'var(--g-mint)',
    lav: 'var(--g-lav)',
    coral: 'var(--g-coral)',
    gold: 'var(--g-gold)',
    holo: 'var(--g-holo)',
    holo2: 'var(--g-holo2)'
  };

  // Gradient rotation for card accents.
  var accents = [G.blue, G.pink, G.mint, G.lav, G.gold, G.coral];
  function accent(i) { return accents[i % accents.length]; }

  var DATA = {
    config: C.config,
    site: C.site,

    navCards: C.site.navCards.map(function(nc, i) {
      return Object.assign({ bg: accent(i) }, nc);
    }),

    past: C.events.past.map(function(cat, i) {
      return Object.assign({ bg: accent(i) }, cat);
    }),

    fall: C.events.fall.map(function(ev, i) {
      return Object.assign({ bg: accent(i) }, ev);
    }),

    fallNext: C.events.fall[C.events.nextIndex || 0],

    merch: Object.assign({}, C.merch, {
      products: C.merch.products.map(function(p, i) {
        return Object.assign({ bg: accent(i) }, p);
      })
    })
  };

  window.AC.G = G;
  window.AC.DATA = DATA;
})();
