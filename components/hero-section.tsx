import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Главный экран"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-construction.jpg"
          alt="Строительство крупного объекта"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[var(--navy-deep)]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)] via-[var(--navy-deep)]/70 to-transparent" />
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-[var(--divider)] bg-[var(--navy-deep)]/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "15+",    label: "Лет на рынке" },
            { value: "230+",   label: "Объектов сдано" },
            { value: "₽48 млрд", label: "Объём выполненных работ" },
            { value: "0",      label: "Срывов сроков" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="py-6 px-4 border-r border-[var(--divider)] last:border-r-0"
            >
              <p className="text-[var(--blue-brand)] font-black text-2xl lg:text-3xl leading-none">
                {stat.value}
              </p>
              <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-40">
        <div className="max-w-3xl">
          <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            Генеральный подрядчик · Москва
          </p>
          <h1 className="text-[var(--text-primary)] font-black text-5xl md:text-6xl lg:text-7xl leading-[1.03] tracking-tight text-balance mb-6">
            Генподряд под ключ —{" "}
            <span className="text-[var(--blue-brand)]">от проектирования</span>{" "}
            до ввода в эксплуатацию
          </h1>
          <p className="text-[var(--text-secondary)] text-xl leading-relaxed max-w-2xl mb-4">
            Берём на себя весь цикл работ и координацию всех подрядчиков.
          </p>
          <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-xl mb-10">
            Промышленные, коммерческие и жилые объекты от 5 до 60 млн ₽. Один договор — полная ответственность. Работаем по всей России.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacts"
              className="group bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-[var(--text-primary)] font-bold text-base px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3"
            >
              Получить расчёт стоимости
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="border border-[var(--divider)] hover:border-[var(--blue-brand)] text-[var(--text-primary)] font-bold text-base px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
