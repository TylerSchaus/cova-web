'use client';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { TextRoll } from './text-roll';
import type { TextRollProps } from './text-roll';

type TextRollInViewProps = TextRollProps & {
  once?: boolean;
};

export function TextRollInView({ once = true, ...props }: TextRollInViewProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once, margin: '0px 0px -10% 0px' });

  return (
    <span ref={ref}>
      {isInView && <TextRoll {...props} />}
      {!isInView && (
        <span className="invisible">{props.children}</span>
      )}
    </span>
  );
}
