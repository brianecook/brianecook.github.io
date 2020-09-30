import colScroll from './modules/col-scroll.js';

document.addEventListener('DOMContentLoaded', function() {
  const $scrollTracks = document.querySelectorAll('[data-scroll-track]');
  colScroll($scrollTracks);
});