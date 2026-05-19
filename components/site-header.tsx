"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X } from "lucide-react"

interface SiteHeaderProps {
  onOpenModal: () => void
}

const NAV_LINKS = [
  { label: "Главная",    href: "/" },
  { label: "Услуги",     href: "/services" },
  { label: "Проекты",    href: "/projects" },
  { label: "Статьи",     href: "/articles" },
  { label: "О компании", href: "/about" },
  { label: "Контакты",   href: "/contacts" },
]

const PHONES = [
  { label: "8 (499) 390-94-73", href: "tel:+74993909473", sublabel: "Офис, Москва" },
  { label: "8 (929) 985-79-00", href: "tel:+79299857900", sublabel: "Отдел продаж" },
]

export function SiteHeader({ onOpenModal }: SiteHeaderProps) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-200"
      style={{ boxShadow: scrolled ? "0 2px 20px rgba(15,28,58,0.08)" : "0 1px 0 #e2e6ef" }}
    >
      {/* Blue top accent */}
      <div className="h-0.5 bg-[#1a5fd4]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 gap-6">

          {/* Logo */}
          <Link href="/" aria-label="СтройГенПодряд — главная" className="shrink-0 flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#1a5fd4] flex items-center justify-center shrink-0">
              <svg viewBox="0 0 36 36" fill="none" className="w-5 h-5" aria-hidden="true">
                <path d="M4 16L18 6L32 16" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                <rect x="8" y="16" width="20" height="14" fill="white" opacity="0.15" />
                <rect x="11" y="19" width="4" height="4" fill="white" />
                <rect x="21" y="19" width="4" height="4" fill="white" />
                <rect x="15" y="24" width="6" height="6" fill="white" />
              </svg>
            </div>
            <div>
              <div className="font-black text-[15px] leading-none tracking-tight text-[#0f1c3a] uppercase">
                СтройГенПодряд
              </div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#1a5fd4] mt-0.5">
                Генеральный подрядчик
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center" aria-label="Основная навигация">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3 py-1.5 text-[13px] font-semibold rounded transition-all duration-150 ${
                    active
                      ? "text-[#1a5fd4] bg-[#e8f0fd]"
                      : "text-[#3d4d66] hover:text-[#0f1c3a] hover:bg-slate-50"
                  }`}
                >
                  {label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop right: phones + CTA */}
          <div className="hidden lg:flex items-center gap-5 shrink-0">
            <div className="flex flex-col gap-1.5 pr-5 border-r border-[#e2e6ef]">
              {PHONES.map((p) => (
                <a key={p.href} href={p.href} className="flex flex-col group">
                  <span className="flex items-center gap-1.5 text-[13px] font-bold text-[#0f1c3a] group-hover:text-[#1a5fd4] transition-colors leading-none">
                    <Phone size={11} className="text-[#1a5fd4] shrink-0" aria-hidden="true" />
                    {p.label}
                  </span>
                  <span className="text-[10px] text-[#8d98aa] ml-[18px] mt-0.5">{p.sublabel}</span>
                </a>
              ))}
            </div>
            <button
              onClick={onOpenModal}
              className="h-9 px-5 bg-[#1a5fd4] hover:bg-[#1450b8] text-white text-[12px] font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer"
            >
              Заявка
            </button>
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden ml-auto p-2 text-[#0f1c3a]"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(4rem+2px)] bottom-0 bg-white z-40 overflow-y-auto border-t border-[#e2e6ef]">
          <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href))
              return (
                <Link
                  key={href}
                  href={href}
                  className={`px-3 py-3.5 text-base font-semibold rounded border-b border-[#f0f2f7] ${
                    active ? "text-[#1a5fd4] bg-[#e8f0fd]" : "text-[#0f1c3a]"
                  }`}
                >
                  {label}
                </Link>
              )
            })}
            <div className="mt-4 pt-4 border-t border-[#e2e6ef] flex flex-col gap-3">
              {PHONES.map((p) => (
                <a key={p.href} href={p.href} className="flex items-center gap-2 text-base font-bold text-[#0f1c3a]">
                  <Phone size={14} className="text-[#1a5fd4]" aria-hidden="true" />
                  {p.label}
                </a>
              ))}
              <button
                onClick={() => { setMobileOpen(false); onOpenModal() }}
                className="mt-1 w-full py-4 bg-[#1a5fd4] hover:bg-[#1450b8] text-white font-bold text-base transition-colors cursor-pointer"
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
