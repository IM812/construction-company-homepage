"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProcessSection } from "@/components/process-section"
import { CasesSection } from "@/components/cases-section"
import { FormSection } from "@/components/form-section"
import { ContactsSection } from "@/components/contacts-section"
import { RequestModal } from "@/components/request-modal"

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SiteHeader onOpenModal={() => setModalOpen(true)} />

      <main>
        <HeroSection onOpenModal={() => setModalOpen(true)} />
        <ServicesSection />
        <AdvantagesSection />
        <ProcessSection />
        <CasesSection />
        <FormSection />
        <ContactsSection />
      </main>

      <RequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
