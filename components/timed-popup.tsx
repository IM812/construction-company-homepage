"use client"

import { useEffect, useState } from "react"
import { X, Clock, CheckCircle, Loader2, ArrowRight } from "lucide-react"

const DELAY_MS = 12000 // 12 seconds
const SESSION_KEY = "sgp_popup_seen"

export function TimedPopup() {
  const [visible, setVisible] = useState(false)
  const [form, setForm] = useState({ name: "", phone: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    if (typeof window === "undefined") return
    if (sessionStorage.getItem(SESSION_KEY)) return

    const timer = setTimeout(() => {
      setVisible(true)
      sessionStorage.setItem(SESSION_KEY, "1")
    }, DELAY_MS)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") handleClose() }
    if (visible) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [visible])

  const handleClose = () => setVisible(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      setError("Пожалуйста, укажите имя и телефон.")
      return
    }
    setLoading(true)
    await new Promise(res => setTimeout(res, 1400))
    setLoading(false)
    setSubmitted(true)
    setTimeout(() => setVisible(false), 3000)
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Специальное предложение"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup card */}
      <div className="relative bg-white w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">

        {/* Top accent bar */}
        <div className="h-1 bg-[#1a5fd4] w-full" />

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-[#8d98aa] hover:text-[#0f1c3a] transition-colors p-1.5 rounded hover:bg-[#f7f8fa] cursor-pointer"
          aria-label="Закрыть"
        >
          <X size={20} />
        </button>

        <div className="p-8">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-6">
              <CheckCircle size={52} className="text-[#1a5fd4] mb-4" aria-hidden="true" />
              <h3 className="text-[#0f1c3a] font-black text-xl mb-2">Заявка принята!</h3>
              <p className="text-[#5a6880] text-sm leading-relaxed">
                Перезвоним в течение 30 минут в рабочее время.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-11 h-11 bg-[#edf3fc] rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-[#1a5fd4]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-[#1a5fd4] text-xs font-bold uppercase tracking-widest mb-1">Бесплатная консультация</p>
                  <h2 className="text-[#0f1c3a] font-black text-xl leading-tight text-balance">
                    Узнайте стоимость вашего объекта за 3 дня
                  </h2>
                </div>
              </div>

              <p className="text-[#5a6880] text-sm leading-relaxed mb-6">
                Оставьте номер — технический директор перезвонит, задаст уточняющие вопросы и даст предварительную оценку. Без обязательств.
              </p>

              {/* Guarantees */}
              <ul className="mb-6 space-y-2">
                {[
                  "Расчёт в течение 3 рабочих дней",
                  "Опыт более 200 объектов по Москве и МО",
                  "Договор с фиксированной ценой",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-[#0f1c3a]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a5fd4] flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Form */}
              <form onSubmit={handleSubmit} noValidate aria-label="Быстрая форма заявки">
                <div className="space-y-3">
                  <div>
                    <label htmlFor="popup-name" className="sr-only">Ваше имя</label>
                    <input
                      id="popup-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Ваше имя *"
                      required
                      aria-required="true"
                      className="w-full bg-[#f7f8fa] border border-[#e2e6ef] focus:border-[#1a5fd4] focus:bg-white text-[#0f1c3a] placeholder:text-[#8d98aa] px-4 py-3.5 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label htmlFor="popup-phone" className="sr-only">Телефон</label>
                    <input
                      id="popup-phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Телефон *"
                      required
                      aria-required="true"
                      className="w-full bg-[#f7f8fa] border border-[#e2e6ef] focus:border-[#1a5fd4] focus:bg-white text-[#0f1c3a] placeholder:text-[#8d98aa] px-4 py-3.5 text-sm outline-none transition-colors duration-200"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-red-500 text-xs mt-2" role="alert">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-4 w-full bg-[#1a5fd4] hover:bg-[#1450b8] disabled:opacity-60 text-white font-bold text-sm px-6 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2.5 cursor-pointer disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <><Loader2 size={17} className="animate-spin" aria-hidden="true" /> Отправляем...</>
                  ) : (
                    <>Получить расчёт бесплатно <ArrowRight size={17} aria-hidden="true" /></>
                  )}
                </button>

                <p className="text-[#8d98aa] text-xs mt-3 text-center leading-relaxed">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="#" className="underline hover:text-[#0f1c3a] transition-colors">политикой обработки персональных данных</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
