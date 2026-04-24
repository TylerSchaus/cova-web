'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import type { TextRollProps } from './text-roll';

type TextRollInViewProps = TextRollProps & {
  once?: boolean;
};

export function TextRollInView({ once = true, ...props }: TextRollInViewProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -10% 0px' });

  const chars = props.children.split('');

  return (
    <span ref={ref}>
      {isInView && (
        <span aria-label={props.children}>
          {chars.map((char, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              initial={{ opacity: 0, marginTop: '6px' }}
              animate={{ opacity: 1, marginTop: '0px' }}
              transition={{ duration: 0.4, delay: i * 0.03, ease: 'easeOut' }}
              style={{ display: 'inline' }}
            >
              {char === ' ' ? ' ' : char}
            </motion.span>
          ))}
        </span>
      )}
      {!isInView && (
        <span className="invisible">{props.children}</span>
      )}
    </span>
  );
}
