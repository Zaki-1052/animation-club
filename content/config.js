// content/config.js — site configuration: visible pages + order form delivery
// EDIT ME — plain text strings, no code knowledge needed.
window.AC = window.AC || {};
window.AC.CONTENT = window.AC.CONTENT || {};

window.AC.CONTENT.config = {

  // Pages shown in the nav, in order. To bring a hidden page back,
  // move its line out of HIDDEN_PAGES and into PAGES.
  PAGES: [
    { key: 'home',  label: 'Home' },
    { key: 'past',  label: 'Past Events' },
    { key: 'fall',  label: 'Fall Events' },
    { key: 'merch', label: 'Merch' }
  ],

  // Hidden until officers provide content (per VP request).
  HIDDEN_PAGES: [
    { key: 'history',  label: 'History' },
    { key: 'officers', label: 'Officers' },
    { key: 'contact',  label: 'Contact' }
  ],

  // Theme picker (the palette button in the corner). Hidden for visitors.
  // Set true while developing — or append ?themes to the URL to get it
  // temporarily without changing this file (e.g. site.edu/?themes).
  SHOW_THEME_PICKER: false,

  // Merch order form delivery (Web3Forms).
  ORDER: {
    ENDPOINT: 'https://api.web3forms.com/submit',
    ACCESS_KEY: '6560fbfd-ccf4-4b41-a21b-c389ae6cfa34',

    RECIPIENTS: ['a8salazar@ucsd.edu', 'kmatsuoka@ucsd.edu', 'r8lau@ucsd.edu'],

    // Light spam protection. Raise or lower freely.
    MAX_PER_DAY: 10,      // order requests one browser can send per 24h
    MAX_ITEMS: 50,       // total pieces in a single order
    MIN_SECONDS: 3       // form must be open this long before sending (bots are instant)
  }
};
