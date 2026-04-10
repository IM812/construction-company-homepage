import { ArrowRight } from "lucide-react"

const cycleSteps = [
  {
    num: "01",
    title: "Изыскания",
    short: "Геология, геодезия, экология участка",
  },
  {
    num: "02",
    title: "Стадия П",
    short: "Архитектурные, конструктивные и инженерные решения",
  },
  {
    num: "03",
    title: "Экспертиза",
    short: "ГГЭ или НГЭ, получение ЗОС и РНС",
  },
  {
    num: "04",
    title: "Рабочая документация",
    short: "Чертежи, спецификации, ППР, ЛСР",
  },
  {
    num: "05",
    title: "Строительство",
    short: "Авторский надзор проектного бюро",
  },
]

export function DesignCycle() {
  return (
    <section
      id="cycle"
      className="py-28 bg-[var(--navy-card)]"
      aria-labelledby="cycle-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              02 / Полный цикл
            </p>
            <h2
              id="cycle-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
            >
              Проектирование,<br />которое ведёт к стройке
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm">
            Наше проектное бюро не заканчивает работу на выдаче документации — мы ведём авторский надзор на объекте до финального акта.
          </p>
        </div>

        {/* Cycle diagram */}
        <div className="relative">
          {/* Desktop: horizontal flow */}
          <div className="hidden lg:flex items-stretch gap-px bg-[var(--divider)] border border-[var(--divider)]">
            {cycleSteps.map((step, idx) => (
              <div key={step.num} className="flex-1 flex items-stretch">
                <div className="flex-1 bg-[var(--navy-deep)] hover:bg-[var(--navy-elevated)] transition-colors duration-200 p-7 flex flex-col justify-between group">
                  <div>
                    <span className="text-[var(--blue-brand)] font-black text-4xl leading-none block mb-5">
                      {step.num}
                    </span>
                    <h3 className="text-[var(--text-primary)] font-bold text-base mb-2 leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                      {step.short}
                    </p>
                  </div>
                  {idx === cycleSteps.length - 1 && (
                    <span className="mt-4 text-[var(--blue-brand)] text-xs font-bold uppercase tracking-widest">
                      Финальный акт
                    </span>
                  )}
                </div>
                {idx < cycleSteps.length - 1 && (
                  <div className="flex items-center px-0 bg-[var(--navy-deep)]" aria-hidden="true">
                    <ArrowRight size={14} className="text-[var(--blue-brand)]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile: vertical */}
          <div className="lg:hidden flex flex-col gap-px bg-[var(--divider)] border border-[var(--divider)]">
            {cycleSteps.map((step, idx) => (
              <div key={step.num} className="bg-[var(--navy-deep)] px-6 py-5 flex items-center gap-5">
                <span className="text-[var(--blue-brand)] font-black text-3xl w-12 shrink-0">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-[var(--text-primary)] font-bold text-base">{step.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-0.5">{step.short}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key advantages below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--divider)] border border-[var(--divider)] mt-px">
          {[
            {
              title: "Единая ответственность",
              body: "Один подрядчик на всех стадиях. Нет конфликтов между проектировщиком и строителем — это один и тот же юридический субъект.",
            },
            {
              title: "BIM-проектирование",
              body: "3D-модель объекта с полной информацией об элементах. Коллизии выявляются на экране, а не в ходе строительства.",
            },
            {
              title: "Авторский надзор",
              body: "Проектировщики выходят на объект, контролируют соответствие РД и вносят корректировки без бюрократических задержек.",
            },
          ].map((adv) => (
            <div key={adv.title} className="bg-[var(--navy-deep)] p-8">
              <h3 className="text-[var(--text-primary)] font-bold text-lg mb-3">{adv.title}</h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{adv.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
