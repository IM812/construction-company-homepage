import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services-data"

export function ServicesGrid() {
  return (
    <section className="py-28 bg-[var(--navy-deep)]" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 border-b border-[var(--divider)] pb-12">
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              Услуги
            </p>
            <h1
              id="services-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
            >
              Полный спектр<br />строительных услуг
            </h1>
          </div>
          <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-sm">
            Берёмся за объект любой сложности и несём полную ответственность от первого чертежа до ввода в эксплуатацию.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--divider)]">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-[var(--navy-deep)] hover:bg-[var(--navy-card)] p-8 group transition-colors duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 bg-[var(--navy-elevated)] group-hover:bg-[var(--blue-brand)] flex items-center justify-center transition-colors duration-300">
                    <Icon size={22} className="text-[var(--blue-brand)] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                  </div>
                  <span className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-2 py-1">
                    {service.tag}
                  </span>
                </div>
                <h3 className="text-[var(--text-primary)] font-bold text-xl mb-3 flex items-center justify-between">
                  {service.title}
                  <ArrowRight 
                    size={18} 
                    className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300" 
                    aria-hidden="true" 
                  />
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {service.shortDescription}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
