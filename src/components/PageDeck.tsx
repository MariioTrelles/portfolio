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
const SWIPE_THRESHOLD_Y = 55;
const SWIPE_DOMINANCE_RATIO = 1.5;
const SWIPE_MAX_DURATION_MS = 600;
const WHEEL_MIN_DELTA = 12;
const WHEEL_COOLDOWN_MS = 850;

function getScrollableAncestor(target: EventTarget | null, root: HTMLElement): HTMLElement | null {
  let node = target instanceof HTMLElement ? target : null;
  while (node && node !== root) {
    const style = getComputedStyle(node);
    const scrollableY = style.overflowY === 'auto' || style.overflowY === 'scroll';
    if (scrollableY && node.scrollHeight > node.clientHeight + 1) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
}

function isAtScrollBoundary(el: HTMLElement, forward: boolean): boolean {
  if (forward) {
    return el.scrollTop + el.clientHeight >= el.scrollHeight - 1;
  }
  return el.scrollTop <= 1;
}

function PageDeck({ chapters, activeIndex, direction, next, prev, onExitComplete }: PageDeckProps) {
  const shouldReduceMotion = useReducedMotion();
  const deckRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = deckRef.current;
    if (!el) return;

    let start: { x: number; y: number; t: number; target: EventTarget | null } | null = null;
    let lastWheelTrigger = 0;

    function onTouchStart(event: TouchEvent) {
      const touch = event.touches[0];
      start = { x: touch.clientX, y: touch.clientY, t: Date.now(), target: event.target };
    }

    function onTouchEnd(event: TouchEvent) {
      if (!start) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;
      const dt = Date.now() - start.t;
      const target = start.target;
      start = null;

      if (dt >= SWIPE_MAX_DURATION_MS) return;

      if (Math.abs(dx) > SWIPE_THRESHOLD_X && Math.abs(dx) > Math.abs(dy) * SWIPE_DOMINANCE_RATIO) {
        if (dx < 0) next();
        else prev();
        return;
      }

      if (Math.abs(dy) > SWIPE_THRESHOLD_Y && Math.abs(dy) > Math.abs(dx) * SWIPE_DOMINANCE_RATIO) {
        const forward = dy < 0;
        const scrollable = el ? getScrollableAncestor(target, el) : null;
        if (scrollable && !isAtScrollBoundary(scrollable, forward)) return;
        if (forward) next();
        else prev();
      }
    }

    function onWheel(event: WheelEvent) {
      if (Math.abs(event.deltaY) < WHEEL_MIN_DELTA) return;

      const forward = event.deltaY > 0;
      const scrollable = getScrollableAncestor(event.target, el as HTMLElement);
      if (scrollable && !isAtScrollBoundary(scrollable, forward)) return;

      event.preventDefault();

      const now = Date.now();
      if (now - lastWheelTrigger < WHEEL_COOLDOWN_MS) return;
      lastWheelTrigger = now;

      if (forward) next();
      else prev();
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true });
    el.addEventListener('touchend', onTouchEnd, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      el.removeEventListener('touchstart', onTouchStart);
      el.removeEventListener('touchend', onTouchEnd);
      el.removeEventListener('wheel', onWheel);
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
