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

  const words = props.children.split(' ');

  return (
    <span ref={ref}>
      {isInView && (
        <span aria-label={props.children}>
          {words.map((word, i) => (
            <motion.span
              key={i}
              aria-hidden="true"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
              style={{ display: 'inline-block' }}
            >
              {word}{i < words.length - 1 ? ' ' : ''}
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
