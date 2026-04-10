"use client"

import { useState } from "react"
import { CheckCircle, Loader2, ArrowRight } from "lucide-react"

interface ContactFormProps {
  compact?: boolean
  onSuccess?: () => void
}

export function ContactForm({ compact = false, onSuccess }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    type: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setError("Пожалуйста, заполните обязательные поля: Имя и Телефон.")
      return
    }
    setLoading(true)
    // Simulate API call
    await new Promise((res) => setTimeout(res, 1500))
    setLoading(false)
    setSubmitted(true)
    onSuccess?.()
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
        <CheckCircle size={56} className="text-[var(--blue-brand)] mb-6" aria-hidden="true" />
        <h3 className="text-[var(--text-primary)] font-black text-2xl mb-3">
          Заявка принята!
        </h3>
        <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-sm">
          Наш менеджер свяжется с вами в течение 30 минут в рабочее время.
        </p>
      </div>
    )
  }

  const inputClass =
    "w-full bg-[var(--navy-elevated)] border border-[var(--divider)] focus:border-[var(--blue-brand)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] px-4 py-3 text-sm outline-none transition-colors duration-200"

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Форма заявки">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
            Имя <span className="text-[var(--blue-brand)]">*</span>
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
          <label htmlFor="company" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
            Компания
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="ООО «Название»"
            className={inputClass}
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
          <label htmlFor="email" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ivan@company.ru"
            className={inputClass}
          />
        </div>

        <div className={compact ? "" : "md:col-span-2"}>
          <label htmlFor="type" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
            Тип объекта
          </label>
          <select
            id="type"
            name="type"
            value={form.type}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            <option value="">— Выберите тип —</option>
            <option value="industrial">Промышленный объект</option>
            <option value="commercial">Коммерческая недвижимость</option>
            <option value="residential">Жилое строительство</option>
            <option value="reconstruction">Реконструкция</option>
            <option value="other">Другое</option>
          </select>
        </div>

        {!compact && (
          <div className="md:col-span-2">
            <label htmlFor="message" className="block text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-2">
              Описание проекта
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Кратко опишите объект: площадь, этажность, сроки, особые требования..."
              className={`${inputClass} resize-none`}
            />
          </div>
        )}
      </div>

      {error && (
        <p className="text-red-400 text-sm mt-3" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] disabled:opacity-60 text-[var(--text-primary)] font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Отправляем...
          </>
        ) : (
          <>
            Отправить заявку
            <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-[var(--text-secondary)] text-xs mt-3 text-center leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="#" className="underline hover:text-[var(--text-primary)] transition-colors">
          политикой обработки персональных данных
        </a>
      </p>
    </form>
  )
}
