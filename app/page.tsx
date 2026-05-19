import { SiteLayout } from "@/components/site-layout"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ClientValueSection } from "@/components/client-value-section"
import { ProcessSection } from "@/components/process-section"
import { TrustSection } from "@/components/trust-section"
import { CasesSection } from "@/components/cases-section"
import { QuizSection } from "@/components/quiz-section"
import { FormSection } from "@/components/form-section"
import { ContactsSection } from "@/components/contacts-section"

export default function HomePage() {
  return (
    <SiteLayout>
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <ClientValueSection />
      <ProcessSection />
      <TrustSection />
      <CasesSection />
      <QuizSection />
      <FormSection />
      <ContactsSection />
    </SiteLayout>
  )
}
