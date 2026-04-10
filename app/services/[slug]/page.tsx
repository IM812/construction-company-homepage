import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, CheckCircle2 } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { getServiceBySlug, services } from "@/lib/services-data"

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <SiteLayout>
      <div className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-[var(--navy-deep)]" aria-label="Описание услуги">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--blue-brand)] text-sm font-semibold uppercase tracking-widest transition-colors mb-8"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Назад к услугам
            </Link>

            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[var(--blue-brand)] flex items-center justify-center">
                    <Icon size={26} className="text-white" aria-hidden="true" />
                  </div>
                  <span className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-3 py-1.5">
                    {service.tag}
                  </span>
                </div>
                <h1 className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance mb-8">
                  {service.hero}
                </h1>
                <p className="text-[var(--text-secondary)] text-lg lg:text-xl leading-relaxed max-w-3xl">
                  {service.intro}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-[var(--navy-card)]" aria-label="Состав работ">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-[var(--text-primary)] font-black text-3xl lg:text-4xl mb-12">
              Что входит в услугу
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)]">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-8 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <CheckCircle2
                      size={24}
                      className="text-[var(--blue-brand)] shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[var(--text-primary)] font-bold text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Result */}
        <section className="py-20 bg-[var(--navy-deep)]" aria-label="Результат">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-[var(--blue-brand)] font-black text-3xl lg:text-4xl mb-6">
                Результат
              </h2>
              <p className="text-[var(--text-primary)] text-xl lg:text-2xl leading-relaxed">
                {service.result}
              </p>

              <div className="mt-12">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--blue-brand)] text-sm font-semibold uppercase tracking-widest transition-colors"
                >
                  <ArrowLeft size={16} aria-hidden="true" />
                  Все услуги
                </Link>
              </div>
            </div>
          </div>
        </section>

        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
