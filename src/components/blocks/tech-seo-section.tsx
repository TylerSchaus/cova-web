import { Zap, MapPin, Code2, BarChart3, LucideIcon } from 'lucide-react';
import { Syne, DM_Sans } from 'next/font/google';
import { BGPattern } from '@/components/ui/bg-pattern';
import { TextRollInView } from '@/components/ui/text-roll-inview';

const syne = Syne({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500'] });

interface Pillar {
  icon: LucideIcon;
  headline: string;
  body: string;
}

const pillars: Pillar[] = [
  {
    icon: Zap,
    headline: 'Fast by Default',
    body: 'Your site is rendered on the server before it reaches the browser, meaning Google sees your full content instantly. No slow load times, no invisible text — just clean, crawlable pages that check every Core Web Vital out of the box.',
  },
  {
    icon: MapPin,
    headline: 'Built for Local Search',
    body: 'We embed structured data so Google understands your business location, services, and hours automatically. Combined with location-aware page structure, your site is designed to surface in "near me" searches and align with your Google Business Profile.',
  },
  {
    icon: Code2,
    headline: 'Technically Sound',
    body: 'Semantic HTML, auto-generated sitemaps, canonical tags, and Open Graph metadata — the infrastructure Google expects, built in from day one. Images are automatically converted to WebP and lazy-loaded so nothing slows your site down.',
  },
  {
    icon: BarChart3,
    headline: 'Results You Can See',
    body: 'Every site includes Google Search Console integration and targets a 90+ Lighthouse score at launch. You get real data on where your traffic comes from, what\'s ranking, and what\'s working — not vanity metrics.',
  },
];

const outcomes = [
  { value: '90+', label: 'Lighthouse Score at Launch' },
  { value: 'JSON-LD', label: 'Schema Markup on Every Page' },
  { value: 'GSC', label: 'Search Console Wired In at Launch' },
];

export function TechSeoSection() {
  return (
    <section
      id="tech-seo"
      className={`${dmSans.className} relative w-full py-8 px-6`}
      style={{ backgroundColor: '#030303' }}
    >
      <BGPattern variant="grid" mask="fade-y" fill="#2a2a2a" size={32} className="z-0 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <p className="text-xs font-mono tracking-widest uppercase" style={{ color: '#0066FF' }}>
            UNDER THE HOOD
          </p>
          <h2 className={`${syne.className} text-4xl md:text-5xl font-bold text-white`}>
            <TextRollInView>Built to Be Found</TextRollInView>
          </h2>
          <p className="text-base max-w-xl" style={{ color: 'rgba(255,255,255,0.5)' }}>
            Every site we build is engineered from the ground up to rank on Google, load fast, and drive real leads — not just look good.
          </p>
        </div>

        {/* Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: Icon, headline, body }) => (
            <div
              key={headline}
              className="relative flex flex-col gap-4 rounded-xl p-6 bg-black border border-white/10 overflow-hidden"
            >
              {/* Blue top-edge accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px]"
                style={{ background: 'linear-gradient(to right, #0066FF, #0551ef, #054bec)' }}
              />

              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg"
                style={{ backgroundColor: 'rgba(5, 75, 236, 0.15)' }}
              >
                <Icon size={20} style={{ color: '#0066FF' }} />
              </div>

              <h3 className={`${syne.className} text-lg font-bold text-white`}>
                {headline}
              </h3>

              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Outcome Bar */}
        <div
          className="mt-10 rounded-xl border border-white/10 bg-black px-6 py-6 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10"
        >
          {outcomes.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center gap-1 py-4 sm:py-0">
              <span
                className={`${syne.className} text-2xl font-bold`}
                style={{ background: 'linear-gradient(to right, #0066FF, #054bec)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              >
                {value}
              </span>
              <span className="text-xs font-mono tracking-wide text-center" style={{ color: 'rgba(255,255,255,0.4)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
