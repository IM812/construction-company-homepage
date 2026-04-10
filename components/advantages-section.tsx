const advantages = [
  {
    number: "01",
    title: "Полный цикл",
    description:
      "Проектирование, строительство, инженерные сети, надзор — всё в одном договоре. Не нужно искать и согласовывать отдельных подрядчиков.",
  },
  {
    number: "02",
    title: "Один подрядчик",
    description:
      "Единая точка ответственности за весь проект. Никаких взаимных претензий между смежниками, которые перекладывают вину друг на друга.",
  },
  {
    number: "03",
    title: "Снижение рисков",
    description:
      "Фиксированная цена в договоре, штрафные санкции за просрочку, страхование СМР. За 15 лет — ни одного сорванного срока.",
  },
  {
    number: "04",
    title: "Объекты 5–60 млн ₽",
    description:
      "Работаем с проектами в диапазоне от небольших объектов до крупных промышленных и коммерческих комплексов. Расчёт — за 3 рабочих дня.",
  },
  {
    number: "05",
    title: "Собственный ресурс",
    description:
      "400+ рабочих в штате, 80 единиц спецтехники. Независимость от рынка субподрядчиков — ни дефицит, ни рост цен не останавливают стройку.",
  },
  {
    number: "06",
    title: "BIM и допуски СРО",
    description:
      "3D-модель объекта ещё до выхода на площадку. Членство в НОПРИЗ, НОСТРОЙ, лицензия ФСБ, допуск к объектам КС-3.",
  },
]

export function AdvantagesSection() {
  return (
    <section id="advantages" className="py-28 bg-[var(--navy-card)]" aria-labelledby="advantages-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[var(--divider)] pb-12">
          <div>
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
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm">
            Конкретные условия, прописанные в договоре — не маркетинговые обещания.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-[var(--divider)]">
          {advantages.map((adv) => (
            <div
              key={adv.number}
              className="border-r border-b border-[var(--divider)] p-8 hover:bg-[var(--navy-elevated)] transition-colors duration-300 group"
            >
              <p className="text-[var(--blue-brand)]/25 font-black text-6xl leading-none mb-6 group-hover:text-[var(--blue-brand)]/50 transition-colors">
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
