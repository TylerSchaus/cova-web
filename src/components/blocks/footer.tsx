'use client';
import { Syne, DM_Sans, JetBrains_Mono } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';

const syne = Syne({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500'] });
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400'] });

export function Footer() {
  return (
    <footer
      className={`${dmSans.className} relative w-full border-t`}
      style={{
        backgroundColor: '#030303',
        borderColor: 'rgba(0,102,255,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">

        {/* Left — Logo + tagline */}
        <div className="flex items-center gap-4">
          <Image src="/logo.png" alt="Cova Systems" width={28} height={28} className="object-contain" />
          <span className={`${syne.className} text-sm font-bold tracking-widest text-white`}>
            COVA SYSTEMS
          </span>
          <span className="hidden sm:block text-white/20 text-xs">—</span>
          <span className="hidden sm:block text-white/30 text-xs" style={{ fontFamily: 'inherit' }}>
            Built for trades. Designed to convert.
          </span>
        </div>

        {/* Center — Nav links */}
        <nav className="flex items-center gap-6">
          {['Services', 'Process', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`${mono.className} text-xs tracking-widest uppercase transition-colors duration-200`}
              style={{ color: 'rgba(255,255,255,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.3)')}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right — Email + copyright */}
        <div className="flex flex-col items-end gap-1">
          <a
            href="mailto:tyler@covasolutions.com"
            className={`${mono.className} text-xs transition-colors duration-200`}
            style={{ color: '#0066FF' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#0551ef')}
            onMouseLeave={e => (e.currentTarget.style.color = '#0066FF')}
          >
            tyler@covasolutions.com
          </a>
          <span className={`${mono.className} text-xs`} style={{ color: 'rgba(255,255,255,0.2)' }}>
            © 2026 Cova Systems
          </span>
        </div>

      </div>
    </footer>
  );
}
