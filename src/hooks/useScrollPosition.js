import { useEffect, useState } from 'react';

/** Returns the current vertical scroll offset, throttled to animation frames. */
export function useScrollPosition() {
  const [y, setY] = useState(() => (typeof window === 'undefined' ? 0 : window.scrollY));
  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setY(window.scrollY));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  return y;
}
