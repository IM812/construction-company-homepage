"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FaqItem {
  question: string
  answer: string
}

interface ServiceFaqProps {
  faq: FaqItem[]
}

export function ServiceFaq({ faq }: ServiceFaqProps) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="max-w-3xl flex flex-col gap-px bg-[var(--divider)]">
      {faq.map((item, i) => (
        <div key={i} className="bg-[var(--navy-deep)]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-start justify-between gap-6 p-7 text-left cursor-pointer"
            aria-expanded={open === i}
          >
            <span className="text-[var(--text-primary)] font-bold text-base leading-snug">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className="text-[var(--blue-brand)] shrink-0 mt-0.5 transition-transform duration-200"
              style={{ transform: open === i ? "rotate(180deg)" : "rotate(0deg)" }}
              aria-hidden="true"
            />
          </button>
          {open === i && (
            <div className="px-7 pb-7">
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed border-t border-[var(--divider)] pt-5">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
