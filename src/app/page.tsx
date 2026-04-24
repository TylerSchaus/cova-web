import { HeroHeader } from '@/components/blocks/nav'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { ProcessSection } from '@/components/blocks/process-section'
import { StatsSection } from '@/components/blocks/stats-section'
import { TechSeoSection } from '@/components/blocks/tech-seo-section'
import { ServicesSection } from '@/components/blocks/services-section'
import { ContactSection } from '@/components/blocks/contact-section'
import { Footer } from '@/components/blocks/footer'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroHeader />
      <HeroGeometric />
      <TechSeoSection />
      <ProcessSection />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
