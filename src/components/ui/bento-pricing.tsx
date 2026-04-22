'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/neon-button';
import { Badge } from '@/components/ui/badge';
import { CheckIcon } from 'lucide-react';
import { Syne, DM_Sans } from 'next/font/google';

const syne = Syne({ subsets: ['latin'], weight: ['700'] });
const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500'] });

function AnimatedPrice({ price, suffix }: { price: string; suffix?: string }) {
  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={price}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <span className={`${syne.className} text-white font-mono text-4xl font-semibold tracking-tight`}>
            {price}
          </span>
          {suffix && (
            <span className="text-white/40 text-sm mb-1 ml-1">{suffix}</span>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function FilledCheck() {
  return (
    <div className="bg-[#0066FF] text-white rounded-full p-0.5">
      <CheckIcon className="size-3" strokeWidth={3} />
    </div>
  );
}

type PricingCardProps = {
  titleBadge: string;
  priceLabel: string;
  priceSuffix?: string;
  features: string[];
  cta?: string;
  bestValue?: boolean;
  className?: string;
};

function PricingCard({
  titleBadge,
  priceLabel,
  priceSuffix = '/month',
  features,
  cta = 'Get Started',
  bestValue = false,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        'bg-black border-white/10 relative overflow-hidden rounded-md border',
        className,
      )}
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
        <div className="from-white/5 to-white/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
          <div
            aria-hidden="true"
            className="absolute inset-0 size-full mix-blend-overlay bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px]"
          />
        </div>
      </div>
      <div className="flex items-center gap-3 p-4">
        <Badge variant="outline" className="text-white/60 border-white/20 text-xs font-mono tracking-widest">
          {titleBadge}
        </Badge>
        {bestValue && (
          <Badge variant="outline" className="border-[#0066FF]/40 text-[#0066FF] text-xs">
            Best Value
          </Badge>
        )}
        <div className="ml-auto">
          <Button size="sm" className="text-white text-xs" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>{cta}</Button>
        </div>
      </div>

      <div className="px-4 py-2">
        {priceLabel.toLowerCase() === 'custom pricing' ? (
          <AnimatedPrice price={priceLabel} />
        ) : (
          <AnimatedPrice price={priceLabel} suffix={priceSuffix} />
        )}
      </div>

      <ul className="text-white/50 grid gap-4 p-4 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-3">
            <FilledCheck />
            <span>{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BentoPricing({ isUSD = false }: { isUSD?: boolean }) {
  const prices = {
    maintenance: isUSD ? 'From $110' : 'From $150',
    automation: isUSD ? '$550' : '$750',
    modulesFrom: isUSD ? 'From $185' : 'From $250',
  };

  const moduleFeatures = isUSD
    ? [
        'Missed Call Capture — $260/month',
        'Review Generation — $185/month',
        'Reactivation Campaigns — $185/month',
      ]
    : [
        'Missed Call Capture — $350/month',
        'Review Generation — $250/month',
        'Reactivation Campaigns — $250/month',
      ];

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-8">
      {/* Featured — Website Design & Build */}
      <div
        className={cn(
          'bg-black border-white/10 relative w-full overflow-hidden rounded-md border',
          'lg:col-span-5',
        )}
      >
        <div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)]">
          <div className="from-white/5 to-white/2 absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 size-full mix-blend-overlay bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-4">
          <Badge variant="outline" className="text-white/60 border-white/20 text-xs font-mono tracking-widest">
            WEB DESIGN & BUILD
          </Badge>
          <Badge variant="outline" className="hidden lg:flex border-[#0066FF]/40 text-[#0066FF] text-xs">
            Most Popular
          </Badge>
          <div className="ml-auto">
            <Button className="text-white text-sm" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Get a Quote</Button>
          </div>
        </div>

        <div className="flex flex-col p-4 lg:flex-row">
          <div className="pb-4 lg:w-[35%]">
            <AnimatedPrice price="Custom Pricing" />
          </div>
          <ul className="text-white/50 grid gap-4 text-sm lg:w-[65%]">
            {[
              'Fully custom — no templates, ever',
              'Mobile-first, fast, and built to convert',
              'Live within 2 weeks of design approval',
              'You own it. We manage it',
              'Includes one round of revisions',
            ].map((f, i) => (
              <li key={i} className="flex items-center gap-3">
                <FilledCheck />
                <span className="leading-relaxed">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Website Maintenance */}
      <PricingCard
        titleBadge="MAINTENANCE"
        priceLabel={prices.maintenance}
        priceSuffix="/month"
        features={[
          'Updates and content changes',
          'Performance monitoring',
          'Hosting management',
        ]}
        className="lg:col-span-3"
      />

      {/* Full Automation Package */}
      <PricingCard
        titleBadge="AI AUTOMATION PACKAGE"
        priceLabel={prices.automation}
        priceSuffix="/month"
        features={[
          'Missed Call Capture — 24/7 AI SMS agent',
          'Post-job review + referral sequence',
          'Reactivation campaigns — runs forever',
          'Full Airtable CRM setup',
          'Monthly check-in call included',
        ]}
        cta="Learn More"
        bestValue={true}
        className="lg:col-span-4"
      />

      {/* Individual Automation Modules */}
      <PricingCard
        titleBadge="INDIVIDUAL MODULES"
        priceLabel={prices.modulesFrom}
        priceSuffix="/month"
        features={moduleFeatures}
        cta="Learn More"
        className="lg:col-span-4"
      />
    </div>
  );
}
