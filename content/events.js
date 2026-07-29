// content/events.js — past event categories + Fall 2026 schedule
// EDIT ME — plain text strings, no code knowledge needed.
window.AC = window.AC || {};
window.AC.CONTENT = window.AC.CONTENT || {};

window.AC.CONTENT.events = {

  // Past events, grouped the way the VP wrote them.
  // Body text is VERBATIM from website-information.md (proper-noun
  // capitalization normalized).
  past: [
    {
      title: 'Speaker events',
      kind: 'Speakers',
      intro: 'Animation Club has hosted large scale events such as:',
      items: [
        'A trip to Lightbox convention',
        'A speaker panel with Sam Register (the president of Warner Bros Animation)',
        'A speaker panel with the animators from Teen Titans Go',
        // spelling as provided — double-check the name before print
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

  // Fall 2026 schedule — VERBATIM from website-information.md.
  // Note: the source listed the TTV collab as 11/3; every other event is a
  // Friday, so this uses 11/13. Confirm with the VP.
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

  // The "Next up" banner on the Fall Events page points at this entry (0 = first).
  // Bump it as events pass.
  nextIndex: 0
};
