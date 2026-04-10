"use client"

import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"

interface SiteHeaderProps {
  onOpenModal: () => void
}

const NAV_LINKS = [
  { label: "Услуги",         href: "#services" },
  { label: "Проектирование", href: "/proektirovanie" },
  { label: "Преимущества",   href: "#advantages" },
  { label: "Процесс",        href: "#process" },
  { label: "Кейсы",          href: "#cases" },
  { label: "Контакты",       href: "#contacts" },
]

const PHONES = [
  { label: "+7 (495) 123-45-67", href: "tel:+74951234567", sublabel: "Офис, Москва" },
  { label: "+7 (916) 123-45-67", href: "tel:+79161234567", sublabel: "Отдел продаж" },
]

export function SiteHeader({ onOpenModal }: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "var(--navy-deep)" }}>
      {/* Top accent line */}
      <div className="h-0.5 w-full" style={{ background: "var(--blue-brand)" }} />

      <div
        className="border-b"
        style={{ borderColor: "var(--divider)" }}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
          <div className="flex items-center h-[72px] gap-8">

            {/* ── LEFT: Logo ── */}
            <a
              href="/"
              aria-label="СтройГенПодряд — на главную"
              className="flex items-center gap-3 shrink-0 group"
            >
              {/* Logo mark */}
              <div
                className="relative w-11 h-11 shrink-0 flex items-center justify-center"
                style={{ background: "var(--blue-brand)" }}
              >
                <svg
                  viewBox="0 0 44 44"
                  fill="none"
                  aria-hidden="true"
                  className="w-7 h-7"
                >
                  {/* Building silhouette */}
                  <rect x="6" y="14" width="32" height="22" fill="white" opacity="0.15" />
                  <rect x="10" y="18" width="5" height="5" fill="white" />
                  <rect x="19" y="18" width="5" height="5" fill="white" />
                  <rect x="28" y="18" width="5" height="5" fill="white" />
                  <rect x="10" y="27" width="5" height="5" fill="white" />
                  <rect x="19" y="27" width="5" height="5" fill="white" />
                  <rect x="28" y="27" width="5" height="5" fill="white" />
                  <rect x="17" y="32" width="9" height="4" fill="white" />
                  {/* Roof line */}
                  <path d="M4 14L22 4L40 14" stroke="white" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Company name */}
              <div className="flex flex-col">
                <span
                  className="font-black text-[17px] leading-none tracking-tight uppercase"
                  style={{ color: "var(--text-primary)" }}
                >
                  СтройГенПодряд
                </span>
                <span
                  className="text-[10px] leading-none mt-1 tracking-[0.18em] uppercase font-medium"
                  style={{ color: "var(--blue-brand)" }}
                >
                  Генеральный подрядчик
                </span>
              </div>
            </a>

            {/* ── CENTER: Navigation ── */}
            <nav
              aria-label="Основная навигация"
              className="hidden lg:flex items-center justify-center flex-1 gap-1"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-150 group/nav"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {link.label}
                  {/* Underline accent */}
                  <span
                    className="absolute bottom-0 left-3 right-3 h-px scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-200 origin-left"
                    style={{ background: "var(--blue-brand)" }}
                  />
                </a>
              ))}
            </nav>

            {/* ── RIGHT: Phones + CTA ── */}
            <div className="hidden md:flex items-center gap-6 shrink-0">
              {/* Phones */}
              <div
                className="flex flex-col gap-2 pr-6 border-r"
                style={{ borderColor: "var(--divider)" }}
              >
                {PHONES.map((phone) => (
                  <a
                    key={phone.href}
                    href={phone.href}
                    className="flex flex-col transition-colors duration-150 group/phone"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--blue-brand)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--text-primary)")}
                  >
                    <span className="flex items-center gap-1.5 font-bold text-[14px] leading-none tracking-tight">
                      <Phone
                        size={12}
                        className="shrink-0"
                        style={{ color: "var(--blue-brand)" }}
                        aria-hidden="true"
                      />
                      {phone.label}
                    </span>
                    <span
                      className="text-[10px] leading-none mt-0.5 ml-[18px] tracking-wide"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {phone.sublabel}
                    </span>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenModal}
                className="flex items-center h-10 px-5 font-bold text-[13px] uppercase tracking-[0.08em] transition-colors duration-200 cursor-pointer whitespace-nowrap"
                style={{
                  background: "var(--blue-brand)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--blue-hover)")}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--blue-brand)")}
              >
                Оставить заявку
              </button>
            </div>

            {/* ── MOBILE: Burger ── */}
            <button
              className="lg:hidden ml-auto p-2 transition-colors duration-150"
              style={{ color: "var(--text-primary)" }}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div
          className="lg:hidden border-b"
          style={{
            background: "var(--navy-card)",
            borderColor: "var(--divider)",
          }}
        >
          <div className="max-w-[1440px] mx-auto px-6 py-6 flex flex-col gap-1">
            <nav aria-label="Мобильная навигация" className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-3 px-2 text-sm font-semibold uppercase tracking-widest border-b transition-colors duration-150"
                  style={{
                    color: "var(--text-secondary)",
                    borderColor: "var(--divider)",
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-3 pt-5">
              {PHONES.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="flex items-center gap-2 font-bold text-base"
                  style={{ color: "var(--text-primary)" }}
                >
                  <Phone size={14} style={{ color: "var(--blue-brand)" }} aria-hidden="true" />
                  {phone.label}
                </a>
              ))}
              <button
                onClick={() => { setMobileOpen(false); onOpenModal() }}
                className="mt-2 h-12 font-bold text-sm uppercase tracking-widest cursor-pointer transition-colors duration-200"
                style={{
                  background: "var(--blue-brand)",
                  color: "var(--text-primary)",
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--blue-hover)")}
                onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = "var(--blue-brand)")}
              >
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
