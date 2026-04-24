'use client';
import { useEffect, useRef, useState } from 'react';
import { Syne, DM_Sans } from 'next/font/google';
import { CheckCircle } from 'lucide-react';
import { TextRollInView } from '@/components/ui/text-roll-inview';

const syne = Syne({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500'] });

const cards = [
  {
    title: '14 Days',
    number: 14,
    suffix: ' Days',
    label: 'Average time from first call to live site',
    image: '/images/time_management.png',
  },
  {
    title: '100%',
    number: 100,
    suffix: '%',
    label: 'Fully managed — deployment, maintenance, and updates.',
    image: '/images/ownership.png',
  },
  {
    title: '0 Templates',
    number: 0,
    suffix: '',
    label: 'Templates used. Every site built from scratch.',
    image: '/images/creative.png',
  },
  {
    title: '24 hrs',
    number: 24,
    suffix: ' hrs',
    label: 'Response time on every project, guaranteed.',
    image: '/images/responsive.png',
  },
];

function AnimatedStat({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          if (value === 0) {
            setCount(0);
            return;
          }
          const duration = 1500;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

function Marquee() {
  const items = [
    'CUSTOM BUILT',
    'FAST DELIVERY',
    'FULLY MANAGED',
    'NO LOCK-IN',
    'BC BASED',
    '24HR RESPONSE',
    'NO TEMPLATES',
    '2 WEEK TURNAROUND',
    'WE HANDLE EVERYTHING',
    'ZERO SETUP FEES',
  ];

  const repeated = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-6 mt-12" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div
        className="flex whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
          width: 'max-content',
        }}
      >
        {repeated.map((item, index) => (
          <div key={index} className="flex items-center">
            <span
              className="text-xs font-mono tracking-widest px-6"
              style={{ color: 'rgba(255,255,255,0.6)' }}
            >
              {item}
            </span>
            <span style={{ color: '#0066FF', fontSize: '10px' }}>·</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section
      id="stats"
      className={`${dmSans.className} relative w-full pt-16 pb-8 lg:pb-32 px-4 sm:px-6`}
      style={{
        backgroundImage: 'url(/images/stats-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, transparent 25%, transparent 75%, #000000 100%)'
        }}
      />
      <div className="max-w-7xl mx-auto relative z-20">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <p className="text-xs font-mono tracking-widest uppercase" style={{ color: '#0066FF' }}>
            BY THE NUMBERS
          </p>
          <h2 className={`${syne.className} text-4xl md:text-5xl font-bold`} style={{ color: '#ffffff' }}>
            <TextRollInView>Fast. Clean. Yours.</TextRollInView>
          </h2>
          <p className="text-base max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
            No templates. No waiting. Every site built to your business.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-xl p-5 sm:p-6 border bg-black border-white/[0.2] flex flex-col gap-2"
            >
              <div className="flex justify-between items-start w-full">
                <span className={`${syne.className} text-4xl font-bold text-white`}>
                  <AnimatedStat value={card.number} suffix={card.suffix} />
                </span>
                <CheckCircle size={16} style={{ color: '#0066FF' }} className="mt-1 flex-shrink-0" />
              </div>
              <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {card.label}
              </p>
              <img
                src={card.image}
                alt=""
                className="hidden lg:block w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <Marquee />
      </div>
    </section>
  );
}
