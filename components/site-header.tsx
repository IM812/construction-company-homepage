"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"

interface SiteHeaderProps {
  onOpenModal: () => void
}

export function SiteHeader({ onOpenModal }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: "Услуги", href: "#services" },
    { label: "Преимущества", href: "#advantages" },
    { label: "Процесс", href: "#process" },
    { label: "Кейсы", href: "#cases" },
    { label: "Контакты", href: "#contacts" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--navy-deep)] border-b border-[var(--divider)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group" aria-label="СтройГенПодряд — на главную">
            <div className="w-10 h-10 bg-[var(--blue-brand)] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 40 40" fill="none" className="w-6 h-6" aria-hidden="true">
                <path d="M4 36L20 8L36 36H4Z" fill="white" />
                <path d="M14 36V24H26V36" fill="var(--blue-brand)" />
                <rect x="17" y="16" width="6" height="8" fill="white" />
              </svg>
            </div>
            <div>
              <span className="text-[var(--text-primary)] font-bold text-lg leading-none tracking-tight">
                СтройГенПодряд
              </span>
              <p className="text-[var(--text-secondary)] text-xs leading-none mt-0.5 tracking-widest uppercase">
                Генеральный подрядчик
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Основная навигация">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium tracking-wide transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phones + CTA */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex flex-col gap-0.5">
              <a
                href="tel:+74951234567"
                className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--blue-brand)] font-semibold text-sm transition-colors"
              >
                <Phone size={13} className="text-[var(--blue-brand)]" aria-hidden="true" />
                +7 (495) 123-45-67
              </a>
              <a
                href="tel:+79161234567"
                className="flex items-center gap-2 text-[var(--text-primary)] hover:text-[var(--blue-brand)] font-semibold text-sm transition-colors"
              >
                <Phone size={13} className="text-[var(--blue-brand)]" aria-hidden="true" />
                +7 (916) 123-45-67
              </a>
            </div>
            <button
              onClick={onOpenModal}
              className="bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-[var(--text-primary)] font-bold text-sm px-6 py-3 tracking-wide uppercase transition-colors duration-200 cursor-pointer"
            >
              Оставить заявку
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden text-[var(--text-primary)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            className="lg:hidden border-t border-[var(--divider)] py-6 flex flex-col gap-4"
            aria-label="Мобильная навигация"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-base font-medium uppercase tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-[var(--divider)]">
              <a href="tel:+74951234567" className="text-[var(--text-primary)] font-semibold">
                +7 (495) 123-45-67
              </a>
              <a href="tel:+79161234567" className="text-[var(--text-primary)] font-semibold">
                +7 (916) 123-45-67
              </a>
              <button
                onClick={() => { setMobileOpen(false); onOpenModal() }}
                className="bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-[var(--text-primary)] font-bold py-3 uppercase tracking-wide mt-2 cursor-pointer"
              >
                Оставить заявку
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
