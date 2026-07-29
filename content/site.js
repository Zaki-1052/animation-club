// content/site.js — site-wide copy: welcome line, page headers, footer, links
// EDIT ME — plain text strings, no code knowledge needed.
window.AC = window.AC || {};
window.AC.CONTENT = window.AC.CONTENT || {};

window.AC.CONTENT.site = {

  // VERBATIM from website-information.md
  welcome: 'Welcome to the Animation Club at UC San Diego! We host speaker panels, workshops, socials, and an annual animation showcase.',

  instagram: {
    handle: '@animation_at_ucsd',
    url: 'https://www.instagram.com/animation_at_ucsd/'
  },

  // Page headers. "eyebrow" is the small uppercase label above the title.
  pages: {
    past:  { eyebrow: 'Archive',      title: 'Past events' },
    fall:  { eyebrow: 'Fall Quarter', title: 'Fall events' },
    merch: { eyebrow: 'Shop',         title: 'Merch' }
  },

  // Home "find your way around" cards. — connective copy, edit freely
  navCards: [
    { key: 'past',  glyph: '🎬', title: 'Past events', desc: 'Speaker panels, workshops, jams, and the MAP.', label: 'Browse' },
    { key: 'fall',  glyph: '🍂', title: 'Fall events', desc: 'The Fall 2026 schedule.', label: 'See schedule' },
    { key: 'merch', glyph: '🧸', title: 'Merch', desc: 'Stickers, keychains, totes, and hoodies.', label: 'Shop' }
  ],

  footer: {
    line: 'Made with ♥ by club members',
    tag: 'Animation Club · UC San Diego'
  }
};
