"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { services } from "@/lib/services-data"
import type { ServiceData } from "@/lib/services-data"
import { ServiceModal } from "@/components/service-modal"

export function ServicesCatalogue() {
  const [activeService, setActiveService] = useState<ServiceData | null>(null)

  return (
    <>
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

        {/* What client gets + What we handle */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)] mb-20">
          {/* What client gets */}
          <div className="bg-[var(--navy-card)] p-10 border border-[var(--blue-brand)]/20">
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              Что получает клиент
            </p>
            <ul className="space-y-4">
              {[
                "Один подрядчик вместо четырёх — проектировщик, строитель, сетевик, надзор",
                "Контроль всех этапов через единую точку ответственности",
                "Экономия времени: не нужно вести переговоры с каждым участником",
                "Снижение рисков: бюджет и сроки фиксируются в одном договоре",
                "Готовый объект с полным пакетом исполнительной документации",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={14} className="text-[var(--blue-brand)] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-[var(--text-primary)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* What we handle */}
          <div className="bg-[var(--navy-deep)] p-10">
            <p className="text-[var(--text-secondary)] text-xs font-semibold uppercase tracking-[0.3em] mb-6">
              Что мы берём на себя
            </p>
            <ul className="space-y-4">
              {[
                "Сбор исходных данных и технических условий от РСО",
                "Проектирование стадий П и РД, прохождение экспертизы",
                "Согласования с органами надзора и техническим заказчиком",
                "Строительство и монтаж инженерных сетей собственным ресурсом",
                "Сдача объекта: госкомиссия, разрешение на ввод, документация",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <ArrowRight size={14} className="text-[var(--blue-brand)] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Process steps */}
        <div className="mb-20">
          <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-8">
            Этапы работы
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-[var(--divider)]">
            {[
              { num: "01", label: "Заявка", desc: "Обсуждение объекта, выезд на площадку" },
              { num: "02", label: "Расчёт", desc: "Смета с разбивкой по видам работ" },
              { num: "03", label: "Проект", desc: "Стадии П и РД, экспертиза, разрешение" },
              { num: "04", label: "Строительство", desc: "СМР + инженерные сети по графику" },
              { num: "05", label: "Сдача", desc: "Ввод в эксплуатацию, документация" },
            ].map((step, i, arr) => (
              <div key={step.num} className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-7 transition-colors duration-300 relative">
                <span className="text-[var(--blue-brand)]/20 font-black text-5xl leading-none block mb-4" aria-hidden="true">{step.num}</span>
                <p className="text-[var(--text-primary)] font-bold text-base mb-2">{step.label}</p>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed">{step.desc}</p>
                {i < arr.length - 1 && (
                  <ArrowRight size={14} className="text-[var(--blue-brand)]/40 absolute -right-2 top-1/2 -translate-y-1/2 hidden sm:block z-10" aria-hidden="true" />
                )}
              </div>
            ))}
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
                      <button
                        onClick={() => setActiveService(service)}
                        className="flex-1 lg:flex-none bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-6 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                      >
                        Подробнее
                        <ArrowRight size={16} aria-hidden="true" />
                      </button>
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

    <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </>
  )
}
