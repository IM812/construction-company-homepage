import { X, CheckCircle2 } from "lucide-react"

const withoutUs = [
  "Вы тратите время на поиск и проверку проектировщика, строителя, сетевика — отдельно",
  "Ответственность размыта: каждый участник отвечает только за свой участок",
  "Вы лично контролируете каждого подрядчика — или никто не контролирует никого",
  "Один подрядчик сорвал сроки — весь проект стоит, бюджет растёт",
  "Дефект после сдачи: никто не признаёт вину, претензии ходят по кругу",
  "Шесть договоров, шесть гарантийных условий, шесть точек риска",
]

const withUs = [
  "Вы подписываете один договор — и получаете готовый объект",
  "Один ответственный за сроки, бюджет и качество на всех этапах",
  "Вам не нужно координировать подрядчиков — это наша работа",
  "Цена зафиксирована в договоре. Без пересмотра. Без сюрпризов.",
  "Гарантия 5 лет на все СМР по единому гарантийному паспорту",
  "Еженедельный отчёт: фото, КС-2, статус бюджета — без запросов с вашей стороны",
]

const weHandle = [
  { title: "Сбор исходных данных", desc: "Изыскания, технические условия от РСО, исходно-разрешительная документация — без вашего участия" },
  { title: "Проектирование", desc: "Стадии П и РД, BIM-модель, экспертиза, разрешение на строительство — в срок по контракту" },
  { title: "Согласования", desc: "РСО, Мосгоргеотрест, органы надзора — все переговоры ведём мы, вас не отвлекаем" },
  { title: "Строительство", desc: "400+ рабочих и 80 единиц техники в штате. Никаких «пока ищем бригаду»" },
  { title: "Инженерные сети", desc: "ОВиК, ВК, электроснабжение, пожарная защита — монтаж, пусконаладка, сдача" },
  { title: "Ввод в эксплуатацию", desc: "Госкомиссия, разрешение на ввод, полный пакет документации. Объект готов к работе." },
]

export function ClientValueSection() {
  return (
    <section
      id="client-value"
      className="py-16 sm:py-28 bg-[var(--navy-elevated)]"
      aria-labelledby="client-value-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16 border-b border-[var(--divider)] pb-8 sm:pb-12">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-3 sm:mb-4">
              04 / Ценность генподряда
            </p>
            <h2
              id="client-value-heading"
              className="text-[var(--text-primary)] font-black text-2xl sm:text-4xl lg:text-5xl leading-tight text-balance"
            >
              Вы получаете объект.<br />Не головную боль.
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-sm">
            Вам не нужно координировать подрядчиков. Это единственное принципиальное отличие генподряда — и оно меняет всё.
          </p>
        </div>

        {/* Comparison table */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)] mb-12 sm:mb-20">
          {/* Without us */}
          <div className="bg-[var(--navy-elevated)] p-6 sm:p-8 lg:p-10">
            <p className="text-[var(--text-secondary)] text-xs font-semibold uppercase tracking-[0.25em] mb-5 sm:mb-6 flex items-center gap-2">
              <X size={14} className="text-red-400" aria-hidden="true" />
              Без генподрядчика
            </p>
            <ul className="space-y-3 sm:space-y-4">
              {withoutUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={14} className="text-red-400/70 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* With us */}
          <div className="bg-[var(--navy-card)] p-6 sm:p-8 lg:p-10 border border-[var(--blue-brand)]/20">
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.25em] mb-5 sm:mb-6 flex items-center gap-2">
              <CheckCircle2 size={14} aria-hidden="true" />
              С генподрядчиком СтройГенПодряд
            </p>
            <ul className="space-y-3 sm:space-y-4">
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
          <h3 className="text-[var(--text-primary)] font-black text-xl sm:text-2xl lg:text-3xl mb-6 sm:mb-10 border-b border-[var(--divider)] pb-4 sm:pb-6">
            Что мы берём на себя
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--divider)]">
            {weHandle.map((item, i) => (
              <div
                key={item.title}
                className="bg-[var(--navy-elevated)] hover:bg-[var(--navy-card)] p-5 sm:p-7 transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2 sm:mb-3">
                  <span
                    className="text-[var(--blue-brand)] font-black text-xs w-7 h-7 border border-[var(--blue-brand)]/40 flex items-center justify-center shrink-0"
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="text-[var(--text-primary)] font-bold text-sm sm:text-base">{item.title}</h4>
                </div>
                <p className="text-[var(--text-secondary)] text-xs sm:text-sm leading-relaxed pl-10">
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
