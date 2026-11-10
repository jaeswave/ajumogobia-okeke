import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Autoplaying carousel state: index, direction, pause control and progress timing.
 * Pauses when the tab is hidden; `paused` can be driven by hover/focus/user toggle.
 */
export function useCarousel(count, { interval = 7000, paused = false } = {}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [hidden, setHidden] = useState(false);
  const timer = useRef(null);

  const go = useCallback(
    (next) => {
      setIndex((current) => {
        const target = (next + count) % count;
        setDirection(target > current || (current === count - 1 && target === 0) ? 1 : -1);
        return target;
      });
    },
    [count],
  );
  const next = useCallback(() => setIndex((i) => { setDirection(1); return (i + 1) % count; }), [count]);
  const prev = useCallback(() => setIndex((i) => { setDirection(-1); return (i - 1 + count) % count; }), [count]);

  useEffect(() => {
    const onVis = () => setHidden(document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  const running = !paused && !hidden && count > 1;
  useEffect(() => {
    if (!running) return undefined;
    timer.current = setTimeout(next, interval);
    return () => clearTimeout(timer.current);
  }, [index, running, interval, next]);

  return { index, direction, go, next, prev, running };
}
