import Link from "next/link"
import { FileText, Building2, Wrench, Zap, ArrowRight } from "lucide-react"

const services = [
  {
    slug: "proektirovanie",
    icon: FileText,
    title: "Проектирование",
    description:
      "Архитектурное, конструктивное и инженерное проектирование полного цикла. Стадии П и РД, BIM-модель, прохождение экспертизы, получение разрешения на строительство.",
    items: ["Предпроектные работы", "Стадия П", "Государственная экспертиза", "Рабочая документация"],
  },
  {
    slug: "stroitelstvo",
    icon: Building2,
    title: "Строительство",
    description:
      "Промышленные объекты, коммерческая недвижимость, жилые комплексы. Собственный ресурс: 400+ рабочих, 80 единиц спецтехники. Контрактная ответственность за сроки и бюджет.",
    items: ["Промышленные объекты", "Коммерческая недвижимость", "Жилые комплексы", "Объекты 5–60 млн ₽"],
  },
  {
    slug: "rekonstruktsiya",
    icon: Wrench,
    title: "Реконструкция",
    description:
      "Капитальный ремонт, перепрофилирование, усиление несущих конструкций. Работаем без остановки действующего производства. Опыт на объектах класса КС-2 и КС-3.",
    items: ["Без остановки производства", "Усиление конструкций", "Перепрофилирование", "КС-2 и КС-3"],
  },
  {
    slug: "inzhenernye-seti",
    icon: Zap,
    title: "Инженерные сети",
    description:
      "Проектирование и монтаж всех разделов ИТМ: электроснабжение, водоснабжение и канализация, теплоснабжение, вентиляция, слаботочные системы, пожарная защита.",
    items: ["Электроснабжение", "ВК и теплоснабжение", "Вентиляция и кондиционирование", "Пожарная защита"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[var(--navy-deep)]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[var(--divider)] pb-12">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              01 / Услуги
            </p>
            <h2
              id="services-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
            >
              Полный цикл —<br />один подрядчик
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm">
            Закрываем все этапы строительного проекта в рамках одного договора. Вы работаете с одной командой от начала до конца.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)]">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-[var(--navy-deep)] hover:bg-[var(--navy-card)] p-10 group transition-colors duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-[var(--navy-elevated)] group-hover:bg-[var(--blue-brand)] flex items-center justify-center transition-colors duration-300">
                    <Icon size={24} className="text-[var(--blue-brand)] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <ArrowRight
                    size={20}
                    className="text-[var(--text-secondary)] opacity-0 group-hover:opacity-100 group-hover:text-[var(--blue-brand)] -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-[var(--text-primary)] font-bold text-2xl mb-4">
                  {service.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--divider)] pt-6">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[var(--text-secondary)] text-xs">
                      <span className="w-1 h-1 bg-[var(--blue-brand)] rounded-full shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="border border-[var(--divider)] hover:border-[var(--blue-brand)] text-[var(--text-primary)] font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center gap-3"
          >
            Все услуги
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
