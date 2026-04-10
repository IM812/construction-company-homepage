import { CheckSquare, Clock, Eye, BarChart2 } from "lucide-react"

const values = [
  {
    icon: CheckSquare,
    title: "Результат под ключ",
    description:
      "Сдаём объект с полным комплектом исполнительной документации, разрешением на ввод и готовностью к немедленной эксплуатации.",
  },
  {
    icon: Clock,
    title: "Экономия времени",
    description:
      "Вам не нужно вести переговоры с проектировщиками, строителями и инженерами отдельно. Один звонок — один договор — один ответственный.",
  },
  {
    icon: Eye,
    title: "Контроль на каждом этапе",
    description:
      "Еженедельные отчёты с фотофиксацией, доступ к ходу работ. Технический директор ведёт объект лично от заявки до сдачи.",
  },
  {
    icon: BarChart2,
    title: "Прозрачность бюджета",
    description:
      "Смета с разбивкой по позициям фиксируется в договоре. Без скрытых расходов и пересмотра стоимости в процессе строительства.",
  },
]

export function ClientValueSection() {
  return (
    <section
      id="client-value"
      className="py-28 bg-[var(--navy-elevated)]"
      aria-labelledby="client-value-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[var(--divider)] pb-12">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              04 / Что вы получаете
            </p>
            <h2
              id="client-value-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
            >
              Что получает<br />заказчик
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm">
            Не абстрактные обещания — конкретные результаты, закреплённые в договоре.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--divider)]">
          {values.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="bg-[var(--navy-elevated)] hover:bg-[var(--navy-card)] p-8 group transition-colors duration-300"
              >
                <div className="w-12 h-12 bg-[var(--navy-deep)] flex items-center justify-center mb-6 group-hover:bg-[var(--blue-brand)] transition-colors duration-300">
                  <Icon
                    size={22}
                    className="text-[var(--blue-brand)] group-hover:text-white transition-colors duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-[var(--text-primary)] font-bold text-lg mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
