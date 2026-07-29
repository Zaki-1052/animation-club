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
  // Setup (one time): go to https://web3forms.com, enter a8salazar@ucsd.edu,
  // click the link in the confirmation email, and paste the access key below.
  // Until the key is pasted, the form shows a "not set up yet" error on submit.
  ORDER: {
    ENDPOINT: 'https://api.web3forms.com/submit',
    ACCESS_KEY: 'PASTE-KEY-HERE',
    // All three officers are listed in the email body; Web3Forms delivers to
    // the key owner's inbox (a8salazar@ucsd.edu).
    RECIPIENTS: ['a8salazar@ucsd.edu', 'kmatsuoka@ucsd.edu', 'r8lau@ucsd.edu']
  }
};
