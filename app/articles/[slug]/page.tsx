import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { getArticleBySlug, articles } from "@/lib/articles-data"

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3)

  return (
    <SiteLayout>
      <div className="pt-24">
        {/* Hero image */}
        <div className="relative h-[40vh] min-h-[280px] bg-[var(--navy-elevated)]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)] via-[var(--navy-deep)]/50 to-transparent" />
        </div>

        {/* Article header */}
        <section className="bg-[var(--navy-deep)] border-b border-[var(--divider)]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--blue-brand)] text-sm font-semibold uppercase tracking-widest transition-colors mb-8"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              Все статьи
            </Link>

            <div className="flex items-center gap-4 mb-6">
              <span className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-3 py-1.5">
                {article.category}
              </span>
              <span className="flex items-center gap-1.5 text-[var(--text-secondary)] text-xs">
                <Clock size={12} aria-hidden="true" />
                {article.readTime}
              </span>
              <span className="text-[var(--text-secondary)] text-xs">{article.date}</span>
            </div>

            <h1 className="text-[var(--text-primary)] font-black text-3xl lg:text-5xl leading-tight text-balance mb-6">
              {article.title}
            </h1>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
              {article.shortDescription}
            </p>
          </div>
        </section>

        {/* Article content */}
        <article className="py-16 bg-[var(--navy-deep)]" aria-label="Текст статьи">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">

            {/* Intro */}
            <p className="text-[var(--text-primary)] text-lg leading-relaxed font-medium mb-12 pb-12 border-b border-[var(--divider)]">
              {article.content.intro}
            </p>

            {/* Sections */}
            <div className="flex flex-col gap-12">
              {article.content.sections.map((section, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <h2 className="text-[var(--text-primary)] font-black text-xl lg:text-2xl leading-tight">
                    {section.heading}
                  </h2>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                    {section.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Conclusion */}
            <div className="mt-12 pt-12 border-t border-[var(--divider)]">
              <div className="bg-[var(--navy-card)] border-l-2 border-[var(--blue-brand)] p-8">
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest mb-4">
                  Вывод
                </p>
                <p className="text-[var(--text-primary)] text-base leading-relaxed font-medium">
                  {article.content.conclusion}
                </p>
              </div>
            </div>

            {/* Tags */}
            {article.tags.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-2 items-center">
                <Tag size={14} className="text-[var(--text-secondary)]" aria-hidden="true" />
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[var(--text-secondary)] text-xs font-medium border border-[var(--divider)] px-3 py-1.5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* CTA block */}
        <section className="py-16 bg-[var(--navy-card)] border-y border-[var(--divider)]" aria-label="Обсудить проект">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-[var(--text-primary)] font-black text-3xl text-balance mb-4">
              Есть вопрос по вашему объекту?
            </h2>
            <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-lg mx-auto mb-8">
              Технический директор проконсультирует по конкретной ситуации. Звонок бесплатный, без обязательств.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-3 bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-10 py-5 uppercase tracking-wider transition-colors duration-200"
            >
              Получить консультацию
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* Other articles */}
        {otherArticles.length > 0 && (
          <section className="py-20 bg-[var(--navy-deep)]" aria-label="Другие статьи">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 className="text-[var(--text-primary)] font-black text-2xl mb-10">
                Другие материалы
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--divider)]">
                {otherArticles.map((a) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className="group bg-[var(--navy-deep)] hover:bg-[var(--navy-card)] transition-colors duration-300 p-8 flex flex-col gap-4"
                  >
                    <span className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest">
                      {a.category}
                    </span>
                    <h3 className="text-[var(--text-primary)] font-bold text-base leading-snug group-hover:text-[var(--blue-brand)] transition-colors duration-200">
                      {a.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-[var(--blue-brand)] text-xs font-bold uppercase tracking-widest mt-auto">
                      Читать
                      <ArrowRight size={12} aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
