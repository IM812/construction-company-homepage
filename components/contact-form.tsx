"use client"

import { useState } from "react"
import { CheckCircle, Loader2, ArrowRight } from "lucide-react"

interface ContactFormProps {
  compact?: boolean
  onSuccess?: () => void
  dark?: boolean
}

export function ContactForm({ compact = false, onSuccess, dark = false }: ContactFormProps) {
  const [form, setForm] = useState({ name: "", company: "", phone: "", email: "", service: "", area: "", message: "" })
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
      setError("Пожалуйста, заполните обязательные поля: Имя и Телефон.")
      return
    }
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "contact_form" }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Ошибка отправки")
      setSubmitted(true)
      onSuccess?.()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ошибка отправки. Попробуйте ещё раз.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 px-8 text-center">
        <CheckCircle size={56} className="text-[#1a5fd4] mb-6" aria-hidden="true" />
        <h3 className="text-[#0f1c3a] font-black text-2xl mb-3">Заявка принята!</h3>
        <p className="text-[#5a6880] text-base leading-relaxed max-w-sm">
          Наш менеджер свяжется с вами в течение 30 минут в рабочее время.
        </p>
      </div>
    )
  }

  const labelCls = "block text-[#5a6880] text-xs uppercase tracking-widest mb-2"
  const inputCls = "w-full bg-[#f7f8fa] border border-[#e2e6ef] focus:border-[#1a5fd4] focus:bg-white text-[#0f1c3a] placeholder:text-[#8d98aa] px-4 py-3 text-sm outline-none transition-colors duration-200"

  return (
    <form onSubmit={handleSubmit} noValidate aria-label="Форма заявки">
      <div className={`grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className={labelCls}>Имя <span className="text-[#1a5fd4]">*</span></label>
          <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Иван Иванов" className={inputCls} required aria-required="true" />
        </div>
        <div>
          <label htmlFor="company" className={labelCls}>Компания</label>
          <input id="company" name="company" type="text" value={form.company} onChange={handleChange} placeholder="ООО «Название»" className={inputCls} />
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Телефон <span className="text-[#1a5fd4]">*</span></label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+7 (___) ___-__-__" className={inputCls} required aria-required="true" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="ivan@company.ru" className={inputCls} />
        </div>
        <div>
          <label htmlFor="service" className={labelCls}>Услуга</label>
          <select id="service" name="service" value={form.service} onChange={handleChange} className={`${inputCls} cursor-pointer`}>
            <option value="">— Выберите услугу —</option>
            <option value="genpodrjad">Генподряд под ключ</option>
            <option value="proektirovanie">Проектирование</option>
            <option value="stroitelstvo">Строительство</option>
            <option value="rekonstruktsiya">Реконструкция</option>
            <option value="inzhenernye-seti">Инженерные сети</option>
            <option value="nadzor">Технический надзор</option>
          </select>
        </div>
        <div>
          <label htmlFor="area" className={labelCls}>Площадь объекта, м²</label>
          <input id="area" name="area" type="text" value={form.area} onChange={handleChange} placeholder="Например: 2 500" className={inputCls} />
        </div>
        <div className={compact ? "" : "md:col-span-2"}>
          <label htmlFor="message" className={labelCls}>Комментарий</label>
          <textarea id="message" name="message" rows={compact ? 3 : 4} value={form.message} onChange={handleChange} placeholder="Этажность, сроки, особые условия..." className={`${inputCls} resize-none`} />
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mt-3" role="alert">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 w-full bg-[#1a5fd4] hover:bg-[#1450b8] disabled:opacity-60 text-white font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
      >
        {loading ? (
          <><Loader2 size={18} className="animate-spin" aria-hidden="true" />Отправляем...</>
        ) : (
          <>Отправить заявку<ArrowRight size={18} aria-hidden="true" /></>
        )}
      </button>

      <p className="text-[#8d98aa] text-xs mt-3 text-center leading-relaxed">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy" className="underline hover:text-[#0f1c3a] transition-colors">политикой обработки персональных данных</a>
      </p>
    </form>
  )
}
