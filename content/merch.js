// content/merch.js — products, prices, and images for the Merch page
// EDIT ME — plain text strings, no code knowledge needed.
// Prices are VERBATIM from website-information.md.
window.AC = window.AC || {};
window.AC.CONTENT = window.AC.CONTENT || {};

window.AC.CONTENT.merch = {

  // Shown once under the page title
  priceNote: 'Prices do not include taxes and shipping.',

  products: [
    // Fall Fantasy sticker collection — $5 each
    { id: 'sticker-pride',     name: 'Pride sticker',      price: 5,  img: 'assets/merch/sticker-pride.webp',     group: 'Fall Fantasy stickers' },
    { id: 'sticker-gay',       name: 'Gay sticker',        price: 5,  img: 'assets/merch/sticker-gay.webp',       group: 'Fall Fantasy stickers' },
    { id: 'sticker-lesbian',   name: 'Lesbian sticker',    price: 5,  img: 'assets/merch/sticker-lesbian.webp',   group: 'Fall Fantasy stickers' },
    { id: 'sticker-bisexual',  name: 'Bisexual sticker',   price: 5,  img: 'assets/merch/sticker-bisexual.webp',  group: 'Fall Fantasy stickers' },
    { id: 'sticker-trans',     name: 'Trans sticker',      price: 5,  img: 'assets/merch/sticker-trans.webp',     group: 'Fall Fantasy stickers' },
    { id: 'sticker-nonbinary', name: 'Non-binary sticker', price: 5,  img: 'assets/merch/sticker-nonbinary.webp', group: 'Fall Fantasy stickers' },

    { id: 'keychain', name: 'Keychain', price: 10, img: 'assets/merch/keychain.webp', group: 'Accessories' },
    { id: 'tote',     name: 'Tote bag', price: 18, img: 'assets/merch/tote.webp',     group: 'Accessories' },

    // Hoodies — imgBack shows on hover. "sized" adds a size picker to the order form.
    { id: 'hoodie-white',     name: 'Hoodie — White',     price: 35, img: 'assets/merch/hoodie-white-front.webp',     imgBack: 'assets/merch/hoodie-white-back.webp',     group: 'Hoodies', sized: true },
    { id: 'hoodie-black',     name: 'Hoodie — Black',     price: 35, img: 'assets/merch/hoodie-black-front.webp',     imgBack: 'assets/merch/hoodie-black-back.webp',     group: 'Hoodies', sized: true },
    { id: 'hoodie-rose',      name: 'Hoodie — Rose',      price: 37, img: 'assets/merch/hoodie-rose-front.webp',      imgBack: 'assets/merch/hoodie-rose-back.webp',      group: 'Hoodies', sized: true },
    { id: 'hoodie-turquoise', name: 'Hoodie — Turquoise', price: 37, img: 'assets/merch/hoodie-turquoise-front.webp', imgBack: 'assets/merch/hoodie-turquoise-back.webp', group: 'Hoodies', sized: true }
  ],

  sizes: ['S', 'M', 'L', 'XL', '2XL'],

  // Order form copy
  form: {
    title: 'Request an order',
    blurb: 'Pick your items, send the request, and an officer will follow up by email with payment and pickup details.',
    sentTitle: 'Request sent!',
    sentBody: 'We got it. An officer will email you back soon.'
  }
};
