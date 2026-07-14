"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"

const STORAGE_KEY = "sgp_cookie_consent"

type ConsentState = "accepted" | "declined" | null

export function CookieBanner() {
  const [consent, setConsent] = useState<ConsentState | "loading">("loading")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    setConsent((stored as ConsentState) ?? null)
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted")
    setConsent("accepted")
  }

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, "declined")
    setConsent("declined")
  }

  // Don't render until we've checked localStorage, and don't show once decided
  if (consent !== null) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Уведомление о файлах cookie"
      className="fixed bottom-0 left-0 right-0 z-[300] bg-[#0f1c3a] border-t border-white/10 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm leading-relaxed">
            Мы используем файлы cookie для корректной работы сайта, аналитики и улучшения пользовательского опыта.
            Продолжая использовать сайт, вы соглашаетесь с нашей{" "}
            <Link
              href="/privacy"
              className="text-[#5b9af4] underline underline-offset-2 hover:text-white transition-colors"
            >
              политикой конфиденциальности
            </Link>
            .
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="text-white/50 hover:text-white text-sm font-medium transition-colors px-3 py-2 cursor-pointer"
          >
            Отклонить
          </button>
          <button
            onClick={handleAccept}
            className="bg-[#1a5fd4] hover:bg-[#1450b8] text-white text-sm font-bold px-5 py-2.5 uppercase tracking-wider transition-colors cursor-pointer"
          >
            Принять
          </button>
          <button
            onClick={handleDecline}
            className="text-white/40 hover:text-white transition-colors p-1.5 cursor-pointer"
            aria-label="Закрыть"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
