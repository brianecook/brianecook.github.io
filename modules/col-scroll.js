export default colScroll;

const defaultOptions = {
  proportional: false
}

function colScroll($scrollTracks, options = defaultOptions, breakpoint = 1024) {
  if (window.innerWidth >= breakpoint) {
    const $body = document.getElementsByTagName('body')[0];
    let $tallestTrack = 0;

    $scrollTracks.forEach($track => {
      if ($track.scrollHeight > $tallestTrack) {
        $tallestTrack = $track;
      }
    })

    // makes sure every page refresh starts at top of page
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }

    window.scrollTo(0, 0);

    // resets col-scroll style when user returns to top of page
    window.addEventListener('scroll', (e) => {
      if (window.scrollY === 0) {
        $body.style.overflowY = 'hidden';
      }
    });

    // Handles wheel event
    document.getElementsByTagName('body')[0].addEventListener('wheel', e => {
      $scrollTracks.forEach($track => {
        const isScrollZero = window.scrollY === 0;
        const newScrollDepth = Math.ceil($track.scrollTop + e.deltaY);
        const scrollableHeight = $tallestTrack.scrollHeight - $tallestTrack.getBoundingClientRect().height;
        const scrollProportion = e.deltaY / scrollableHeight;
        let tracksScrolled;
    
        if (isScrollZero) {
          if (options.proportional) {
            const scrollableTrackHeight = $track.scrollHeight - $track.getBoundingClientRect().height;
            const trackProportion = scrollableTrackHeight * scrollProportion;
            $track.scrollTop += trackProportion;
          } else {
            $track.scrollTop = newScrollDepth;
          }
          tracksScrolled = getTracksScrolled($scrollTracks);
        }
    
        if (tracksScrolled) {
          $body.style.overflowY = 'visible';
        } else {
          if (isScrollZero) {
            $body.style.overflowY = 'hidden';
          }
        }
      });
    });
  }
}

function getTracksScrolled($elems) {
  const trackArray = [];
  $elems.forEach($elem => {
    const scrollTop = $elem.scrollTop
    const trackBottom = $elem.scrollHeight - $elem.getBoundingClientRect().height
    trackArray.push(scrollTop >= trackBottom)
  });
  return trackArray.indexOf(false) > -1 ? false : true;
}

const handleTouch = () => {
  let start = 0;

  $track1.addEventListener('touchstart', touchStart, false);
  $track1.addEventListener('touchmove', touchMove, false);
  $track2.addEventListener('touchstart', touchStart, false);
  $track2.addEventListener('touchmove', touchMove, false);
  
  function touchStart(e) {
    start = e.touches[0].pageY;
  }

  function touchMove(e){
    const offset = start - e.touches[0].pageY;
    
    handleScroll($track1, $track2, offset);
    handleScroll($track2, $track1, offset);
  }
}