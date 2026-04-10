"use client"

import { ArrowRight } from "lucide-react"

interface DesignHeroProps {
  onOpenModal: () => void
}

export function DesignHero({ onOpenModal }: DesignHeroProps) {
  return (
    <section
      className="relative min-h-[70vh] flex items-end overflow-hidden pt-20"
      aria-label="Проектирование — заголовок"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/design-hero.jpg"
          alt="Архитекторы за рабочими чертежами"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--navy-deep)]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 pb-20 pt-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10" aria-label="Навигационная цепочка">
          <a
            href="/"
            className="text-[var(--text-secondary)] hover:text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.25em] transition-colors"
          >
            Главная
          </a>
          <span className="text-[var(--divider)]" aria-hidden="true">/</span>
          <span className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.25em]">
            Проектирование
          </span>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              Услуги / Проектирование
            </p>
            <h1 className="text-[var(--text-primary)] font-black text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-tight text-balance mb-6">
              Полный цикл проектирования
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              От инженерных изысканий до рабочей документации. Собственное проектное бюро,
              допуски СРО, BIM-технологии, опыт прохождения государственной и негосударственной экспертизы.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:items-end">
            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-px bg-[var(--divider)] border border-[var(--divider)] w-full lg:max-w-xs">
              {[
                { value: "120+", label: "Объектов запроектировано" },
                { value: "100%", label: "Успешных экспертиз" },
                { value: "БИМ", label: "Технологии проектирования" },
                { value: "СРО", label: "Допуск на все виды работ" },
              ].map((s) => (
                <div key={s.label} className="bg-[var(--navy-card)] px-5 py-4">
                  <p className="text-[var(--blue-brand)] font-black text-2xl leading-none">{s.value}</p>
                  <p className="text-[var(--text-secondary)] text-xs leading-tight mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={onOpenModal}
              className="group bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-[var(--text-primary)] font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center gap-3 cursor-pointer w-full lg:w-auto justify-center"
            >
              Получить коммерческое предложение
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
