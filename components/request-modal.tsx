"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { ContactForm } from "./contact-form"

interface RequestModalProps {
  open: boolean
  onClose: () => void
}

export function RequestModal({ open, onClose }: RequestModalProps) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (open) {
      document.addEventListener("keydown", handler)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", handler)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Форма заявки"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative bg-[var(--navy-card)] border border-[var(--divider)] w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--divider)]">
          <div>
            <h2 className="text-[var(--text-primary)] font-black text-xl">
              Оставить заявку
            </h2>
            <p className="text-[var(--text-secondary)] text-sm mt-0.5">
              Перезвоним в течение 30 минут
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-2 cursor-pointer"
            aria-label="Закрыть форму"
          >
            <X size={22} />
          </button>
        </div>

        <div className="p-6">
          <ContactForm compact onSuccess={onClose} />
        </div>
      </div>
    </div>
  )
}
