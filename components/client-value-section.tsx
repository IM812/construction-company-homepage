import { X, CheckCircle2 } from "lucide-react"

const withoutUs = [
  "Поиск и проверка проектировщика, генподрядчика, субподрядчиков по сетям",
  "Согласование интерфейсов между участниками — ответственность размыта",
  "Контроль каждого подрядчика вручную, риск срыва сроков",
  "Пересмотр бюджета при смене или провале одного из подрядчиков",
  "Претензионная работа: кто виноват в дефекте — непонятно",
  "Отдельные договоры с каждым участником, разные гарантийные условия",
]

const withUs = [
  "Один договор генподряда охватывает весь объём работ",
  "Единая точка ответственности за сроки, бюджет и качество",
  "Координацию всех подрядчиков и субподрядчиков берём на себя",
  "Фиксированный бюджет — пересмотр цены в одностороннем порядке невозможен",
  "Гарантия 5 лет на СМР, единый гарантийный паспорт объекта",
  "Еженедельная отчётность: фотофиксация, КС-2, финансовый мониторинг",
]

const weHandle = [
  { title: "Сбор исходных данных", desc: "Инженерные изыскания, технические условия, анализ участка и исходно-разрешительная документация" },
  { title: "Проектирование", desc: "Стадии П и РД, BIM-модель, прохождение экспертизы, получение разрешения на строительство" },
  { title: "Согласования", desc: "Взаимодействие с РСО, Мосгоргеотрест, органами надзора и техническим заказчиком" },
  { title: "Строительство", desc: "Нулевой цикл, надземная часть, отделка — собственным ресурсом без привлечения чужих бригад" },
  { title: "Инженерные сети", desc: "ОВиК, ВК, электроснабжение, слаботочные системы, пожарная защита — монтаж и пусконаладка" },
  { title: "Сдача объекта", desc: "Госкомиссия, разрешение на ввод, исполнительная документация, гарантийный паспорт объекта" },
]

export function ClientValueSection() {
  return (
    <section
      id="client-value"
      className="py-28 bg-[var(--navy-elevated)]"
      aria-labelledby="client-value-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[var(--divider)] pb-12">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              04 / Ценность генподряда
            </p>
            <h2
              id="client-value-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
            >
              Что получает клиент,<br />работая с нами
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm">
            Генподряд снимает с заказчика координацию всех участников строительного проекта. Ниже — конкретная разница.
          </p>
        </div>

        {/* Comparison table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)] mb-20">
          {/* Without us */}
          <div className="bg-[var(--navy-elevated)] p-8 lg:p-10">
            <p className="text-[var(--text-secondary)] text-xs font-semibold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <X size={14} className="text-red-400" aria-hidden="true" />
              Без генподрядчика
            </p>
            <ul className="space-y-4">
              {withoutUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={14} className="text-red-400/70 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With us */}
          <div className="bg-[var(--navy-card)] p-8 lg:p-10 border border-[var(--blue-brand)]/20">
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <CheckCircle2 size={14} aria-hidden="true" />
              С генподрядчиком СтройГенПодряд
            </p>
            <ul className="space-y-4">
              {withUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-[var(--blue-brand)] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-[var(--text-primary)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What we handle */}
        <div>
          <h3 className="text-[var(--text-primary)] font-black text-2xl lg:text-3xl mb-10 border-b border-[var(--divider)] pb-6">
            Что мы берём на себя
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--divider)]">
            {weHandle.map((item, i) => (
              <div
                key={item.title}
                className="bg-[var(--navy-elevated)] hover:bg-[var(--navy-card)] p-7 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="text-[var(--blue-brand)] font-black text-xs w-7 h-7 border border-[var(--blue-brand)]/40 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-[var(--text-primary)] font-bold text-base">{item.title}</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed pl-10">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
