const steps = [
  {
    step: "01",
    title: "Заявка и консультация",
    duration: "День 1",
    description:
      "Принимаем запрос, назначаем встречу с техническим директором. Бесплатный выезд на объект в пределах МО.",
  },
  {
    step: "02",
    title: "Технико-коммерческое предложение",
    duration: "3–5 дней",
    description:
      "Детальная смета, схема финансирования, предварительный календарный план. Фиксируем все ключевые параметры.",
  },
  {
    step: "03",
    title: "Проектирование",
    duration: "По согласованному графику",
    description:
      "Разработка ПД и РД, BIM-модель объекта, прохождение экспертизы, получение разрешения на строительство.",
  },
  {
    step: "04",
    title: "Строительство",
    duration: "По контрактному графику",
    description:
      "Мобилизация ресурсов, строительство с еженедельной отчётностью. Онлайн-доступ к ходу работ через личный кабинет.",
  },
  {
    step: "05",
    title: "Контроль качества",
    duration: "На всех этапах",
    description:
      "Авторский и технический надзор, входной контроль материалов, испытания конструкций согласно ГОСТ и СП.",
  },
  {
    step: "06",
    title: "Сдача и ввод в эксплуатацию",
    duration: "Под ключ",
    description:
      "Прохождение государственной комиссии, получение разрешения на ввод, передача исполнительной документации.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-28 bg-[var(--navy-deep)]" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
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

        <div className="relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-[var(--divider)]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-0">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative flex flex-col lg:border-r border-[var(--divider)] last:border-r-0 p-6 hover:bg-[var(--navy-card)] transition-colors duration-300"
              >
                {/* Step number circle */}
                <div className="relative z-10 w-16 h-16 bg-[var(--navy-deep)] border-2 border-[var(--blue-brand)] flex items-center justify-center mb-6 shrink-0">
                  <span className="text-[var(--blue-brand)] font-black text-lg">{step.step}</span>
                </div>

                <div className="flex-1">
                  <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest mb-2">
                    {step.duration}
                  </p>
                  <h3 className="text-[var(--text-primary)] font-bold text-base mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
