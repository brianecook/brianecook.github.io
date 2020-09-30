export default colScroll;

function colScroll($scrollTracks, breakpoint = 1024) {
  if (window.innerWidth >= breakpoint) {

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0);

    document.getElementsByTagName('body')[0].addEventListener('wheel', e => {
      handleScroll($scrollTracks, e.deltaY);
    });
  }
}

function handleScroll($elems, deltaY) {
  $elems.forEach($elem => {
    $elem.scrollTop = $elem.scrollTop + deltaY;
  });
}

// const handleTouch = () => {
//   let start = 0;

//   $track1.addEventListener('touchstart', touchStart, false);
//   $track1.addEventListener('touchmove', touchMove, false);
//   $track2.addEventListener('touchstart', touchStart, false);
//   $track2.addEventListener('touchmove', touchMove, false);
  
//   function touchStart(e) {
//     start = e.touches[0].pageY;
//   }

//   function touchMove(e){
//     const offset = start - e.touches[0].pageY;
    
//     handleScroll($track1, $track2, offset);
//     handleScroll($track2, $track1, offset);
//   }
// }