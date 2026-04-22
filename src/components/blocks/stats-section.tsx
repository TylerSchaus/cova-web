'use client';
import { useEffect, useRef, useState } from 'react';
import { Syne, DM_Sans } from 'next/font/google';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';
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
    label: 'Fully managed - deployment, maintenance, and updates.',
    image: '/images/ownership.png',
  },
  {
    title: '0 Templates',
    number: 0,
    suffix: '',
    label: 'Templates used. Every site built from scratch',
    image: '/images/creative.png',
  },
  {
    title: '24 hrs',
    number: 24,
    suffix: ' hrs',
    label: 'Response time on every project, guaranteed',
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
      className={`${dmSans.className} relative w-full pt-16 pb-32 px-6`}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch auto-rows-fr">
          {cards.map((card, index) => (
            <CardContainer key={index} containerClassName="py-0 w-full h-full" className="w-full h-full">
              <CardBody className="relative w-full h-full rounded-xl p-6 border bg-black border-white/[0.2] hover:shadow-2xl hover:shadow-black/[0.1] flex flex-col">
                <div className="flex justify-between items-center w-full">
                  <CardItem
                    translateZ="50"
                    className={`${syne.className} text-3xl lg:text-4xl font-bold`}
                    style={{ color: '#ffffff' }}
                  >
                    <AnimatedStat value={card.number} suffix={card.suffix} />
                  </CardItem>
                  <CheckCircle size={16} style={{ color: '#0066FF' }} />
                </div>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-sm max-w-sm mt-2"
                  style={{ color: 'rgba(255,255,255,0.5)' }}
                >
                  {card.label}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-auto">
                  <img
                    src={card.image}
                    height="200"
                    width="200"
                    className="h-52 w-full object-contain rounded-xl"
                    alt={card.title}
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
        <Marquee />
      </div>
    </section>
  );
}
