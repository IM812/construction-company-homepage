"use client"

import { useEffect, useCallback } from "react"
import { X, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import type { ServiceData } from "@/lib/services-data"

interface ServiceModalProps {
  service: ServiceData | null
  onClose: () => void
}

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!service) return
    document.addEventListener("keydown", handleEsc)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = ""
    }
  }, [service, handleEsc])

  if (!service) return null

  const Icon = service.icon

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[var(--navy-card)] border border-[var(--divider)] shadow-2xl flex flex-col">

        {/* Header */}
        <div className="sticky top-0 z-10 bg-[var(--navy-card)] border-b border-[var(--divider)] px-8 py-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[var(--blue-brand)] flex items-center justify-center shrink-0">
              <Icon size={22} className="text-white" aria-hidden="true" />
            </div>
            <div>
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.25em] mb-0.5">
                {service.tag}
              </p>
              <h2
                id="service-modal-title"
                className="text-[var(--text-primary)] font-black text-2xl leading-tight"
              >
                {service.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-10 h-10 flex items-center justify-center border border-[var(--divider)] hover:border-[var(--blue-brand)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150 cursor-pointer"
            aria-label="Закрыть"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="px-8 py-8 space-y-10">

          {/* Intro */}
          <div>
            <p className="text-[var(--text-primary)] text-base leading-relaxed">
              {service.intro}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-[var(--text-primary)] font-bold text-xs uppercase tracking-[0.25em] mb-6 flex items-center gap-3">
              <span className="flex-1 h-px bg-[var(--divider)]" aria-hidden="true" />
              Состав работ
              <span className="flex-1 h-px bg-[var(--divider)]" aria-hidden="true" />
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {service.features.map((feature, i) => (
                <div
                  key={feature.title}
                  className="bg-[var(--navy-elevated)] border border-[var(--divider)] p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[var(--blue-brand)] font-black text-xs w-6 h-6 border border-[var(--blue-brand)]/30 flex items-center justify-center shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h4 className="text-[var(--text-primary)] font-bold text-sm">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-[var(--text-secondary)] text-xs leading-relaxed pl-8">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Result */}
          <div className="bg-[var(--navy-elevated)] border-l-2 border-[var(--blue-brand)] px-6 py-5">
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest mb-2">
              Результат
            </p>
            <p className="text-[var(--text-primary)] text-sm leading-relaxed flex items-start gap-3">
              <CheckCircle2 size={16} className="text-[var(--blue-brand)] shrink-0 mt-0.5" aria-hidden="true" />
              {service.result}
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="sticky bottom-0 bg-[var(--navy-card)] border-t border-[var(--divider)] px-8 py-5 flex flex-col sm:flex-row gap-3">
          <Link
            href="/contacts"
            onClick={onClose}
            className="flex-1 bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-6 py-3.5 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2"
          >
            Получить расчёт стоимости
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
          <button
            onClick={onClose}
            className="sm:w-auto border border-[var(--divider)] hover:border-[var(--blue-brand)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-bold text-sm px-6 py-3.5 uppercase tracking-wider transition-colors duration-200 cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  )
}
