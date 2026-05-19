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

        // Show after 200px scroll
        if (currentY > 200) {
          setVisible(true)
        } else {
          setVisible(false)
        }

        // Hide when near bottom (within 400px of footer)
        const nearBottom =
          currentY + window.innerHeight > document.body.scrollHeight - 400
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
      style={{
        transform: isShown ? "translateY(0)" : "translateY(100%)",
      }}
      aria-hidden={!isShown}
    >
      {/* Safe area gradient */}
      <div
        className="grid grid-cols-2"
        style={{
          background: "var(--navy-deep)",
          borderTop: "1px solid var(--divider)",
          paddingBottom: "env(safe-area-inset-bottom, 0px)",
        }}
      >
        {/* Call button */}
        <a
          href="tel:+79299857900"
          className="flex items-center justify-center gap-2.5 py-4 font-bold text-sm uppercase tracking-wider transition-colors duration-200"
          style={{
            background: "var(--navy-elevated)",
            color: "var(--text-primary)",
            borderRight: "1px solid var(--divider)",
          }}
          tabIndex={isShown ? 0 : -1}
          aria-label="Позвонить в отдел продаж"
        >
          <Phone size={16} style={{ color: "var(--blue-brand)" }} aria-hidden="true" />
          Позвонить
        </a>

        {/* Request button */}
        <button
          onClick={onOpenModal}
          className="flex items-center justify-center gap-2.5 py-4 font-bold text-sm uppercase tracking-wider transition-colors duration-200 cursor-pointer"
          style={{
            background: "var(--blue-brand)",
            color: "white",
          }}
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
