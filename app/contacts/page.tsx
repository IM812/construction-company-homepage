"use client"

import { useState } from "react"
import { SiteLayout } from "@/components/site-layout"
import Link from "next/link"
import {
  Phone,
  MapPin,
  ArrowRight,
  Mail,
  Clock,
  CheckCircle,
  Loader2,
  ChevronRight,
} from "lucide-react"

const SERVICES = [
  "Генеральный подряд",
  "Проектирование",
  "Строительство",
  "Реконструкция",
  "Внутренние инженерные сети",
  "Внешние инженерные сети",
  "Фундаменты и нулевой цикл",
  "Фасады и кровля",
  "Малоэтажное строительство",
  "Благоустройство территории",
]

const WAYS = [
  {
    icon: Phone,
    title: "Позвонить",
    desc: "Пн–Пт 9:00–18:00",
    action: "8 (499) 390-94-73",
    href: "tel:+74993909473",
  },
  {
    icon: Mail,
    title: "Написать на email",
    desc: "Ответим в течение 2 часов",
    action: "info@stroygen.ru",
    href: "mailto:info@stroygen.ru",
  },
  {
    icon: MapPin,
    title: "Приехать в офис",
    desc: "Москва, Щелковское шоссе, 7",
    action: "Открыть схему",
    href: "#",
  },
]

