import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, MapPin, Ruler, Calendar, Clock, CheckCircle2, AlertCircle, Lightbulb, TrendingUp } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { getProjectBySlug, projects } from "@/lib/projects-data"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <SiteLayout>
      <div className="pt-24">
        {/* Hero image */}
        <div className="relative h-[50vh] min-h-[320px] bg-[var(--navy-elevated)]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 lg:px-8 pb-10">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-widest bg-[var(--blue-brand)] text-white px-3 py-1.5">
                {project.category}
              </span>
              {project.status === "in-progress" && (
                <span className="text-xs font-semibold uppercase tracking-widest bg-[var(--navy-deep)] border border-[var(--blue-brand)]/50 text-[var(--blue-brand)] px-3 py-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[var(--blue-brand)] rounded-full animate-pulse" aria-hidden="true" />
                  В работе
                </span>
              )}
            </div>
            <h1 className="text-[var(--text-primary)] font-black text-3xl lg:text-5xl leading-tight text-balance">
              {project.title}
            </h1>
          </div>
        </div>

        {/* Meta strip */}
        <div className="bg-[var(--navy-card)] border-y border-[var(--divider)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap gap-x-8 gap-y-3 py-5">
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <MapPin size={14} className="text-[var(--blue-brand)]" aria-hidden="true" />
                {project.location}
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <Ruler size={14} className="text-[var(--blue-brand)]" aria-hidden="true" />
                {project.area}
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <Calendar size={14} className="text-[var(--blue-brand)]" aria-hidden="true" />
                {project.year}
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
                <Clock size={14} className="text-[var(--blue-brand)]" aria-hidden="true" />
                {project.duration}
              </div>
              <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm font-bold">
                <TrendingUp size={14} className="text-[var(--blue-brand)]" aria-hidden="true" />
                {project.budget}
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <section className="py-20 bg-[var(--navy-deep)]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--blue-brand)] text-sm font-semibold uppercase tracking-widest transition-colors mb-12"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Все проекты
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Main text */}
              <div className="lg:col-span-2 flex flex-col gap-10">
                {/* Description */}
                <div>
                  <p className="text-[var(--text-primary)] text-lg leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                {/* Challenge */}
                <div className="border-l-2 border-[var(--blue-brand)]/50 pl-6">
                  <div className="flex items-center gap-2 mb-3">
                    <AlertCircle size={16} className="text-[var(--blue-brand)]" aria-hidden="true" />
                    <h2 className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest">
                      Задача и сложности
                    </h2>
                  </div>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    {project.challenge}
                  </p>
                </div>

                {/* Solution */}
                <div className="border-l-2 border-[var(--blue-brand)] pl-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Lightbulb size={16} className="text-[var(--blue-brand)]" aria-hidden="true" />
                    <h2 className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest">
                      Решение
                    </h2>
                  </div>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    {project.solution}
                  </p>
                </div>

                {/* Result */}
                <div className="bg-[var(--navy-card)] border border-[var(--blue-brand)]/20 p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp size={16} className="text-[var(--blue-brand)]" aria-hidden="true" />
                    <h2 className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest">
                      Результат
                    </h2>
                  </div>
                  <p className="text-[var(--text-primary)] text-base leading-relaxed font-medium">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Right: Sidebar */}
              <div className="flex flex-col gap-8">
                {/* Features */}
                <div>
                  <h3 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-widest mb-5">
                    Ключевые характеристики
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={14} className="text-[var(--blue-brand)] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="text-[var(--text-secondary)] text-sm leading-relaxed">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Services */}
                <div className="border-t border-[var(--divider)] pt-8">
                  <h3 className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-widest mb-5">
                    Виды работ
                  </h3>
                  <div className="flex flex-col gap-2">
                    {project.services.map((svc, i) => (
                      <span
                        key={i}
                        className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-3 py-2"
                      >
                        {svc}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="border-t border-[var(--divider)] pt-8">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-4">
                    Хотите обсудить похожий объект?
                  </p>
                  <Link
                    href="/contacts"
                    className="block text-center bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-6 py-4 uppercase tracking-wider transition-colors duration-200"
                  >
                    Связаться с нами
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
