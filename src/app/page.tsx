import { HeroHeader } from '@/components/blocks/nav'
import { HeroGeometric } from '@/components/ui/shape-landing-hero'
import { ProcessSection } from '@/components/blocks/process-section'
import { StatsSection } from '@/components/blocks/stats-section'
import { ServicesSection } from '@/components/blocks/services-section'
import { ContactSection } from '@/components/blocks/contact-section'

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroHeader />
      <HeroGeometric />
      <ProcessSection />
      <StatsSection />
      <ServicesSection />
      <ContactSection />
    </main>
  )
}
