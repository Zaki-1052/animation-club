// data.js — content data and gradient token shortcuts
window.AC = window.AC || {};

(function() {
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

  var DATA = {
    films: [
      { title: 'Untitled Loop No. 4', meta: 'Frame-by-frame · placeholder', dur: '0:48', bg: G.holo },
      { title: 'Night Bus', meta: 'Short film · placeholder', dur: '3:12', bg: G.lav },
      { title: 'Tide Pool', meta: 'Experimental · placeholder', dur: '1:30', bg: G.mint }
    ],
    gallery: [
      { title: 'Character sheet', meta: 'Placeholder', ar: '3/4', bg: G.pink },
      { title: 'Background paint', meta: 'Placeholder', ar: '4/3', bg: G.blue },
      { title: 'Walk cycle', meta: 'Placeholder', ar: '1/1', bg: G.holo },
      { title: 'Inktober #7', meta: 'Placeholder', ar: '3/5', bg: G.lav },
      { title: 'Color study', meta: 'Placeholder', ar: '4/5', bg: G.gold },
      { title: 'Storyboard panel', meta: 'Placeholder', ar: '16/9', bg: G.mint },
      { title: 'Expression sheet', meta: 'Placeholder', ar: '1/1', bg: G.coral },
      { title: 'Prop concepts', meta: 'Placeholder', ar: '3/4', bg: G.holo2 },
      { title: 'Quick gesture', meta: 'Placeholder', ar: '4/5', bg: G.blue },
      { title: 'Title card', meta: 'Placeholder', ar: '16/10', bg: G.pink }
    ],
    navCards: [
      { key: 'history', glyph: '📖', title: 'History & founding', desc: 'How the club started and who got it going.', label: 'Read the story', bg: G.gold },
      { key: 'officers', glyph: '🎨', title: 'Officers', desc: 'Meet the team running things this year.', label: 'Meet the team', bg: G.pink },
      { key: 'past', glyph: '🎬', title: 'Past events', desc: 'MAPS, jams, speakers, and figure drawing.', label: 'Browse archive', bg: G.blue },
      { key: 'fall', glyph: '🍂', title: 'Fall events', desc: "What's happening this quarter.", label: 'See schedule', bg: G.mint },
      { key: 'merch', glyph: '🧸', title: 'Merch', desc: 'Stickers, tees, and pins by members.', label: 'Shop merch', bg: G.lav },
      { key: 'contact', glyph: '💌', title: 'Contact', desc: 'Questions, ideas, or feedback? Reach out.', label: 'Say hi', bg: G.coral }
    ],
    timeline: [
      { year: 'YEAR ZERO', title: 'A few sketchbooks in a study room' },
      { year: 'EARLY DAYS', title: 'First screening night' },
      { year: 'GROWTH', title: 'Officially a club' },
      { year: 'NOW', title: 'Where we are today' }
    ],
    founders: [
      { name: 'Founder One', role: 'Founding President · placeholder', initials: 'F1', bg: G.pink },
      { name: 'Founder Two', role: 'Founding VP · placeholder', initials: 'F2', bg: G.blue },
      { name: 'Founder Three', role: 'Founding Art Lead · placeholder', initials: 'F3', bg: G.lav }
    ],
    officers: [
      { name: 'Kieran', role: 'Member', initials: 'K', bg: G.holo, link: 'https://www.instagram.com/animation_at_ucsd/' },
      { name: 'Jane Doe', role: 'President · placeholder', initials: 'JD', bg: G.pink, link: '#' },
      { name: 'John Doe', role: 'Vice President · placeholder', initials: 'JD', bg: G.blue, link: '#' },
      { name: 'Sam Roe', role: 'Treasurer · placeholder', initials: 'SR', bg: G.mint, link: '#' },
      { name: 'Alex Poe', role: 'Events Lead · placeholder', initials: 'AP', bg: G.lav, link: '#' },
      { name: 'Riley Moe', role: 'Social Media · placeholder', initials: 'RM', bg: G.gold, link: '#' },
      { name: 'Casey Loe', role: 'Art Director · placeholder', initials: 'CL', bg: G.coral, link: '#' },
      { name: 'Jordan Coe', role: 'Animation Lead · placeholder', initials: 'JC', bg: G.holo2, link: '#' }
    ],
    past: [
      { title: 'Animation Jam', kind: 'Jam', date: 'PLACEHOLDER DATE', bg: G.holo },
      { title: 'Guest Speaker Night', kind: 'Speaker', date: 'PLACEHOLDER DATE', bg: G.blue },
      { title: 'MAPS Mixer', kind: 'MAPS', date: 'PLACEHOLDER DATE', bg: G.pink },
      { title: 'Figure Drawing', kind: 'Workshop', date: 'PLACEHOLDER DATE', bg: G.mint },
      { title: 'Film Screening', kind: 'Screening', date: 'PLACEHOLDER DATE', bg: G.lav },
      { title: 'Sticker Swap', kind: 'Social', date: 'PLACEHOLDER DATE', bg: G.gold }
    ],
    pastFeatured: { title: 'Spring Animation Jam — Recap', date: 'PLACEHOLDER DATE', bg: 'var(--g-holo)' },
    fall: [
      { mon: 'OCT', day: '03', title: 'Welcome / interest meeting', time: '6:00 PM', place: 'Placeholder room', body: 'Intro, snacks, and what we do. Lorem ipsum placeholder.', tag: 'Open', bg: 'linear-gradient(135deg,#FFD0DC,#C2E6F6)' },
      { mon: 'OCT', day: '17', title: 'Frame-by-frame workshop', time: '6:00 PM', place: 'Placeholder room', body: 'Hands-on intro to traditional animation. Placeholder.', tag: 'Workshop', bg: 'linear-gradient(135deg,#9FE0C0,#CDF1DC)' },
      { mon: 'OCT', day: '31', title: 'Spooky doodle night', time: '7:00 PM', place: 'Placeholder room', body: 'Casual themed draw-along. Placeholder.', tag: 'Social', bg: 'linear-gradient(135deg,#C5B6F0,#E2DDFB)' },
      { mon: 'NOV', day: '14', title: 'Fall animation jam', time: 'All day', place: 'Placeholder room', body: 'Our big quarterly jam. Placeholder.', tag: 'Jam', bg: 'linear-gradient(135deg,#FFD58A,#FFF1CF)' },
      { mon: 'DEC', day: '05', title: 'End-of-quarter screening', time: '6:30 PM', place: 'Placeholder room', body: 'Watch what everyone made. Placeholder.', tag: 'Screening', bg: 'linear-gradient(135deg,#FF9AAB,#FFD7C8)' }
    ],
    fallNext: { title: 'Welcome / interest meeting', when: 'Oct 3 · 6:00 PM', place: 'Placeholder room' },
    merch: [
      { name: 'Logo sticker', price: '$3', glyph: '✷', desc: 'Holographic die-cut. Placeholder.', bg: G.holo },
      { name: 'Club tee', price: '$18', glyph: '👕', desc: 'Soft cotton, member design. Placeholder.', bg: G.blue },
      { name: 'Enamel pin', price: '$8', glyph: '📌', desc: 'Cursor + pen mark. Placeholder.', bg: G.lav },
      { name: 'Sticker pack', price: '$10', glyph: '🗂', desc: 'Five assorted designs. Placeholder.', bg: G.pink }
    ]
  };

  window.AC.G = G;
  window.AC.DATA = DATA;
})();
