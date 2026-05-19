"use client"

import { useEffect } from "react"
import { X } from "lucide-react"
import { ContactForm } from "./contact-form"

interface RequestModalProps {
  open: boolean
  onClose: () => void
}

export function RequestModal({ open, onClose }: RequestModalProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Форма заявки">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      {/* Modal */}
      <div className="relative bg-white border border-[#e2e6ef] shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e2e6ef]">
          <div>
            <h2 className="text-[#0f1c3a] font-black text-xl">Оставить заявку</h2>
            <p className="text-[#5a6880] text-sm mt-0.5">Перезвоним в течение 30 минут</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#5a6880] hover:text-[#0f1c3a] transition-colors p-2 cursor-pointer rounded hover:bg-[#f7f8fa]"
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
