"use client"

import { useState, ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { RequestModal } from "@/components/request-modal"
import { MobileCtaStrip } from "@/components/mobile-cta-strip"

interface SiteLayoutProps {
  children: ReactNode
}

export function SiteLayout({ children }: SiteLayoutProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <SiteHeader onOpenModal={() => setModalOpen(true)} />
      <main>{children}</main>
      <MobileCtaStrip onOpenModal={() => setModalOpen(true)} />
      <RequestModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
