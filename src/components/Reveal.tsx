import { motion, useReducedMotion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';
import { easeOut, revealVariants } from '../motion/variants';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'article' | 'li';
};

const tags = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
};

function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const MotionTag = tags[as];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={revealVariants as Variants}
      transition={{ duration: 0.6, ease: easeOut, delay }}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
