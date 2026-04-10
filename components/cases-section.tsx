"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"

const cases = [
  {
    id: 1,
    image: "/images/case-office.jpg",
    category: "Коммерческое строительство",
    title: "Офисный комплекс «Северная башня»",
    location: "Москва, ММДЦ «Москва-Сити»",
    area: "42 000 м²",
    duration: "28 месяцев",
    budget: "₽3,8 млрд",
    description:
      "Класс А+, 36 этажей. Фасадное остекление, умные инженерные системы, подземный паркинг на 400 мест.",
  },
  {
    id: 2,
    image: "/images/case-warehouse.jpg",
    category: "Промышленное строительство",
    title: "Логистический парк «Восточный»",
    location: "Московская область, Ногинск",
    area: "120 000 м²",
    duration: "18 месяцев",
    budget: "₽2,1 млрд",
    description:
      "Распределительный центр класса A. Автоматизированная сортировочная линия, холодильные склады -25°C.",
  },
  {
    id: 3,
    image: "/images/case-residential.jpg",
    category: "Жилое строительство",
    title: "ЖК «Речные Террасы»",
    location: "Москва, Хорошёво-Мнёвники",
    area: "185 000 м²",
    duration: "36 месяцев",
    budget: "₽12,4 млрд",
    description:
      "Жилой комплекс бизнес-класса. 4 башни от 28 до 42 этажей, собственная набережная, закрытый квартал.",
  },
]

export function CasesSection() {
  const [activeCase, setActiveCase] = useState(0)
  const current = cases[activeCase]

  return (
    <section id="cases" className="py-16 sm:py-28 bg-[var(--navy-card)]" aria-labelledby="cases-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 sm:mb-16">
          <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-3 sm:mb-4">
            04 / Кейсы
          </p>
          <h2
            id="cases-heading"
            className="text-[var(--text-primary)] font-black text-2xl sm:text-4xl lg:text-5xl leading-tight text-balance"
          >
            Реализованные объекты
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-[var(--divider)]">
          {/* Case list sidebar */}
          <nav
            className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-[var(--divider)]"
            aria-label="Список кейсов"
          >
            {cases.map((c, i) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(i)}
                className={`w-full text-left p-6 border-b border-[var(--divider)] last:border-b-0 transition-colors duration-200 cursor-pointer ${
                  activeCase === i
                    ? "bg-[var(--blue-brand)] text-white"
                    : "hover:bg-[var(--navy-elevated)] text-[var(--text-secondary)]"
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-widest mb-2 ${activeCase === i ? "text-white/70" : "text-[var(--blue-brand)]"}`}>
                  {c.category}
                </p>
                <p className={`font-bold text-base leading-tight ${activeCase === i ? "text-white" : "text-[var(--text-primary)]"}`}>
                  {c.title}
                </p>
                <p className={`text-sm mt-1 ${activeCase === i ? "text-white/70" : "text-[var(--text-secondary)]"}`}>
                  {c.location}
                </p>
              </button>
            ))}
          </nav>

          {/* Active case detail */}
          <div className="lg:col-span-8">
            <div className="relative h-64 lg:h-80 overflow-hidden">
              <img
                src={current.image}
                alt={current.title}
                key={current.id}
                className="w-full h-full object-cover transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-card)] via-transparent to-transparent" />
            </div>

            <div className="p-8">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest mb-3">
                {current.category}
              </p>
              <h3 className="text-[var(--text-primary)] font-black text-2xl mb-2">
                {current.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">{current.location}</p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
                {current.description}
              </p>

              <div className="grid grid-cols-3 gap-4 border-t border-[var(--divider)] pt-6">
                {[
                  { label: "Площадь", value: current.area },
                  { label: "Срок строительства", value: current.duration },
                  { label: "Стоимость", value: current.budget },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-1">
                      {stat.label}
                    </p>
                    <p className="text-[var(--text-primary)] font-bold text-lg">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#contacts"
            className="inline-flex items-center gap-2 text-[var(--blue-brand)] hover:text-[var(--text-primary)] font-semibold text-sm uppercase tracking-widest transition-colors group"
          >
            Обсудить ваш проект
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
