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
      "Полный цикл проектирования собственными силами: предпроектные работы, стадии П и РД, BIM-модель. Сопровождение в государственной экспертизе, получение разрешения на строительство. Авторский надзор в ходе строительства.",
    items: ["Предпроектные работы и ТЭО", "Стадия П + BIM-модель", "Государственная экспертиза", "Рабочая документация (РД)"],
  },
  {
    slug: "stroitelstvo",
    icon: Building2,
    title: "Строительство",
    description:
      "Генеральный подряд на строительство промышленных, коммерческих и жилых объектов. Нулевой цикл, надземная часть, отделка. Собственный ресурс: 400+ рабочих, 80 единиц спецтехники. Фиксированная цена — без пересмотра бюджета.",
    items: ["Промышленные объекты", "Коммерческая недвижимость", "Жилые комплексы", "Объекты от 5 до 60 млн ₽"],
  },
  {
    slug: "rekonstruktsiya",
    icon: Wrench,
    title: "Реконструкция",
    description:
      "Капитальный ремонт, техническое перевооружение, усиление несущих конструкций. Работаем без остановки действующего производства. Обследование зданий, составление дефектных ведомостей, разработка ПОС. Опыт на объектах КС-2 и КС-3.",
    items: ["Обследование конструкций", "Усиление и перепланировка", "Работа без остановки производства", "КС-2 и КС-3"],
  },
  {
    slug: "inzhenernye-seti",
    icon: Zap,
    title: "Инженерные сети",
    description:
      "Проектирование и монтаж всех разделов ИТМ: внутренние и наружные инженерные системы. Пусконаладочные работы, сдача заказчику с полным комплектом исполнительной документации. Технологическое присоединение к централизованным сетям.",
    items: ["Отопление, вентиляция, ВК", "Электроснабжение, слаботочные", "Наружные сети и ГНБ", "Пожарная защита и автоматика"],
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
    <section id="services" className="py-16 sm:py-28 bg-[var(--navy-deep)]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16 border-b border-[var(--divider)] pb-8 sm:pb-12">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-3 sm:mb-4">
              01 / Услуги
            </p>
            <h2
              id="services-heading"
              className="text-[var(--text-primary)] font-black text-2xl sm:text-4xl lg:text-5xl leading-tight text-balance"
            >
              Полный цикл —<br />один подрядчик
            </h2>
          </div>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed max-w-sm">
            Закрываем все этапы строительного проекта в рамках одного договора. Вы работаете с одной командой от начала до конца.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)]">
          {localServices.map((service) => {
            const Icon = service.icon
            return (
              <button
                key={service.slug}
                onClick={() => openModal(service.slug)}
                className="bg-[var(--navy-deep)] hover:bg-[var(--navy-card)] p-10 group transition-colors duration-300 flex flex-col text-left cursor-pointer"
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
              </button>
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

    <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </>
  )
}
