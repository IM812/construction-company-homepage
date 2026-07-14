"use client"

import { useState } from "react"
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from "lucide-react"

const STEPS = [
  {
    id: "type",
    question: "Какой тип объекта вас интересует?",
    options: [
      { value: "warehouse",    label: "Склад / Логистика" },
      { value: "office",       label: "Офис / Торговый центр" },
      { value: "industrial",   label: "Производство / Завод" },
      { value: "residential",  label: "Жилой дом / ЖК" },
    ],
  },
  {
    id: "area",
    question: "Какова площадь объекта?",
    options: [
      { value: "lt1000",     label: "До 1 000 м²" },
      { value: "1000-5000",  label: "1 000 — 5 000 м²" },
      { value: "5000-20000", label: "5 000 — 20 000 м²" },
      { value: "gt20000",    label: "Более 20 000 м²" },
    ],
  },
  {
    id: "works",
    question: "Какие работы необходимы?",
    options: [
      { value: "fullcycle",       label: "Полный цикл (проект + строительство)" },
      { value: "design",          label: "Только проектирование" },
      { value: "construction",    label: "Только строительство" },
      { value: "reconstruction",  label: "Реконструкция / Капремонт" },
    ],
  },
]

type Answers = Record<string, string>

export function QuizSection() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Answers>({})
  const [form, setForm] = useState({ name: "", phone: "" })
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const currentStep = STEPS[step]
  const isFormStep = step === STEPS.length
  const totalSteps = STEPS.length + 1

  const handleOption = (value: string) => {
    setAnswers((prev) => ({ ...prev, [currentStep.id]: value }))
    setTimeout(() => setStep((s) => s + 1), 180)
  }

  const handleBack = () => { if (step > 0) setStep((s) => s - 1) }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) { setError("Пожалуйста, укажите имя и телефон."); return }
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "quiz", answers }),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error ?? "Ошибка отправки")
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ошибка отправки. Попробуйте ещё раз.")
    } finally {
      setLoading(false)
    }
  }

  const inputCls = "w-full bg-[#f7f8fa] border border-[#e2e6ef] focus:border-[#1a5fd4] focus:bg-white text-[#0f1c3a] placeholder:text-[#8d98aa] px-5 py-4 text-base outline-none transition-colors duration-200"

  return (
    <section className="py-20 sm:py-24 bg-[#f7f8fa] border-y border-[#e2e6ef]" aria-labelledby="quiz-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-5">Быстрый расчёт</p>
            <h2 id="quiz-heading" className="text-[#0f1c3a] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-6">
              Получите предварительную оценку за 1 минуту
            </h2>
            <p className="text-[#5a6880] text-base leading-relaxed mb-8">
              Ответьте на 3 вопроса — и мы пришлём ориентировочный расчёт стоимости под ваш объект. Технический директор перезвонит в течение 30 минут.
            </p>
            <div className="flex flex-col gap-3">
              {[
                "Бесплатный расчёт без обязательств",
                "Ответ в течение 30 минут",
                "Выезд на объект в пределах МО — бесплатно",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[#1a5fd4] shrink-0" aria-hidden="true" />
                  <span className="text-[#5a6880] text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz card */}
          <div className="bg-white border border-[#e2e6ef] shadow-sm">
            {/* Progress */}
            <div className="flex gap-px">
              {Array.from({ length: totalSteps }).map((_, i) => (
                <div
                  key={i}
                  className="h-1 flex-1 transition-colors duration-300"
                  style={{ background: i <= step ? "#1a5fd4" : "#e2e6ef" }}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-8 gap-5">
                  <CheckCircle2 size={56} className="text-[#1a5fd4]" aria-hidden="true" />
                  <h3 className="text-[#0f1c3a] font-black text-2xl">Заявка принята!</h3>
                  <p className="text-[#5a6880] text-base leading-relaxed max-w-sm">
                    Технический директор свяжется с вами в течение 30 минут.
                  </p>
                </div>
              ) : isFormStep ? (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <button onClick={handleBack} className="text-[#5a6880] hover:text-[#0f1c3a] transition-colors cursor-pointer" aria-label="Назад">
                      <ArrowLeft size={18} />
                    </button>
                    <p className="text-[#8d98aa] text-xs uppercase tracking-widest font-semibold">
                      Шаг {step + 1} из {totalSteps} — Ваши контакты
                    </p>
                  </div>
                  <h3 className="text-[#0f1c3a] font-bold text-xl mb-6">Куда отправить расчёт?</h3>
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="flex flex-col gap-4">
                      <div>
                        <label htmlFor="quiz-name" className="sr-only">Ваше имя</label>
                        <input id="quiz-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Ваше имя" className={inputCls} required aria-required="true" />
                      </div>
                      <div>
                        <label htmlFor="quiz-phone" className="sr-only">Телефон</label>
                        <input id="quiz-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="Телефон" className={inputCls} required aria-required="true" />
                      </div>
                    </div>
                    {error && <p className="text-red-500 text-sm mt-3" role="alert">{error}</p>}
                    <button
                      type="submit"
                      disabled={loading}
                      className="mt-6 w-full bg-[#1a5fd4] hover:bg-[#1450b8] disabled:opacity-60 text-white font-bold text-sm px-6 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer disabled:cursor-not-allowed"
                    >
                      {loading
                        ? <><Loader2 size={18} className="animate-spin" aria-hidden="true" />Отправляем...</>
                        : <>Получить расчёт<ArrowRight size={18} aria-hidden="true" /></>
                      }
                    </button>
                    <p className="text-[#8d98aa] text-xs mt-3 text-center">
                      Нажимая кнопку, вы соглашаетесь с политикой обработки данных
                    </p>
                  </form>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    {step > 0 && (
                      <button onClick={handleBack} className="text-[#5a6880] hover:text-[#0f1c3a] transition-colors cursor-pointer" aria-label="Назад">
                        <ArrowLeft size={18} />
                      </button>
                    )}
                    <p className="text-[#8d98aa] text-xs uppercase tracking-widest font-semibold">
                      Вопрос {step + 1} из {totalSteps}
                    </p>
                  </div>
                  <h3 className="text-[#0f1c3a] font-bold text-xl mb-6">{currentStep.question}</h3>
                  <div className="flex flex-col gap-2">
                    {currentStep.options.map((opt) => {
                      const selected = answers[currentStep.id] === opt.value
                      return (
                        <button
                          key={opt.value}
                          onClick={() => handleOption(opt.value)}
                          className={`w-full text-left px-5 py-4 border font-medium text-sm transition-colors duration-150 cursor-pointer flex items-center justify-between group ${
                            selected
                              ? "border-[#1a5fd4] bg-[#1a5fd4] text-white"
                              : "border-[#e2e6ef] bg-white hover:border-[#1a5fd4] text-[#3d4d66] hover:text-[#0f1c3a]"
                          }`}
                        >
                          {opt.label}
                          <ArrowRight size={14} className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150" aria-hidden="true" />
                        </button>
                      )
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
