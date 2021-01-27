import colScroll from '../modules/col-scroll.js';

document.addEventListener('DOMContentLoaded', function() {
  const $proportionalToggle = document.querySelector('[data-proportional-toggle]');
  const $scrollTracks = document.querySelectorAll('[data-scroll-track]');
  const proportional = new URLSearchParams(location.search).get('proportional');

  if (proportional) {
    $proportionalToggle.checked = true;
  }

  colScroll($scrollTracks, {
    proportional,
  });

  $proportionalToggle.addEventListener('change', (e) => {
    if (e.target.checked) {
      window.location = '/pages/col-scroll/?proportional=true'
    } else {
      window.location = '/pages/col-scroll/'
    }
  })
});