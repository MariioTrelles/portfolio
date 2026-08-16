import { useCallback, useEffect, useRef, useState } from 'react';

function usePager(ids: readonly string[]) {
  const [activeIndex, setActiveIndex] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    const idx = ids.indexOf(hash);
    return idx === -1 ? 0 : idx;
  });
  const [direction, setDirection] = useState<1 | -1>(1);

  const activeIndexRef = useRef(activeIndex);
  const pendingRef = useRef(false);
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const goTo = useCallback(
    (index: number) => {
      if (pendingRef.current) return;
      const clamped = Math.max(0, Math.min(ids.length - 1, index));
      if (clamped === activeIndexRef.current) return;
      pendingRef.current = true;
      setDirection(clamped > activeIndexRef.current ? 1 : -1);
      setActiveIndex(clamped);
    },
    [ids.length],
  );

  const next = useCallback(() => goTo(activeIndexRef.current + 1), [goTo]);
  const prev = useCallback(() => goTo(activeIndexRef.current - 1), [goTo]);
  const onTransitionEnd = useCallback(() => {
    pendingRef.current = false;
  }, []);

  useEffect(() => {
    const id = ids[activeIndex];
    if (id) window.history.replaceState(null, '', `#${id}`);
  }, [activeIndex, ids]);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable)
      ) {
        return;
      }
      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        event.preventDefault();
        next();
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        event.preventDefault();
        prev();
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev]);

  return { activeIndex, direction, goTo, next, prev, onTransitionEnd };
}

export default usePager;
