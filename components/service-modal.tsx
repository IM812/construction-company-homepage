"use client"

import { useEffect, useCallback, useState } from "react"
import { X, ArrowRight, Clock, FileCheck, Building, HelpCircle, AlertTriangle } from "lucide-react"
import Link from "next/link"
import type { ServiceData } from "@/lib/services-data"

interface ServiceModalProps {
  service: ServiceData | null
  onClose: () => void
}

type Tab = "scope" | "objects" | "faq"

const TABS: { id: Tab; label: string; icon: React.ElementType }[] = [
  { id: "scope",   label: "Что входит",    icon: FileCheck  },
  { id: "objects", label: "Типовые объекты", icon: Building  },
  { id: "faq",     label: "Вопросы",        icon: HelpCircle },
]

export function ServiceModal({ service, onClose }: ServiceModalProps) {
  const [activeTab, setActiveTab] = useState<Tab>("scope")

  const handleEsc = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose() },
    [onClose]
  )

  useEffect(() => {
    if (!service) return
    setActiveTab("scope")
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
        className="absolute inset-0 bg-black/75 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="relative w-full max-w-3xl max-h-[92vh] flex flex-col bg-[var(--navy-card)] border border-[var(--divider)] shadow-2xl">

        {/* Header */}
        <div className="shrink-0 border-b border-[var(--divider)] px-8 pt-7 pb-0">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-[var(--blue-brand)] flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={20} className="text-white" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[var(--blue-brand)] text-[11px] font-semibold uppercase tracking-[0.28em] mb-1">
                  {service.tag}
                </p>
                <h2
                  id="service-modal-title"
                  className="text-[var(--text-primary)] font-black text-2xl leading-tight"
                >
                  {service.title}
                </h2>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mt-1 max-w-xl">
                  {service.modalSubtitle}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="shrink-0 w-9 h-9 flex items-center justify-center border border-[var(--divider)] hover:border-[var(--blue-brand)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors duration-150 cursor-pointer"
              aria-label="Закрыть"
            >
              <X size={16} />
            </button>
          </div>

          {/* Timeline pill */}
          <div className="flex items-start gap-3 mb-5 bg-[var(--navy-elevated)] border border-[var(--divider)] px-4 py-3">
            <Clock size={14} className="text-[var(--blue-brand)] mt-0.5 shrink-0" aria-hidden="true" />
            <div>
              <p className="text-[var(--blue-brand)] text-[10px] font-semibold uppercase tracking-widest mb-0.5">Сроки</p>
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{service.timeline}</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-0 -mb-px">
            {TABS.map(({ id, label, icon: TabIcon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-colors duration-150 cursor-pointer ${
                  activeTab === id
                    ? "border-[var(--blue-brand)] text-[var(--text-primary)]"
                    : "border-transparent text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <TabIcon size={13} aria-hidden="true" />
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="flex-1 overflow-y-auto px-8 py-7 space-y-5">

          {/* TAB: Что входит */}
          {activeTab === "scope" && (
            <div className="space-y-5">
              <ul className="space-y-2">
                {service.contractScope.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 py-3 border-b border-[var(--divider)] last:border-b-0">
                    <span
                      className="text-[var(--blue-brand)] font-black text-[10px] w-6 h-6 border border-[var(--blue-brand)]/40 flex items-center justify-center shrink-0 mt-0.5"
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[var(--text-primary)] text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Why it matters */}
              <div className="flex items-start gap-3 bg-[var(--navy-elevated)] border-l-2 border-[var(--blue-brand)] px-5 py-4 mt-4">
                <AlertTriangle size={15} className="text-[var(--blue-brand)] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-[var(--blue-brand)] text-[10px] font-semibold uppercase tracking-widest mb-1">Почему это важно</p>
                  <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{service.whyMatters}</p>
                </div>
              </div>

              {/* Result */}
              <div className="bg-[var(--navy-elevated)] border border-[var(--divider)] px-5 py-4">
                <p className="text-[var(--text-secondary)] text-[10px] font-semibold uppercase tracking-widest mb-1">Результат</p>
                <p className="text-[var(--text-primary)] text-sm leading-relaxed">{service.result}</p>
              </div>
            </div>
          )}

          {/* TAB: Типовые объекты */}
          {activeTab === "objects" && (
            <div className="space-y-2">
              {service.typicalObjects.map((obj, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 px-5 py-4 border border-[var(--divider)] hover:border-[var(--blue-brand)]/40 hover:bg-[var(--navy-elevated)] transition-colors duration-150"
                >
                  <span className="text-[var(--blue-brand)] font-black text-xs w-7 h-7 border border-[var(--blue-brand)]/30 flex items-center justify-center shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[var(--text-primary)] text-sm">{obj}</span>
                </div>
              ))}
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed pt-3 border-t border-[var(--divider)]">
                Не нашли свой объект в списке? Опишите задачу — оценим возможность и сроки в течение одного рабочего дня.
              </p>
            </div>
          )}

          {/* TAB: FAQ */}
          {activeTab === "faq" && (
            <div className="space-y-4">
              {service.faq.map((item, i) => (
                <div key={i} className="border border-[var(--divider)] overflow-hidden">
                  <div className="flex items-start gap-3 px-5 py-4 bg-[var(--navy-elevated)]">
                    <span className="text-[var(--blue-brand)] font-black text-[10px] w-5 h-5 border border-[var(--blue-brand)]/40 flex items-center justify-center shrink-0 mt-0.5">
                      Q
                    </span>
                    <p className="text-[var(--text-primary)] font-semibold text-sm leading-snug">{item.question}</p>
                  </div>
                  <div className="flex items-start gap-3 px-5 py-4">
                    <span className="text-[var(--text-secondary)] font-black text-[10px] w-5 h-5 border border-[var(--divider)] flex items-center justify-center shrink-0 mt-0.5">
                      A
                    </span>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="shrink-0 border-t border-[var(--divider)] px-8 py-5 flex flex-col sm:flex-row gap-3 bg-[var(--navy-card)]">
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
