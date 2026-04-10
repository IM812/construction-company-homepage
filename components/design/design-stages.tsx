"use client"

import { useState } from "react"
import {
  Search,
  FileText,
  ClipboardCheck,
  Layers,
  ChevronDown,
} from "lucide-react"

const stages = [
  {
    id: "preproject",
    index: "01",
    icon: Search,
    title: "Предпроектные работы",
    subtitle: "Фундамент всего проекта",
    lead: "Перед тем как положить первый чертёж, мы изучаем участок, нормативы и технические ограничения. Ошибка на этом этапе обходится в разы дороже, чем всё проектирование.",
    deliverables: [
      "Инженерно-геологические изыскания",
      "Инженерно-геодезические изыскания",
      "Инженерно-экологические изыскания",
      "Инженерно-гидрометеорологические изыскания",
      "Градостроительный анализ и ГПЗУ",
      "Технические условия на подключение к сетям",
      "Предпроектная документация (ЭП / ТЭО)",
      "Согласование с надзорными органами",
    ],
    note: "Результат: полная исходно-разрешительная документация, без которой невозможно начать стадию П.",
    duration: "4–8 недель",
    image: "/images/design-survey.jpg",
  },
  {
    id: "stage-p",
    index: "02",
    icon: FileText,
    title: "Проект стадии П",
    subtitle: "Архитектурные и конструктивные решения",
    lead: "Стадия П — это основной проектный документ, который определяет облик объекта, конструктивную схему, инженерные системы и технологические решения. Именно он проходит экспертизу.",
    deliverables: [
      "Архитектурные решения (АР)",
      "Конструктивные и объёмно-планировочные решения (КР)",
      "Система электроснабжения (ЭС / ЭО)",
      "Водоснабжение и водоотведение (ВК)",
      "Отопление, вентиляция, кондиционирование (ОВ / ВК)",
      "Технологические решения (ТХ)",
      "Охрана окружающей среды (ООС)",
      "Пожарная безопасность (ПБ)",
      "Смета на строительство (объектная и сводная)",
      "BIM-модель объекта (Revit / Navisworks)",
    ],
    note: "Результат: комплект ПД по постановлению № 87, готовый к направлению на государственную или негосударственную экспертизу.",
    duration: "8–24 недели",
    image: null,
  },
  {
    id: "expertise",
    index: "03",
    icon: ClipboardCheck,
    title: "Экспертиза проекта",
    subtitle: "Государственная и негосударственная",
    lead: "Экспертиза — обязательный этап для объектов капитального строительства. Мы сопровождаем проект от подачи документов до получения положительного заключения и устраняем замечания экспертов в рабочем режиме.",
    deliverables: [
      "Подача документов в ГГЭ / НГЭ",
      "Взаимодействие с экспертами на всех этапах",
      "Ответы на замечания и корректировка ПД",
      "Контроль сроков прохождения экспертизы",
      "Получение положительного заключения экспертизы (ЗОС)",
      "Получение разрешения на строительство (РНС)",
      "Согласование с Роспотребнадзором, МЧС, Мосгорнаследием (при необходимости)",
    ],
    note: "Результат: положительное заключение экспертизы и разрешение на строительство на руках у заказчика.",
    duration: "60–90 дней (ГГЭ) / 30–45 дней (НГЭ)",
    image: null,
  },
  {
    id: "working-docs",
    index: "04",
    icon: Layers,
    title: "Рабочая документация",
    subtitle: "Детализация для строительной площадки",
    lead: "РД — это то, по чему реально строят. Рабочие чертежи, спецификации, сметы и схемы производства работ разрабатываются под конкретных поставщиков и технологии, применяемые на объекте.",
    deliverables: [
      "Рабочие чертежи всех разделов (АР, КР, ЭО, ВК, ОВ и т.д.)",
      "Узлы и детали конструкций",
      "Спецификации оборудования и материалов",
      "Локальные сметные расчёты (ЛСР)",
      "Проекты производства работ (ППР)",
      "Технологические карты",
      "Схемы производства работ (СПР)",
      "Исполнительная документация (шаблоны актов АОСР)",
    ],
    note: "Результат: полный комплект РД для строительства, тендерный пакет для подрядных организаций.",
    duration: "6–16 недель",
    image: "/images/design-docs.jpg",
  },
]

