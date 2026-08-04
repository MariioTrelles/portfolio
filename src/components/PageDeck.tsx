import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, type ReactNode } from 'react';
import { easeOut, fadeVariants, slideVariants } from '../motion/variants';

type ChapterEntry = { id: string; node: ReactNode };

type PageDeckProps = {
  chapters: ChapterEntry[];
  activeIndex: number;
  direction: 1 | -1;
  next: () => void;
  prev: () => void;
  onExitComplete: () => void;
};

const SWIPE_THRESHOLD_X = 60;
const SWIPE_DOMINANCE_RATIO = 1.5;
const SWIPE_MAX_DURATION_MS = 600;

function PageDeck({ chapters, activeIndex, direction, next, prev, onExitComplete }: PageDeckProps) {
  const shouldReduceMotion = useReducedMotion();
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;

    let start: { x: number; y: number; t: number } | null = null;

    function onTouchStart(event: TouchEvent) {
      const touch = event.touches[0];
      start = { x: touch.clientX, y: touch.clientY, t: Date.now() };
    }

    function onTouchEnd(event: TouchEvent) {
      if (!start) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;
      const dt = Date.now() - start.t;
      start = null;

      if (
        Math.abs(dx) > SWIPE_THRESHOLD_X &&
        Math.abs(dx) > Math.abs(dy) * SWIPE_DOMINANCE_RATIO &&
        dt < SWIPE_MAX_DURATION_MS
      ) {
        if (dx < 0) next();
        else prev();
      }
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
    };
  }, [next, prev]);

  const current = chapters[activeIndex];

  return (
    <div className="page-deck" ref={deckRef}>
      <AnimatePresence initial={false} mode="sync" custom={direction} onExitComplete={onExitComplete}>
        <motion.div
          key={current.id}
          className="page-slide"
          custom={direction}
          variants={shouldReduceMotion ? fadeVariants : slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={
            shouldReduceMotion ? { duration: 0.2 } : { type: 'tween', duration: 0.5, ease: easeOut }
          }
        >
          {current.node}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default PageDeck;
