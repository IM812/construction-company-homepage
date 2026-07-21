import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin, Ruler, Calendar, Clock } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { FormSection } from "@/components/form-section"
import { projects, getCompletedProjects, getActiveProjects } from "@/lib/projects-data"

export const metadata = {
  title: "Проекты — СтройФинТраст",
  description: "Выполненные и текущие строительные проекты. Логистические комплексы, офисные центры, жилые и промышленные объекты.",
}

export default function ProjectsPage() {
  const completed = getCompletedProjects()
  const active = getActiveProjects()

  return (
    <SiteLayout>
      <div className="pt-24">
        {/* Hero */}
        <section className="py-24 bg-[var(--navy-deep)] border-b border-[var(--divider)]" aria-labelledby="projects-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                  Наши проекты
                </p>
                <h1
                  id="projects-heading"
                  className="text-[var(--text-primary)] font-black text-5xl lg:text-6xl xl:text-7xl leading-[1.02] text-balance"
                >
                  Сданные объекты и проекты в работе
                </h1>
              </div>
              <div className="flex flex-col gap-5 lg:pb-2">
                <p className="text-[var(--text-primary)] text-xl leading-relaxed font-medium">
                  230+ объектов введено в эксплуатацию за 15 лет. Каждый — с соблюдением сроков и бюджета.
                </p>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Здесь собраны ключевые проекты компании: логистические комплексы, офисные и производственные здания, жилые объекты и реконструкции. Каждый объект открывается с полным описанием задач, решений и результатов.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 pt-12 border-t border-[var(--divider)] grid grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--divider)]">
              {[
                { value: "230+", label: "Объектов сдано" },
                { value: "15+", label: "Лет опыта" },
                { value: "₽48 млрд", label: "Объём работ" },
                { value: "0", label: "Срывов сроков" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[var(--navy-deep)] py-8 px-6">
                  <p className="text-[var(--blue-brand)] font-black text-3xl leading-none mb-2">{stat.value}</p>
                  <p className="text-[var(--text-secondary)] text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In progress */}
        {active.length > 0 && (
          <section className="py-20 bg-[var(--navy-card)]" aria-labelledby="active-projects-heading">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-12">
                <span className="w-2 h-2 bg-[var(--blue-brand)] rounded-full animate-pulse" aria-hidden="true" />
                <h2 id="active-projects-heading" className="text-[var(--text-primary)] font-black text-2xl lg:text-3xl">
                  В работе
                </h2>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)]">
                {active.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Completed */}
        <section className="py-20 bg-[var(--navy-deep)]" aria-labelledby="completed-projects-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 id="completed-projects-heading" className="text-[var(--text-primary)] font-black text-2xl lg:text-3xl mb-12">
              Выполненные проекты
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)]">
              {completed.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        <FormSection />
        <ContactsSection />
      </div>
    </SiteLayout>
  )
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <article className="bg-[var(--navy-card)] group hover:bg-[var(--navy-elevated)] transition-colors duration-300">
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-[var(--navy-elevated)]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/80 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="text-xs font-semibold uppercase tracking-widest bg-[var(--blue-brand)] text-white px-3 py-1.5">
            {project.category}
          </span>
          {project.status === "in-progress" && (
            <span className="text-xs font-semibold uppercase tracking-widest bg-[var(--navy-deep)] border border-[var(--blue-brand)]/50 text-[var(--blue-brand)] px-3 py-1.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-[var(--blue-brand)] rounded-full animate-pulse" aria-hidden="true" />
              В работе
            </span>
          )}
          {project.status === "completed" && (
            <span className="text-xs font-semibold uppercase tracking-widest bg-[var(--navy-deep)]/80 text-[var(--text-secondary)] px-3 py-1.5">
              Сдан
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-[var(--text-primary)] font-black text-xl lg:text-2xl leading-tight mb-3 group-hover:text-[var(--blue-brand)] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6">
          <div className="flex items-center gap-1.5 text-[var(--text-secondary)] text-xs">
            <MapPin size={12} className="text-[var(--blue-brand)]" aria-hidden="true" />
            {project.location}
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-secondary)] text-xs">
            <Ruler size={12} className="text-[var(--blue-brand)]" aria-hidden="true" />
            {project.area}
          </div>
          <div className="flex items-center gap-1.5 text-[var(--text-secondary)] text-xs">
            <Calendar size={12} className="text-[var(--blue-brand)]" aria-hidden="true" />
            {project.year}
          </div>
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-2 text-[var(--blue-brand)] text-sm font-bold uppercase tracking-widest hover:gap-3 transition-all duration-200"
        >
          Подробнее
          <ArrowRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
