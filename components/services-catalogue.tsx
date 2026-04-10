import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { services } from "@/lib/services-data"

export function ServicesCatalogue() {
  return (
    <section className="py-28 bg-[var(--navy-deep)]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Intro */}
        <div className="mb-20 border-b border-[var(--divider)] pb-16">
          <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            Каталог услуг
          </p>
          <h1
            id="services-heading"
            className="text-[var(--text-primary)] font-black text-4xl lg:text-6xl leading-tight text-balance mb-8"
          >
            Генподряд под ключ —<br />от проектирования до сдачи объекта
          </h1>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-[var(--text-primary)] text-xl font-semibold leading-relaxed mb-4">
                Берём на себя весь цикл работ и координацию всех подрядчиков
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                Мы — генеральный подрядчик с 15-летним опытом. Выполняем проектирование, строительство, 
                инженерные сети, реконструкцию в рамках одного договора. Один подрядчик — единая ответственность 
                за весь проект от начала до ввода в эксплуатацию.
              </p>
            </div>
            <div className="space-y-4">
              {[
                "Полный цикл — проектирование, строительство, инженерные сети",
                "Фиксированная цена в договоре без скрытых доплат",
                "Собственный ресурс: 400+ рабочих, 80 единиц спецтехники",
                "Допуски СРО НОПРИЗ, НОСТРОЙ, лицензия ФСБ",
                "Гарантия на СМР — 5 лет, гарантия сроков — в договоре",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 size={20} className="text-[var(--blue-brand)] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Services list */}
        <div className="space-y-1">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <article
                key={service.slug}
                className="bg-[var(--navy-card)] border border-[var(--divider)] hover:border-[var(--blue-brand)]/50 transition-colors duration-300 group"
              >
                <div className="p-8 lg:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-12">
                    
                    {/* Left: Icon + Number + Title */}
                    <div className="lg:w-80 shrink-0">
                      <div className="flex items-center gap-4 mb-5">
                        <div className="w-14 h-14 bg-[var(--navy-elevated)] group-hover:bg-[var(--blue-brand)] flex items-center justify-center transition-colors duration-300 border border-[var(--divider)] group-hover:border-[var(--blue-brand)]">
                          <Icon 
                            size={24} 
                            className="text-[var(--blue-brand)] group-hover:text-white transition-colors duration-300" 
                            aria-hidden="true" 
                          />
                        </div>
                        <span className="text-[var(--blue-brand)]/30 font-black text-4xl leading-none">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h2 className="text-[var(--text-primary)] font-black text-2xl lg:text-3xl leading-tight mb-3">
                        {service.title}
                      </h2>
                      <span className="inline-block text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-3 py-1.5">
                        {service.tag}
                      </span>
                    </div>

                    {/* Middle: Description + Features */}
                    <div className="flex-1">
                      <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
                        {service.shortDescription}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-6">
                        {service.features.map((feature) => (
                          <div key={feature.title}>
                            <h3 className="text-[var(--text-primary)] font-bold text-sm mb-1.5 flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-[var(--blue-brand)] rounded-full shrink-0" aria-hidden="true" />
                              {feature.title}
                            </h3>
                            <p className="text-[var(--text-secondary)] text-xs leading-relaxed">
                              {feature.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: CTA */}
                    <div className="lg:w-48 shrink-0 flex lg:flex-col gap-3">
                      <Link
                        href={`/services/${service.slug}`}
                        className="flex-1 lg:flex-none bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-6 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap"
                      >
                        Подробнее
                        <ArrowRight size={16} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-[var(--divider)] text-center">
          <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Не нашли нужную услугу? Напишите нам — мы решаем нестандартные задачи и готовы обсудить 
            индивидуальные условия для вашего проекта.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-3 border border-[var(--divider)] hover:border-[var(--blue-brand)] text-[var(--text-primary)] font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200"
          >
            Связаться с нами
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
