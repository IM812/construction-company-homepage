const steps = [
  {
    step: "01",
    label: "Заявка",
    duration: "День 1–2",
    title: "Заявка и первичная консультация",
    description:
      "Принимаем запрос, изучаем исходные данные. Назначаем встречу с техническим директором. Выезд на объект в пределах МО — бесплатно. Определяем состав работ и формат сотрудничества.",
  },
  {
    step: "02",
    label: "Расчёт",
    duration: "3–5 рабочих дней",
    title: "Технико-коммерческое предложение",
    description:
      "Готовим развёрнутую смету с разбивкой по разделам и видам работ. Фиксируем стоимость, контрактные сроки и этапы финансирования. Смета согласовывается и закрепляется в договоре.",
  },
  {
    step: "03",
    label: "Проект",
    duration: "По согласованному графику",
    title: "Проектирование",
    description:
      "Разработка ПД и РД собственными силами. BIM-модель объекта до начала строительства. Прохождение государственной или негосударственной экспертизы. Получение разрешения на строительство.",
  },
  {
    step: "04",
    label: "Строительство",
    duration: "По контрактному графику",
    title: "Строительство и монтаж",
    description:
      "Мобилизация ресурсов: рабочие, техника, материалы. Строительно-монтажные работы по проекту. Еженедельная отчётность с фотофиксацией. Авторский и технический надзор на каждом этапе.",
  },
  {
    step: "05",
    label: "Сдача",
    duration: "Под ключ",
    title: "Ввод в эксплуатацию",
    description:
      "Прохождение государственной комиссии. Получение разрешения на ввод в эксплуатацию. Передача полного комплекта исполнительной документации. Гарантийные обязательства на СМР — 5 лет.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-[var(--navy-deep)]" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[var(--divider)] pb-12">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              03 / Процесс
            </p>
            <h2
              id="process-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
            >
              Как мы работаем
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm">
            Прозрачный процесс на каждом этапе. Вы всегда знаете, что происходит на объекте.
          </p>
        </div>

        {/* Flow strip */}
        <div className="flex flex-col md:flex-row items-stretch gap-px bg-[var(--divider)] mb-16">
          {steps.map((step, index) => (
            <div
              key={step.step}
              className="flex-1 bg-[var(--navy-deep)] flex flex-col md:flex-row items-center gap-3 px-6 py-5"
            >
              <span className="text-[var(--blue-brand)] font-black text-lg shrink-0">{step.step}</span>
              <span className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wide text-center md:text-left">
                {step.label}
              </span>
              {index < steps.length - 1 && (
                <span className="hidden md:block ml-auto text-[var(--divider)] text-xl font-light" aria-hidden="true">›</span>
              )}
            </div>
          ))}
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[var(--divider)]">
          {steps.map((step) => (
            <div
              key={step.step}
              className="bg-[var(--navy-deep)] hover:bg-[var(--navy-card)] p-6 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-[var(--navy-elevated)] border border-[var(--blue-brand)]/30 group-hover:border-[var(--blue-brand)] flex items-center justify-center mb-5 transition-colors duration-300">
                <span className="text-[var(--blue-brand)] font-black text-base">{step.step}</span>
              </div>
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest mb-2">
                {step.duration}
              </p>
              <h3 className="text-[var(--text-primary)] font-bold text-sm mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
