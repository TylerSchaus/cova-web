'use client';
import { Syne, DM_Sans } from 'next/font/google';
import { BentoPricing } from '@/components/ui/bento-pricing';
import { TextRollInView } from '@/components/ui/text-roll-inview';
import { FloatingPathsBackground } from '@/components/ui/background-paths';

const syne = Syne({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500'] });

export function ServicesSection() {
  return (
    <section
      className={`${dmSans.className} relative w-full pt-8 pb-24 px-6`}
      style={{ backgroundColor: '#030303' }}
    >
      <FloatingPathsBackground opacity={0.3} />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-start text-left mb-12 gap-4">
          <p className="text-xs font-mono tracking-widest uppercase" style={{ color: '#0066FF' }}>
            WHAT WE BUILD
          </p>
          <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}>
            <TextRollInView>Services & Pricing.</TextRollInView>
          </h2>
          <p className="text-base max-w-md" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Web development is our entry point. Automation is where we take you next.
          </p>
        </div>
        <BentoPricing />
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #030303)'
        }}
      />
    </section>
  );
}
