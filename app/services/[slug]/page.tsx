import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowRight, CheckCircle2, Clock, FileText, Building2 } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { ServiceFaq } from "@/components/service-faq"
import { getServiceBySlug, services } from "@/lib/services-data"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) notFound()

  const Icon = service.icon

  return (
    <SiteLayout>
      <div className="pt-24">

        {/* ── Hero ── */}
        <section className="py-20 lg:py-28 bg-[var(--navy-deep)] border-b border-[var(--divider)]" aria-labelledby="service-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest transition-colors mb-8"
            >
              <ArrowLeft size={14} aria-hidden="true" />
              Все услуги
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[var(--blue-brand)] flex items-center justify-center shrink-0">
                    <Icon size={26} className="text-white" aria-hidden="true" />
                  </div>
                  <span className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-3 py-1.5">
                    {service.tag}
                  </span>
                </div>
                <h1
                  id="service-heading"
                  className="text-[var(--text-primary)] font-black text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance mb-6"
                >
                  {service.hero}
                </h1>
                <p className="text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
                  {service.intro}
                </p>
              </div>

              {/* Right: CTA card */}
              <div className="bg-[var(--navy-card)] border border-[var(--divider)] p-8">
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4 italic">
                  &ldquo;{service.modalSubtitle}&rdquo;
                </p>
                <div className="border-t border-[var(--divider)] pt-6 mb-6">
                  <div className="flex items-start gap-3 text-[var(--text-secondary)] text-sm leading-relaxed">
                    <Clock size={14} className="text-[var(--blue-brand)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{service.timeline}</span>
                  </div>
                </div>
                <Link
                  href="/contacts"
                  className="flex items-center justify-center gap-3 bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-6 py-4 uppercase tracking-wider transition-colors duration-200"
                >
                  Получить коммерческое предложение
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features: что входит ── */}
        <section className="py-16 sm:py-20 bg-[var(--navy-card)]" aria-label="Состав работ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl lg:text-4xl mb-10 sm:mb-12">
              Что входит в услугу
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)]">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-6 sm:p-8 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2 size={22} className="text-[var(--blue-brand)] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="text-[var(--text-primary)] font-bold text-lg mb-2">{feature.title}</h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contract scope + Typical objects ── */}
        {(service.contractScope || service.typicalObjects) && (
          <section className="py-16 sm:py-20 bg-[var(--navy-deep)]" aria-label="Объём работ и типичные объекты">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

                {service.contractScope && (
                  <div>
                    <div className="flex items-center gap-3 mb-7">
                      <FileText size={16} className="text-[var(--blue-brand)]" aria-hidden="true" />
                      <h2 className="text-[var(--text-primary)] font-black text-xl sm:text-2xl">
                        Объём контракта
                      </h2>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {service.contractScope.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="text-[var(--blue-brand)] font-black text-sm leading-none mt-0.5 shrink-0"
                            aria-hidden="true"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {service.typicalObjects && (
                  <div>
                    <div className="flex items-center gap-3 mb-7">
                      <Building2 size={16} className="text-[var(--blue-brand)]" aria-hidden="true" />
                      <h2 className="text-[var(--text-primary)] font-black text-xl sm:text-2xl">
                        Типичные объекты
                      </h2>
                    </div>
                    <ul className="flex flex-col gap-3">
                      {service.typicalObjects.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--blue-brand)] mt-2 shrink-0" aria-hidden="true" />
                          <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── Result ── */}
        <section className="py-14 sm:py-16 bg-[var(--blue-brand)]" aria-label="Результат">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 items-center">
              <div className="lg:col-span-2">
                <p className="text-white/70 text-xs font-semibold uppercase tracking-[0.3em] mb-3">Результат</p>
                <p className="text-white font-bold text-lg sm:text-xl leading-relaxed">
                  {service.result}
                </p>
              </div>
              <div>
                <Link
                  href="/contacts"
                  className="flex items-center justify-center gap-3 bg-white text-[var(--blue-brand)] hover:bg-white/90 font-bold text-sm px-6 py-4 uppercase tracking-wider transition-colors duration-200"
                >
                  Обсудить проект
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Why it matters ── */}
        {service.whyMatters && (
          <section className="py-14 sm:py-16 bg-[var(--navy-card)] border-y border-[var(--divider)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                  Почему это важно
                </p>
                <p className="text-[var(--text-primary)] text-base sm:text-lg leading-relaxed">
                  {service.whyMatters}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        {service.faq && service.faq.length > 0 && (
          <section className="py-16 sm:py-20 bg-[var(--navy-deep)]" aria-labelledby="faq-heading">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                id="faq-heading"
                className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl lg:text-4xl mb-10"
              >
                Частые вопросы
              </h2>
              <ServiceFaq faq={service.faq} />
            </div>
          </section>
        )}

        {/* ── Bottom CTA ── */}
        <section className="py-16 sm:py-20 bg-[var(--navy-card)] border-t border-[var(--divider)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl lg:text-4xl text-balance mb-4">
              Обсудите ваш объект с нашим техническим директором
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-xl mx-auto mb-8">
              Бесплатная консультация и выезд на объект в пределах Московской области. Ответ в течение 30 минут.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacts"
                className="inline-flex items-center justify-center gap-3 bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-10 py-5 uppercase tracking-wider transition-colors duration-200"
              >
                Оставить заявку
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="tel:+79299857900"
                className="inline-flex items-center justify-center gap-3 border border-[var(--divider)] hover:border-[var(--blue-brand)] text-[var(--text-primary)] font-bold text-sm px-10 py-5 uppercase tracking-wider transition-colors duration-200"
              >
                8 (929) 985-79-00
              </a>
            </div>
            <div className="mt-10 pt-8 border-t border-[var(--divider)]">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest transition-colors"
              >
                <ArrowLeft size={14} aria-hidden="true" />
                Все услуги
              </Link>
            </div>
          </div>
        </section>

        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