export function DesignStages() {
  const [open, setOpen] = useState<string | null>("preproject")

  return (
    <section
      id="stages"
      className="py-28 bg-[var(--navy-deep)]"
      aria-labelledby="stages-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[var(--divider)] pb-12">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              01 / Этапы проектирования
            </p>
            <h2
              id="stages-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
            >
              Четыре этапа —<br />один подрядчик
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm">
            Мы ведём объект через все стадии проектирования. Никаких пробелов в ответственности и потери информации при передаче.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-px bg-[var(--divider)]">
          {stages.map((stage) => {
            const Icon = stage.icon
            const isOpen = open === stage.id

            return (
              <div key={stage.id} className="bg-[var(--navy-deep)]">
                <button
                  onClick={() => setOpen(isOpen ? null : stage.id)}
                  aria-expanded={isOpen}
                  aria-controls={`stage-panel-${stage.id}`}
                  className="w-full flex items-center gap-6 px-8 py-7 text-left group hover:bg-[var(--navy-card)] transition-colors duration-200 cursor-pointer"
                >
                  {/* Index */}
                  <span className="text-[var(--blue-brand)] font-black text-4xl lg:text-5xl leading-none shrink-0 w-16 tabular-nums">
                    {stage.index}
                  </span>

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 flex items-center justify-center shrink-0 transition-colors duration-200 ${
                      isOpen ? "bg-[var(--blue-brand)]" : "bg-[var(--navy-elevated)]"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={isOpen ? "text-white" : "text-[var(--blue-brand)]"}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Title */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[var(--text-primary)] font-bold text-xl lg:text-2xl leading-tight">
                      {stage.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">{stage.subtitle}</p>
                  </div>

                  {/* Duration badge */}
                  <span className="hidden md:block text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-3 py-1.5 shrink-0">
                    {stage.duration}
                  </span>

                  {/* Arrow */}
                  <ChevronDown
                    size={20}
                    className={`text-[var(--text-secondary)] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {/* Panel */}
                <div
                  id={`stage-panel-${stage.id}`}
                  role="region"
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-10 pt-2 border-t border-[var(--divider)]">
                    <div className="grid lg:grid-cols-2 gap-10 mt-6">
                      {/* Left */}
                      <div className="flex flex-col gap-6">
                        <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                          {stage.lead}
                        </p>

                        <div>
                          <p className="text-[var(--text-primary)] text-xs font-bold uppercase tracking-[0.2em] mb-4">
                            Что входит в состав:
                          </p>
                          <ul className="flex flex-col gap-3" role="list">
                            {stage.deliverables.map((item) => (
                              <li key={item} className="flex items-start gap-3">
                                <span
                                  className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--blue-brand)] shrink-0"
                                  aria-hidden="true"
                                />
                                <span className="text-[var(--text-secondary)] text-sm leading-relaxed">
                                  {item}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Result callout */}
                        <div className="bg-[var(--navy-elevated)] border-l-2 border-[var(--blue-brand)] px-5 py-4">
                          <p className="text-[var(--text-primary)] text-sm leading-relaxed font-medium">
                            {stage.note}
                          </p>
                        </div>

                        <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest">
                          Срок: <span className="text-[var(--blue-brand)] font-semibold">{stage.duration}</span>
                        </p>
                      </div>

                      {/* Right — image or placeholder grid */}
                      {stage.image ? (
                        <div className="relative overflow-hidden h-72 lg:h-auto">
                          <img
                            src={stage.image}
                            alt={stage.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/60 to-transparent" />
                        </div>
                      ) : (
                        <div className="grid grid-cols-2 gap-px bg-[var(--divider)] h-fit">
                          {[
                            { label: "Раздел АР", sub: "Архитектура" },
                            { label: "Раздел КР", sub: "Конструктив" },
                            { label: "Раздел ИС", sub: "Инженерные сети" },
                            { label: "Раздел ТХ", sub: "Технология" },
                          ].map((r) => (
                            <div
                              key={r.label}
                              className="bg-[var(--navy-card)] px-6 py-8 flex flex-col justify-end"
                            >
                              <p className="text-[var(--blue-brand)] font-black text-xl">{r.label}</p>
                              <p className="text-[var(--text-secondary)] text-xs mt-1">{r.sub}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