export default function ContactsPage() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", area: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setError("Пожалуйста, укажите имя и телефон.")
      return
    }
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    "w-full bg-[var(--navy-elevated)] border border-[var(--divider)] focus:border-[var(--blue-brand)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] px-5 py-4 text-base outline-none transition-colors duration-200"

  return (
    <SiteLayout>
      <div className="pt-24">

        {/* ── Hero ── */}
        <section
          className="relative py-20 lg:py-32 bg-[var(--navy-deep)] border-b border-[var(--divider)] overflow-hidden"
          aria-label="Контакты"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/images/contacts-bg.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy-deep)]/60 to-[var(--navy-deep)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Контакты
            </p>
            <h1 className="text-[var(--text-primary)] font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-balance mb-6">
              Свяжитесь с нами<br className="hidden sm:block" /> для расчёта проекта
            </h1>
            <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-2xl">
              Технический директор перезвонит в течение 30 минут и даст предварительную оценку стоимости вашего объекта.
            </p>
          </div>
        </section>

        {/* ── 3 способа связаться ── */}
        <section className="bg-[var(--navy-card)] border-b border-[var(--divider)]" aria-label="Способы связи">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[var(--divider)]">
              {WAYS.map((way) => {
                const Icon = way.icon
                return (
                  <a
                    key={way.title}
                    href={way.href}
                    className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] px-6 sm:px-8 py-8 flex flex-col gap-3 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-[var(--navy-elevated)] group-hover:bg-[var(--blue-brand)] flex items-center justify-center transition-colors duration-300">
                      <Icon size={18} className="text-[var(--blue-brand)] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <p className="text-[var(--text-primary)] font-bold text-base">{way.title}</p>
                    <p className="text-[var(--text-secondary)] text-xs">{way.desc}</p>
                    <span className="flex items-center gap-1.5 text-[var(--blue-brand)] font-semibold text-sm mt-auto group-hover:gap-3 transition-all duration-200">
                      {way.action}
                      <ChevronRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Основной блок: реквизиты + форма ── */}
        <section className="py-16 sm:py-24 bg-[var(--navy-deep)]" aria-labelledby="contact-form-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">

              {/* LEFT: info blocks */}
              <div className="lg:col-span-2 flex flex-col gap-0">
                {/* Phones */}
                <div className="bg-[var(--navy-card)] border border-[var(--divider)] p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Phone size={14} className="text-[var(--blue-brand)]" aria-hidden="true" />
                    <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em]">Телефоны</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <a href="tel:+74993909473" className="block text-[var(--text-primary)] font-black text-2xl sm:text-3xl hover:text-[var(--blue-brand)] transition-colors leading-tight">
                        8 (499) 390-94-73
                      </a>
                      <p className="text-[var(--text-secondary)] text-sm mt-1.5">Офис, Москва — Пн–Пт 9:00–18:00</p>
                    </div>
                    <div className="pt-4 border-t border-[var(--divider)]">
                      <a href="tel:+79299857900" className="block text-[var(--text-primary)] font-black text-2xl sm:text-3xl hover:text-[var(--blue-brand)] transition-colors leading-tight">
                        8 (929) 985-79-00
                      </a>
                      <p className="text-[var(--text-secondary)] text-sm mt-1.5">Отдел продаж — с 8:00 до 20:00</p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-[var(--navy-card)] border border-t-0 border-[var(--divider)] p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin size={14} className="text-[var(--blue-brand)]" aria-hidden="true" />
                    <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em]">Адрес</p>
                  </div>
                  <address className="not-italic">
                    <p className="text-[var(--text-primary)] font-bold text-lg leading-snug mb-3">
                      Москва, Щелковское шоссе, дом 7
                    </p>
                    <div className="flex flex-col gap-1 text-[var(--text-secondary)] text-sm">
                      <span className="flex items-center gap-2">
                        <Clock size={12} className="text-[var(--blue-brand)] shrink-0" aria-hidden="true" />
                        Пн — Пт: 9:00 – 18:00
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={12} className="text-[var(--blue-brand)] shrink-0" aria-hidden="true" />
                        Суббота — по согласованию
                      </span>
                    </div>
                  </address>
                </div>

                {/* Free visit callout */}
                <div className="bg-[var(--blue-brand)]/10 border border-t-0 border-[var(--blue-brand)]/30 p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[var(--blue-brand)] mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      <strong className="text-[var(--text-primary)]">Бесплатный выезд</strong> технического директора на объект в пределах Московской области.
                    </p>
                  </div>
                </div>

                {/* Quick links */}
                <div className="bg-[var(--navy-card)] border border-t-0 border-[var(--divider)] p-5 sm:p-6">
                  <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest font-semibold mb-4">Полезные разделы</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "Все услуги",         href: "/services" },
                      { label: "Реализованные проекты", href: "/projects" },
                      { label: "Статьи и экспертиза", href: "/articles" },
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center justify-between py-2 border-b border-[var(--divider)] last:border-0 text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm font-medium transition-colors duration-150 group"
                      >
                        {link.label}
                        <ArrowRight size={12} className="text-[var(--blue-brand)] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: form */}
              <div className="lg:col-span-3 bg-[var(--navy-card)] border border-[var(--divider)] p-6 sm:p-8 lg:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                    <CheckCircle size={64} className="text-[var(--blue-brand)]" aria-hidden="true" />
                    <h3 className="text-[var(--text-primary)] font-black text-3xl">Заявка принята!</h3>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-md">
                      Технический директор свяжется с вами в течение 30 минут в рабочее время.
                    </p>
                    <Link
                      href="/projects"
                      className="flex items-center gap-2 text-[var(--blue-brand)] text-sm font-semibold hover:text-[var(--text-primary)] transition-colors"
                    >
                      Посмотреть реализованные проекты
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 id="contact-form-heading" className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl mb-2">
                      Оставьте заявку
                    </h2>
                    <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8">
                      Заполните форму — перезвоним в течение 30 минут и предоставим предварительную оценку стоимости.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="c-name" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
                            Ваше имя <span className="text-[var(--blue-brand)]">*</span>
                          </label>
                          <input
                            id="c-name" name="name" type="text"
                            value={form.name} onChange={handleChange}
                            placeholder="Иван Иванов"
                            className={inputClass} required aria-required="true"
                          />
                        </div>
                        <div>
                          <label htmlFor="c-phone" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
                            Телефон <span className="text-[var(--blue-brand)]">*</span>
                          </label>
                          <input
                            id="c-phone" name="phone" type="tel"
                            value={form.phone} onChange={handleChange}
                            placeholder="+7 (___) ___-__-__"
                            className={inputClass} required aria-required="true"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="c-service" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
                            Вид работ
                          </label>
                          <select
                            id="c-service" name="service"
                            value={form.service} onChange={handleChange}
                            className={`${inputClass} cursor-pointer`}
                          >
                            <option value="">Выберите услугу</option>
                            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="c-area" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
                            Площадь объекта
                          </label>
                          <input
                            id="c-area" name="area" type="text"
                            value={form.area} onChange={handleChange}
                            placeholder="например, 5 000 м²"
                            className={inputClass}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="c-message" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
                          Комментарий
                        </label>
                        <textarea
                          id="c-message" name="message" rows={4}
                          value={form.message} onChange={handleChange}
                          placeholder="Тип объекта, текущая стадия, сроки, особые условия..."
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {error && (
                        <p className="text-red-400 text-sm mb-4" role="alert">{error}</p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] disabled:opacity-60 text-white font-bold text-base px-8 py-5 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed min-h-[56px]"
                      >
                        {loading ? (
                          <><Loader2 size={20} className="animate-spin" aria-hidden="true" />Отправляем...</>
                        ) : (
                          <>Отправить заявку<ArrowRight size={20} aria-hidden="true" /></>
                        )}
                      </button>

                      <p className="text-[var(--text-secondary)] text-xs mt-4 text-center leading-relaxed">
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <a href="#" className="underline hover:text-[var(--text-primary)] transition-colors">
                          политикой обработки персональных данных
                        </a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

      </div>
    </SiteLayout>
  )
}
