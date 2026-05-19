"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, Building2, Wrench, Zap, ArrowRight } from "lucide-react"
import { services as allServices } from "@/lib/services-data"
import type { ServiceData } from "@/lib/services-data"
import { ServiceModal } from "@/components/service-modal"

const localServices = [
  {
    slug: "proektirovanie",
    icon: FileText,
    title: "Проектирование",
    description:
      "Полный цикл проектирования собственными силами: предпроектные работы, стадии П и РД, BIM-модель. Сопровождение в государственной экспертизе, получение разрешения на строительство.",
    items: ["Предпроектные работы и ТЭО", "Стадия П + BIM-модель", "Государственная экспертиза", "Рабочая документация (РД)"],
  },
  {
    slug: "stroitelstvo",
    icon: Building2,
    title: "Строительство",
    description:
      "Генеральный подряд на строительство промышленных, коммерческих и жилых объектов. Нулевой цикл, надземная часть, отделка. Фиксированная цена — без пересмотра бюджета.",
    items: ["Промышленные объекты", "Коммерческая недвижимость", "Жилые комплексы", "От 5 до 60 млн ₽"],
  },
  {
    slug: "rekonstruktsiya",
    icon: Wrench,
    title: "Реконструкция",
    description:
      "Капитальный ремонт, техническое перевооружение, усиление несущих конструкций. Работаем без остановки действующего производства. Обследование зданий, ПОС.",
    items: ["Обследование конструкций", "Усиление и перепланировка", "Без остановки производства", "КС-2 и КС-3"],
  },
  {
    slug: "inzhenernye-seti",
    icon: Zap,
    title: "Инженерные сети",
    description:
      "Проектирование и монтаж всех разделов ИТМ: внутренние и наружные инженерные системы. Пусконаладочные работы, технологическое присоединение.",
    items: ["Отопление, вентиляция, ВК", "Электроснабжение, слаботочные", "Наружные сети и ГНБ", "Пожарная защита"],
  },
]

export function ServicesSection() {
  const [activeService, setActiveService] = useState<ServiceData | null>(null)

  const openModal = (slug: string) => {
    const found = allServices.find((s) => s.slug === slug) ?? null
    setActiveService(found)
  }

  return (
    <>
      <section id="services" className="py-20 sm:py-28 bg-[#0f1c3a]" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 border-b border-white/10 pb-10">
            <div>
              <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                01 / Услуги
              </p>
              <h2
                id="services-heading"
                className="text-white font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance"
              >
                Полный цикл —<br />один подрядчик
              </h2>
            </div>
            <p className="text-white/60 text-lg leading-relaxed max-w-sm">
              Закрываем все этапы строительного проекта в рамках одного договора.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/10">
            {localServices.map((service) => {
              const Icon = service.icon
              return (
                <button
                  key={service.slug}
                  onClick={() => openModal(service.slug)}
                  className="bg-[#0f1c3a] hover:bg-[#162240] p-8 sm:p-10 group transition-colors duration-300 flex flex-col text-left cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 bg-white/10 group-hover:bg-[#1a5fd4] flex items-center justify-center transition-colors duration-300">
                      <Icon size={24} className="text-[#1a5fd4] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <ArrowRight
                      size={20}
                      className="text-white/30 opacity-0 group-hover:opacity-100 group-hover:text-[#1a5fd4] -translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-white font-bold text-2xl mb-4">{service.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-8 flex-1">{service.description}</p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white/50 text-xs">
                        <span className="w-1 h-1 bg-[#1a5fd4] rounded-full shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </button>
              )
            })}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="border border-white/20 hover:border-[#1a5fd4] text-white font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200 flex items-center gap-3"
            >
              Все услуги
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </>
  )
}
