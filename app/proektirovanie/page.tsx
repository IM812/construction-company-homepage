"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { DesignHero } from "@/components/design/design-hero"
import { DesignStages } from "@/components/design/design-stages"
import { DesignCycle } from "@/components/design/design-cycle"
import { DesignCta } from "@/components/design/design-cta"
import { ContactsSection } from "@/components/contacts-section"
import { RequestModal } from "@/components/request-modal"

export default function ProektirovaniyePage() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SiteHeader onOpenModal={() => setModalOpen(true)} />

      <main>
        <DesignHero onOpenModal={() => setModalOpen(true)} />
        <DesignStages />
        <DesignCycle />
        <DesignCta onOpenModal={() => setModalOpen(true)} />
        <ContactsSection />
      </main>

      <RequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
