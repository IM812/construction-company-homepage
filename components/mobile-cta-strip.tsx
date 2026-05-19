"use client"

import { useEffect, useState, useRef } from "react"
import { Phone, MessageSquare } from "lucide-react"

interface MobileCtaStripProps {
  onOpenModal: () => void
}

export function MobileCtaStrip({ onOpenModal }: MobileCtaStripProps) {
  const [visible, setVisible] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastScrollY = useRef(0)
  const ticking = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const currentY = window.scrollY
        setVisible(currentY > 200)
        const nearBottom = currentY + window.innerHeight > document.body.scrollHeight - 400
        setHidden(nearBottom)
        lastScrollY.current = currentY
        ticking.current = false
      })
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isShown = visible && !hidden

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300"
      style={{ transform: isShown ? "translateY(0)" : "translateY(100%)" }}
      aria-hidden={!isShown}
    >
      <div
        className="grid grid-cols-2 border-t border-[#e2e6ef] bg-white"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        <a
          href="tel:+79299857900"
          className="flex items-center justify-center gap-2.5 py-4 font-bold text-sm uppercase tracking-wider border-r border-[#e2e6ef] text-[#0f1c3a] hover:bg-[#f7f8fa] transition-colors"
          tabIndex={isShown ? 0 : -1}
          aria-label="Позвонить в отдел продаж"
        >
          <Phone size={16} className="text-[#1a5fd4]" aria-hidden="true" />
          Позвонить
        </a>
        <button
          onClick={onOpenModal}
          className="flex items-center justify-center gap-2.5 py-4 font-bold text-sm uppercase tracking-wider bg-[#1a5fd4] hover:bg-[#1450b8] text-white transition-colors cursor-pointer"
          tabIndex={isShown ? 0 : -1}
          aria-label="Оставить заявку"
        >
          <MessageSquare size={16} aria-hidden="true" />
          Заявка
        </button>
      </div>
    </div>
  )
}
