"use client"

import { ArrowRight, Phone } from "lucide-react"

interface DesignCtaProps {
  onOpenModal: () => void
}

export function DesignCta({ onOpenModal }: DesignCtaProps) {
  return (
    <section
      className="py-28 bg-[var(--navy-deep)] border-t border-[var(--divider)]"
      aria-labelledby="design-cta-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              03 / Начать проект
            </p>
            <h2
              id="design-cta-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance mb-6"
            >
              Готовы обсудить ваш объект?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10">
              Расскажите о задаче — наш главный архитектор проведёт бесплатную консультацию и предложит оптимальную стратегию проектирования с учётом сроков и бюджета.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenModal}
                className="group bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-[var(--text-primary)] font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3 cursor-pointer"
              >
                Оставить заявку
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </button>
              <a
                href="tel:+74951234567"
                className="border border-[var(--divider)] hover:border-[var(--blue-brand)] text-[var(--text-primary)] font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3"
              >
                <Phone size={15} aria-hidden="true" />
                +7 (495) 123-45-67
              </a>
            </div>
          </div>

          {/* Right — checklist */}
          <div className="bg-[var(--navy-card)] border border-[var(--divider)] p-8">
            <p className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-[0.2em] mb-6">
              Что получает заказчик:
            </p>
            <ul className="flex flex-col gap-4" role="list">
              {[
                "Консультацию главного архитектора — бесплатно",
                "Предварительный план-график проектирования",
                "Чёткое понимание стоимости всех стадий",
                "Единый договор на весь цикл от изысканий до РД",
                "Фиксированные сроки с ответственностью за их соблюдение",
                "BIM-модель в собственность заказчика",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--blue-brand)] shrink-0"
                    aria-hidden="true"
                  />
                  <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-[var(--divider)] flex items-center gap-3">
              <div className="w-2 h-10 bg-[var(--blue-brand)]" aria-hidden="true" />
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                Допуски СРО на проектирование и строительство. Членство в НОПРИЗ.
                <br />
                Лицензия ФСБ на работу с секретными объектами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
