import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Главный экран"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-construction.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0f1c3a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3a]/90 via-[#0f1c3a]/60 to-transparent" />
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-[#0f1c3a]/90 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4">
          {[
            { value: "15+",      label: "Лет на рынке" },
            { value: "230+",     label: "Объектов сдано" },
            { value: "₽48 млрд", label: "Объём работ" },
            { value: "0",        label: "Срывов сроков" },
          ].map((stat) => (
            <div key={stat.label} className="py-5 px-4 border-r border-white/10 last:border-r-0">
              <p className="text-[#1a5fd4] font-black text-2xl lg:text-3xl leading-none">{stat.value}</p>
              <p className="text-white/60 text-xs uppercase tracking-widest mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-44">
        <div className="max-w-3xl">
          <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
            Генеральный подрядчик · Москва · СРО НОСТРОЙ / НОПРИЗ
          </p>
          <h1 className="text-white font-black text-4xl md:text-5xl lg:text-7xl leading-[1.05] tracking-tight text-balance mb-6">
            Вы получаете готовый объект.{" "}
            <span className="text-[#1a5fd4]">Мы берём</span>{" "}
            на себя всё остальное.
          </h1>
          <p className="text-white/90 text-lg sm:text-xl leading-relaxed max-w-2xl mb-3 font-medium">
            Один договор закрывает весь цикл: проектирование, строительство, инженерные сети, ввод в эксплуатацию.
          </p>
          <p className="text-white/60 text-base leading-relaxed max-w-xl mb-8">
            Вам не нужно искать проектировщика, нанимать строителей и гонять каждого по срокам. Это наша работа.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-10">
            {[
              "230+ объектов сдано под ключ",
              "0 срывов контрактных сроков",
              "Смета фиксируется в договоре",
              "Гарантия СМР — 5 лет",
            ].map((fact) => (
              <span key={fact} className="flex items-center gap-2 text-white/70 text-sm">
                <span className="w-1.5 h-1.5 bg-[#1a5fd4] rounded-full shrink-0" aria-hidden="true" />
                {fact}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contacts"
              className="group bg-[#1a5fd4] hover:bg-[#1450b8] text-white font-bold text-base px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3"
            >
              Получить расчёт за 3 дня
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              href="/services"
              className="border border-white/30 hover:border-[#1a5fd4] text-white hover:text-white font-bold text-base px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-3"
            >
              Все услуги
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
