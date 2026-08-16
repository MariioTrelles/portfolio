export const easeOut = [0.22, 1, 0.36, 1] as const;

export const revealVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export const slideVariants = {
  enter: (direction: 1 | -1) => ({ x: direction > 0 ? '100%' : '-100%' }),
  center: { x: '0%' },
  exit: (direction: 1 | -1) => ({ x: direction > 0 ? '-100%' : '100%' }),
};

export const fadeVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
};
