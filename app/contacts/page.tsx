"use client"

import { useState } from "react"
import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { Phone, MapPin, ArrowRight, CheckCircle, Loader2 } from "lucide-react"

export default function ContactsPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const inputClass =
    "w-full bg-[var(--navy-elevated)] border border-[var(--divider)] focus:border-[var(--blue-brand)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] px-5 py-4 text-base outline-none transition-colors duration-200"

  return (
    <SiteLayout>
      <div className="pt-24">
        {/* Hero + Form Section */}
        <section className="py-20 lg:py-32 bg-[var(--navy-deep)]" aria-label="Свяжитесь с нами">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            {/* Header */}
            <div className="mb-16 pb-12 border-b border-[var(--divider)]">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                Контакты
              </p>
              <h1 className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl xl:text-6xl leading-[1.05] text-balance mb-6">
                Свяжитесь с нами<br />для расчёта проекта
              </h1>
              <p className="text-[var(--text-secondary)] text-lg lg:text-xl leading-relaxed max-w-2xl">
                Оставьте заявку — технический директор перезвонит в течение 30 минут и даст предварительную оценку стоимости вашего объекта.
              </p>
            </div>

            {/* Two-column layout: contacts + form */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* LEFT: Contact info */}
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[var(--navy-elevated)] flex items-center justify-center">
                      <Phone size={20} className="text-[var(--blue-brand)]" aria-hidden="true" />
                    </div>
                    <h2 className="text-[var(--text-primary)] font-bold text-xl">
                      Телефоны
                    </h2>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <a
                        href="tel:+74951234567"
                        className="block text-[var(--text-primary)] font-black text-2xl hover:text-[var(--blue-brand)] transition-colors"
                      >
                        +7 (495) 123-45-67
                      </a>
                      <p className="text-[var(--text-secondary)] text-sm mt-1">
                        Офис, Москва
                      </p>
                    </div>
                    <div>
                      <a
                        href="tel:+79161234567"
                        className="block text-[var(--text-primary)] font-black text-2xl hover:text-[var(--blue-brand)] transition-colors"
                      >
                        +7 (916) 123-45-67
                      </a>
                      <p className="text-[var(--text-secondary)] text-sm mt-1">
                        Отдел продаж
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-[var(--navy-elevated)] flex items-center justify-center">
                      <MapPin size={20} className="text-[var(--blue-brand)]" aria-hidden="true" />
                    </div>
                    <h2 className="text-[var(--text-primary)] font-bold text-xl">
                      Адрес
                    </h2>
                  </div>
                  <address className="not-italic">
                    <p className="text-[var(--text-primary)] font-bold text-xl leading-snug mb-2">
                      Москва, Щелковское шоссе, дом 7
                    </p>
                    <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                      Пн — Пт: 9:00 – 18:00<br />
                      Суббота — по согласованию
                    </p>
                  </address>
                </div>

                <div className="pt-8 border-t border-[var(--divider)]">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    <strong className="text-[var(--text-primary)]">Бесплатный выезд</strong> технического директора на объект в пределах Московской области.
                  </p>
                </div>
              </div>

              {/* RIGHT: Form */}
              <div className="lg:col-span-3 bg-[var(--navy-card)] border border-[var(--divider)] p-8 lg:p-12">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle size={64} className="text-[var(--blue-brand)] mb-6" aria-hidden="true" />
                    <h3 className="text-[var(--text-primary)] font-black text-3xl mb-4">
                      Заявка принята!
                    </h3>
                    <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-md">
                      Наш технический директор свяжется с вами в течение 30 минут в рабочее время.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-[var(--text-primary)] font-bold text-2xl mb-2">
                      Форма заявки
                    </h3>
                    <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
                      Заполните поля ниже — перезвоним в течение 30 минут.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      <div className="space-y-5">
                        <div>
                          <label htmlFor="name" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
                            Ваше имя <span className="text-[var(--blue-brand)]">*</span>
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Иван Иванов"
                            className={inputClass}
                            required
                            aria-required="true"
                          />
                        </div>

                        <div>
                          <label htmlFor="phone" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
                            Телефон <span className="text-[var(--blue-brand)]">*</span>
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+7 (___) ___-__-__"
                            className={inputClass}
                            required
                            aria-required="true"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
                            Комментарий
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Тип объекта, площадь, сроки, текущая стадия проекта..."
                            className={`${inputClass} resize-none`}
                          />
                        </div>
                      </div>

                      {error && (
                        <p className="text-red-400 text-sm mt-4" role="alert">
                          {error}
                        </p>
                      )}

                      <button
                        type="submit"
                        disabled={loading}
                        className="mt-8 w-full bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] disabled:opacity-60 text-[var(--text-primary)] font-bold text-base px-8 py-5 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <>
                            <Loader2 size={20} className="animate-spin" aria-hidden="true" />
                            Отправляем...
                          </>
                        ) : (
                          <>
                            Отправить заявку
                            <ArrowRight size={20} aria-hidden="true" />
                          </>
                        )}
                      </button>

                      <p className="text-[var(--text-secondary)] text-xs mt-4 text-center leading-relaxed">
                        Нажимая кнопку, вы соглашаетесь с{" "}
                        <a href="#" className="underline hover:text-[var(--text-primary)] transition-colors">
                          политикой обработки данных
                        </a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
