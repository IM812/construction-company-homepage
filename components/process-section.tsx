const steps = [
  {
    step: "01",
    label: "Заявка",
    duration: "День 1–2",
    title: "Заявка и первичная консультация",
    description: "Принимаем запрос, изучаем исходные данные. Назначаем встречу с техническим директором. Выезд на объект в пределах МО — бесплатно.",
  },
  {
    step: "02",
    label: "Расчёт",
    duration: "3–5 рабочих дней",
    title: "Технико-коммерческое предложение",
    description: "Готовим развёрнутую смету с разбивкой по разделам. Фиксируем стоимость, контрактные сроки и этапы финансирования.",
  },
  {
    step: "03",
    label: "Проект",
    duration: "По согласованному графику",
    title: "Проектирование",
    description: "Разработка ПД и РД собственными силами. BIM-модель объекта до начала строительства. Прохождение экспертизы. Получение разрешения на строительство.",
  },
  {
    step: "04",
    label: "Строительство",
    duration: "По контрактному графику",
    title: "Строительство и монтаж",
    description: "Мобилизация ресурсов: рабочие, техника, материалы. Еженедельная отчётность с фотофиксацией. Авторский и технический надзор.",
  },
  {
    step: "05",
    label: "Сдача",
    duration: "Под ключ",
    title: "Ввод в эксплуатацию",
    description: "Прохождение государственной комиссии. Получение разрешения на ввод. Передача исполнительной документации. Гарантия на СМР — 5 лет.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 border-b border-[#e2e6ef] pb-10">
          <div>
            <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              03 / Процесс
            </p>
            <h2 id="process-heading" className="text-[#0f1c3a] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              Как мы работаем
            </h2>
          </div>
          <p className="text-[#5a6880] text-lg leading-relaxed max-w-sm">
            Прозрачный процесс на каждом этапе.
          </p>
        </div>

        {/* Flow strip */}
        <div className="flex flex-col md:flex-row items-stretch gap-px bg-[#e2e6ef] mb-14">
          {steps.map((step, index) => (
            <div key={step.step} className="flex-1 bg-white flex flex-col md:flex-row items-center gap-3 px-5 py-4">
              <span className="text-[#1a5fd4] font-black text-base shrink-0">{step.step}</span>
              <span className="text-[#0f1c3a] font-bold text-xs uppercase tracking-wide text-center md:text-left">{step.label}</span>
              {index < steps.length - 1 && (
                <span className="hidden md:block ml-auto text-[#c8d0de] text-xl font-light" aria-hidden="true">›</span>
              )}
            </div>
          ))}
        </div>

        {/* Detail cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#e2e6ef]">
          {steps.map((step) => (
            <div key={step.step} className="bg-white hover:bg-[#f7f8fa] p-6 transition-colors duration-300 group">
              <div className="w-11 h-11 bg-[#e8f0fd] border border-[#1a5fd4]/20 group-hover:border-[#1a5fd4] flex items-center justify-center mb-5 transition-colors duration-300">
                <span className="text-[#1a5fd4] font-black text-sm">{step.step}</span>
              </div>
              <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-widest mb-2">{step.duration}</p>
              <h3 className="text-[#0f1c3a] font-bold text-sm mb-3 leading-tight">{step.title}</h3>
              <p className="text-[#5a6880] text-xs leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
