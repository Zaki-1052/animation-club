// content/events.js — past event categories + Fall 2026 schedule
// EDIT ME
window.AC = window.AC || {};
window.AC.CONTENT = window.AC.CONTENT || {};

window.AC.CONTENT.events = {

  // Past events, grouped by doc.
  past: [
    {
      title: 'Speaker events',
      kind: 'Speakers',
      intro: 'Animation Club has hosted large scale events such as:',
      items: [
        'A trip to Lightbox convention',
        'A speaker panel with Sam Register (the president of Warner Bros Animation)',
        'A speaker panel with the animators from Teen Titans Go',
        // spelling?
        'A speaker panel with Magery Dean'
      ]
    },
    {
      title: 'Weekly workshops & socials',
      kind: 'Weekly',
      body: 'We have hosted weekly animation workshops covering topics from the 12 principles of animation to life drawing to character design. Animation Club also hosts fun socials such as movie screenings!'
    },
    {
      title: 'Animation Jam',
      kind: 'Jam',
      body: 'We have hosted a summer and winter animation jam! The summer animation jam had artists from across the country have a month to create an animated short film with their team.'
    },
    {
      title: 'Multi Animator Project (MAP)',
      kind: 'MAP',
      body: 'Our annual multi-animator project is an animated music video that has artists animating their own unique clip in each section!'
    }
  ],

  // Fall 2026 schedule
  fall: [
    { mon: 'OCT', day: '02', title: 'First GBM! (with free boba)', tag: 'Meeting' },
    { mon: 'OCT', day: '09', title: 'Portfolio Workshop: 12 Principles of Animation', tag: 'Workshop' },
    { mon: 'OCT', day: '16', title: 'Portfolio Workshop: Character/Prop Design', tag: 'Workshop' },
    { mon: 'OCT', day: '23', title: 'Lightbox Convention Trip', tag: 'Trip' },
    { mon: 'OCT', day: '30', title: 'Halloween Event', tag: 'Social' },
    { mon: 'NOV', day: '06', title: 'Portfolio Workshop: Perspective Drawing', tag: 'Workshop' },
    { mon: 'NOV', day: '13', title: 'Portfolio Workshop: Storyboarding/Scriptwriting (TTV collab)', tag: 'Workshop' },
    { mon: 'NOV', day: '20', title: 'Winter/Holiday Social', tag: 'Social' },
    { mon: 'NOV', day: '27', title: 'Portfolio Workshop: 3D Assets/Design', tag: 'Workshop' },
    { mon: 'DEC', day: '04', title: 'Shrek Movie Screening & Social', tag: 'Screening' }
  ],

  // Auto-computed: points at the first event whose date hasn't passed yet.
  get nextIndex() {
    var months = { JAN:0, FEB:1, MAR:2, APR:3, MAY:4, JUN:5,
                   JUL:6, AUG:7, SEP:8, OCT:9, NOV:10, DEC:11 };
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    for (var i = 0; i < this.fall.length; i++) {
      var ev = this.fall[i];
      //TODO: update year in Winter quarter
      var evDate = new Date(2026, months[ev.mon], parseInt(ev.day, 10));
      if (evDate >= today) return i;
    }
    return this.fall.length - 1;
  }
};
