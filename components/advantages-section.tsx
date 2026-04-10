const advantages = [
  {
    number: "01",
    title: "Единая ответственность",
    description:
      "Один договор — одна компания отвечает за всё. Никаких перекладываний вины между субподрядчиками.",
  },
  {
    number: "02",
    title: "Фиксированная цена",
    description:
      "Смета закрепляется в договоре. Никаких скрытых доплат и пересмотра бюджета в процессе строительства.",
  },
  {
    number: "03",
    title: "Гарантия сроков",
    description:
      "Штрафные санкции за просрочку прописаны в договоре. За 15 лет — ни одного сорванного срока.",
  },
  {
    number: "04",
    title: "Собственный ресурс",
    description:
      "400+ рабочих в штате, 80 единиц собственной спецтехники. Независимость от субподрядчиков.",
  },
  {
    number: "05",
    title: "BIM-проектирование",
    description:
      "3D-модель объекта до начала строительства. Все коллизии устранены на этапе проекта.",
  },
  {
    number: "06",
    title: "Допуски и лицензии",
    description:
      "Членство в СРО, все необходимые допуски и лицензии. Допускаемся к объектам любого класса ответственности.",
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-28 bg-[var(--navy-card)]" aria-labelledby="advantages-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            02 / Преимущества
          </p>
          <h2
            id="advantages-heading"
            className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
          >
            Почему выбирают нас
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[var(--divider)]">
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="border-r border-b border-[var(--divider)] p-8 hover:bg-[var(--navy-elevated)] transition-colors duration-300 group"
            >
              <p className="text-[var(--blue-brand)]/30 font-black text-5xl leading-none mb-6 group-hover:text-[var(--blue-brand)]/60 transition-colors">
                {adv.number}
              </p>
              <h3 className="text-[var(--text-primary)] font-bold text-lg mb-3">
                {adv.title}
              </h3>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
