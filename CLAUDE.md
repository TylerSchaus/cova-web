# CLAUDE.md — Cova Solutions Website

## Project Overview

**Client:** Cova Solutions  
**Type:** Marketing/agency website (single-page, section-based)  
**Purpose:** Convert founder-led trade & field service businesses (landscaping, HVAC, auto, etc.) into digital-first clients. Website is the entry product; automation is the upsell.  
**Stack:** Next.js (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, tw-animate-css

---

## Architecture

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Single page — all sections assembled here
│   ├── globals.css         # Tailwind v4 config, CSS tokens, dark theme
│   └── api/contact/        # Contact form API route
├── components/
│   ├── blocks/             # Full page sections (one file per section)
│   │   ├── nav.tsx
│   │   ├── hero (shape-landing-hero.tsx in ui/)
│   │   ├── process-section.tsx
│   │   ├── stats-section.tsx
│   │   ├── services-section.tsx
│   │   ├── contact-section.tsx
│   │   └── footer.tsx
│   └── ui/                 # Reusable UI primitives and animated components
└── lib/
    └── utils.ts            # cn() and shared utilities
```

**Page section order (top → bottom):**
1. Nav (`nav.tsx`)
2. Hero (`shape-landing-hero.tsx`)
3. Process (`process-section.tsx`)
4. Stats (`stats-section.tsx`)
5. **Tech/SEO section** ← NEW (to be added between stats and services)
6. Services/Pricing (`services-section.tsx`, `bento-pricing.tsx`)
7. Contact/CTA (`contact-section.tsx`)
8. Footer (`footer.tsx`)

---

## Design System

### Colors
- **Background:** `#030303` (near-black, set on `html, body`)
- **Primary accent:** `#054bec` (brand blue)
- **Gradient pattern:** `from-[#0066FF] via-[#0551ef] to-[#054bec]`
- **Text:** oklch white scale via CSS tokens (`--foreground`, `--muted-foreground`)
- **Borders:** `oklch(1 0 0 / 10%)` — low-opacity white

### Tailwind Usage
- Tailwind v4 (`@import "tailwindcss"`) — no `tailwind.config.js`, config lives in `globals.css`
- Use `@theme inline` token references (e.g. `text-foreground`, `bg-background`, `border-border`)
- Use standard Tailwind utilities; avoid arbitrary values unless necessary
- oklch color tokens are defined in `:root` and `.dark` — the site is **always dark**

### Typography
- Font variables: `--font-sans` (heading + body), `--font-geist-mono` (mono)
- Applied via `@theme inline` → `font-sans` and `font-mono` Tailwind classes

### Component Conventions
- shadcn/ui primitives live in `src/components/ui/` (button, card, badge, input, etc.)
- Animated/custom UI also in `src/components/ui/` (neon-button, shiny-border, text-effect, etc.)
- Section-level blocks live in `src/components/blocks/`
- Use `cn()` from `src/lib/utils.ts` for conditional class merging

---

## Coding Conventions

- **TypeScript strictly** — no `any`, define prop interfaces explicitly
- **No CMS** — all content is hardcoded in component files
- **No `use client` by default** — prefer React Server Components; add `"use client"` only when interactivity or hooks require it
- **Named exports** for all components (`export function HeroSection()`, not default)
- **File naming:** kebab-case for files, PascalCase for component names
- Keep section components self-contained — data/content lives inside the component file unless shared

---

## Behaviour & Autonomy

**Mode: Medium autonomy**

Before implementing any change:
1. **Propose** the approach — what you'll change, what files are affected, and why
2. **Wait for confirmation** before writing code
3. Then implement fully and cleanly

Exception: if a task is purely additive (new file, no edits to existing files), you may implement directly and summarize what was done.

---

## Known Constraints

- Site is **single-page** — all sections render in `src/app/page.tsx`
- No routing beyond the root page and `/api/contact`
- Mobile compatibility is a known weak point — prioritize responsive design in all new and edited components
- All new sections must be added to `page.tsx` in the correct order (see section order above)

---

## Mobile-First Reminders

- Default to **mobile-first** Tailwind breakpoints (`sm:`, `md:`, `lg:`)
- Grid layouts: `grid-cols-1` on mobile, scale up at `md:` or `lg:`
- Text sizes: start conservative on mobile (`text-2xl`), scale with `md:text-4xl` etc.
- Avoid fixed widths; prefer `w-full` + `max-w-*` with `mx-auto`
- Touch targets minimum `44px` height
- Test mental model: assume 375px viewport first, then scale up

---

## New Section Brief: Tech & SEO

**File to create:** `src/components/blocks/tech-seo-section.tsx`  
**Insert in `page.tsx`:** After `<StatsSection />`, before `<ServicesSection />`

**Content pillars:**
1. **Next.js + SSR** — server-rendered HTML, Core Web Vitals, ISR for dynamic content
2. **Local SEO Architecture** — JSON-LD schema markup, location page structure, GBP alignment
3. **Technical SEO Foundation** — semantic HTML, sitemap, canonical tags, Next/Image optimization, OG metadata
4. **Performance & Tracking** — Lighthouse scores, Search Console integration, measurable outcomes

**Tone:** Confident and technical, but translated for non-technical trade business owners. Lead with the outcome ("sites that rank"), back it up with the method.
