import { SiteLayout } from "@/components/site-layout"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProcessSection } from "@/components/process-section"
import { CasesSection } from "@/components/cases-section"
import { FormSection } from "@/components/form-section"
import { ContactsSection } from "@/components/contacts-section"

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <ProcessSection />
      <CasesSection />
      <FormSection />
      <ContactsSection />
    </SiteLayout>
  )
}
