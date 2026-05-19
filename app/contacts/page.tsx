"use client"

import { useState } from "react"
import { SiteLayout } from "@/components/site-layout"
import Link from "next/link"
import {
  Phone, MapPin, ArrowRight, Mail, Clock, CheckCircle, Loader2, ChevronRight,
} from "lucide-react"

const SERVICES = [
  "Генеральный подряд", "Проектирование", "Строительство",
  "Реконструкция", "Внутренние инженерные сети", "Внешние инженерные сети",
  "Фундаменты и нулевой цикл", "Фасады и кровля", "Малоэтажное строительство", "Благоустройство",
]

const WAYS = [
  { icon: Phone,  title: "Позвонить",        desc: "Пн–Пт 9:00–18:00",           action: "8 (499) 390-94-73",  href: "tel:+74993909473" },
  { icon: Mail,   title: "Написать на email", desc: "Ответим в течение 2 часов",   action: "info@stroygen.ru",   href: "mailto:info@stroygen.ru" },
  { icon: MapPin, title: "Приехать в офис",   desc: "Москва, Щелковское шоссе, 7", action: "Открыть схему",     href: "#" },
]

const inputCls = "w-full bg-[#f7f8fa] border border-[#e2e6ef] focus:border-[#1a5fd4] focus:bg-white text-[#0f1c3a] placeholder:text-[#8d98aa] px-5 py-4 text-base outline-none transition-colors duration-200"
const labelCls = "block text-[#5a6880] text-xs uppercase tracking-widest mb-2"

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
    if (!form.name || !form.phone) { setError("Пожалуйста, укажите имя и телефон."); return }
    setLoading(true)
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <SiteLayout>
      <div className="pt-[calc(4rem+2px)]">

        {/* Hero */}
        <section className="relative py-20 lg:py-28 bg-[#0f1c3a] overflow-hidden" aria-label="Контакты">
          <div className="absolute inset-0 z-0">
            <img src="/images/contacts-bg.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f1c3a]/60 to-[#0f1c3a]" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">Контакты</p>
            <h1 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.02] text-balance mb-6">
              Свяжитесь с нами<br className="hidden sm:block" /> для расчёта проекта
            </h1>
            <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">
              Технический директор перезвонит в течение 30 минут и даст предварительную оценку стоимости вашего объекта.
            </p>
          </div>
        </section>

        {/* 3 ways */}
        <section className="bg-white border-b border-[#e2e6ef]" aria-label="Способы связи">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#e2e6ef]">
              {WAYS.map((way) => {
                const Icon = way.icon
                return (
                  <a key={way.title} href={way.href}
                    className="bg-white hover:bg-[#f7f8fa] px-6 sm:px-8 py-8 flex flex-col gap-3 transition-colors duration-200 group"
                  >
                    <div className="w-10 h-10 bg-[#e8f0fd] group-hover:bg-[#1a5fd4] flex items-center justify-center transition-colors duration-300">
                      <Icon size={18} className="text-[#1a5fd4] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <p className="text-[#0f1c3a] font-bold text-base">{way.title}</p>
                    <p className="text-[#8d98aa] text-xs">{way.desc}</p>
                    <span className="flex items-center gap-1.5 text-[#1a5fd4] font-semibold text-sm mt-auto group-hover:gap-3 transition-all duration-200">
                      {way.action}
                      <ChevronRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                )
              })}
            </div>
          </div>
        </section>

        {/* Main: info + form */}
        <section className="py-16 sm:py-24 bg-[#f7f8fa]" aria-labelledby="contact-form-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">

              {/* Left: info */}
              <div className="lg:col-span-2 flex flex-col">
                <div className="bg-white border border-[#e2e6ef] p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <Phone size={14} className="text-[#1a5fd4]" aria-hidden="true" />
                    <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em]">Телефоны</p>
                  </div>
                  <div className="flex flex-col gap-5">
                    <div>
                      <a href="tel:+74993909473" className="block text-[#0f1c3a] font-black text-2xl sm:text-3xl hover:text-[#1a5fd4] transition-colors leading-tight">
                        8 (499) 390-94-73
                      </a>
                      <p className="text-[#5a6880] text-sm mt-1.5">Офис, Москва — Пн–Пт 9:00–18:00</p>
                    </div>
                    <div className="pt-4 border-t border-[#e2e6ef]">
                      <a href="tel:+79299857900" className="block text-[#0f1c3a] font-black text-2xl sm:text-3xl hover:text-[#1a5fd4] transition-colors leading-tight">
                        8 (929) 985-79-00
                      </a>
                      <p className="text-[#5a6880] text-sm mt-1.5">Отдел продаж — с 8:00 до 20:00</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border border-t-0 border-[#e2e6ef] p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-6">
                    <MapPin size={14} className="text-[#1a5fd4]" aria-hidden="true" />
                    <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em]">Адрес</p>
                  </div>
                  <address className="not-italic">
                    <p className="text-[#0f1c3a] font-bold text-lg leading-snug mb-3">Москва, Щелковское шоссе, дом 7</p>
                    <div className="flex flex-col gap-1 text-[#5a6880] text-sm">
                      <span className="flex items-center gap-2">
                        <Clock size={12} className="text-[#1a5fd4] shrink-0" aria-hidden="true" />
                        Пн — Пт: 9:00 – 18:00
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={12} className="text-[#1a5fd4] shrink-0" aria-hidden="true" />
                        Суббота — по согласованию
                      </span>
                    </div>
                  </address>
                </div>

                <div className="bg-[#e8f0fd] border border-t-0 border-[#1a5fd4]/20 p-5 sm:p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-[#1a5fd4] mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-[#3d4d66] text-sm leading-relaxed">
                      <strong className="text-[#0f1c3a]">Бесплатный выезд</strong> технического директора на объект в пределах МО.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-t-0 border-[#e2e6ef] p-5 sm:p-6">
                  <p className="text-[#8d98aa] text-xs uppercase tracking-widest font-semibold mb-4">Полезные разделы</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { label: "Все услуги",              href: "/services" },
                      { label: "Реализованные проекты",   href: "/projects" },
                      { label: "Статьи и экспертиза",     href: "/articles" },
                    ].map((link) => (
                      <Link key={link.href} href={link.href}
                        className="flex items-center justify-between py-2.5 border-b border-[#e2e6ef] last:border-0 text-[#5a6880] hover:text-[#0f1c3a] text-sm font-medium transition-colors duration-150 group"
                      >
                        {link.label}
                        <ArrowRight size={12} className="text-[#1a5fd4] opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: form */}
              <div className="lg:col-span-3 bg-white border border-[#e2e6ef] shadow-sm p-6 sm:p-8 lg:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center gap-5">
                    <CheckCircle size={64} className="text-[#1a5fd4]" aria-hidden="true" />
                    <h3 className="text-[#0f1c3a] font-black text-3xl">Заявка принята!</h3>
                    <p className="text-[#5a6880] text-lg leading-relaxed max-w-md">
                      Технический директор свяжется с вами в течение 30 минут в рабочее время.
                    </p>
                    <Link href="/projects" className="flex items-center gap-2 text-[#1a5fd4] text-sm font-semibold hover:text-[#0f1c3a] transition-colors">
                      Посмотреть реализованные проекты <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 id="contact-form-heading" className="text-[#0f1c3a] font-black text-2xl sm:text-3xl mb-2">Оставьте заявку</h2>
                    <p className="text-[#5a6880] text-sm sm:text-base leading-relaxed mb-8">
                      Заполните форму — перезвоним в течение 30 минут и предоставим предварительную оценку.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="c-name" className={labelCls}>Ваше имя <span className="text-[#1a5fd4]">*</span></label>
                          <input id="c-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Иван Иванов" className={inputCls} required aria-required="true" />
                        </div>
                        <div>
                          <label htmlFor="c-phone" className={labelCls}>Телефон <span className="text-[#1a5fd4]">*</span></label>
                          <input id="c-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+7 (___) ___-__-__" className={inputCls} required aria-required="true" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="c-service" className={labelCls}>Вид работ</label>
                          <select id="c-service" name="service" value={form.service} onChange={handleChange} className={`${inputCls} cursor-pointer`}>
                            <option value="">Выберите услугу</option>
                            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>
                        <div>
                          <label htmlFor="c-area" className={labelCls}>Площадь объекта</label>
                          <input id="c-area" name="area" type="text" value={form.area} onChange={handleChange} placeholder="например, 5 000 м²" className={inputCls} />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="c-message" className={labelCls}>Комментарий</label>
                        <textarea id="c-message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Тип объекта, текущая стадия, сроки, особые условия..." className={`${inputCls} resize-none`} />
                      </div>
                      {error && <p className="text-red-500 text-sm mb-4" role="alert">{error}</p>}
                      <button
                        type="submit" disabled={loading}
                        className="w-full bg-[#1a5fd4] hover:bg-[#1450b8] disabled:opacity-60 text-white font-bold text-base px-8 py-5 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {loading
                          ? <><Loader2 size={20} className="animate-spin" aria-hidden="true" />Отправляем...</>
                          : <>Отправить заявку<ArrowRight size={20} aria-hidden="true" /></>
                        }
                      </button>
                      <p className="text-[#8d98aa] text-xs mt-4 text-center leading-relaxed">
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <a href="#" className="underline hover:text-[#0f1c3a] transition-colors">политикой обработки персональных данных</a>
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
