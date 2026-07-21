import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, Tag } from "lucide-react"
import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { articles } from "@/lib/articles-data"

export const metadata = {
  title: "Статьи — СтройФинТраст",
  description: "Экспертные статьи о строительстве, проектировании, выборе подрядчика, технологиях. Полезно для заказчиков и специалистов отрасли.",
}

export default function ArticlesPage() {
  const [featured, ...rest] = articles

  return (
    <SiteLayout>
      <div className="pt-24">
        {/* Hero */}
        <section className="py-24 bg-[var(--navy-deep)] border-b border-[var(--divider)]" aria-labelledby="articles-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
              Статьи и советы
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <h1
                id="articles-heading"
                className="text-[var(--text-primary)] font-black text-5xl lg:text-6xl leading-[1.02] text-balance"
              >
                Экспертные материалы о строительстве
              </h1>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Практические руководства, разборы технологий и советы для заказчиков. Помогаем принимать обоснованные решения на каждом этапе проекта.
              </p>
            </div>
          </div>
        </section>

        {/* Featured article */}
        {featured && (
          <section className="py-16 bg-[var(--navy-card)]" aria-label="Главная статья">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <Link
                href={`/articles/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--divider)] hover:bg-[var(--blue-brand)]/20 transition-colors duration-300"
              >
                {/* Image */}
                <div className="relative h-72 lg:h-96 overflow-hidden bg-[var(--navy-elevated)]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/60 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs font-semibold uppercase tracking-widest bg-[var(--blue-brand)] text-white px-3 py-1.5">
                      Главная статья
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="bg-[var(--navy-card)] p-10 lg:p-14 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-5">
                    <span className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-3 py-1">
                      {featured.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-[var(--text-secondary)] text-xs">
                      <Clock size={12} aria-hidden="true" />
                      {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-[var(--text-primary)] font-black text-2xl lg:text-3xl leading-tight text-balance mb-5 group-hover:text-[var(--blue-brand)] transition-colors duration-200">
                    {featured.title}
                  </h2>
                  <p className="text-[var(--text-secondary)] text-base leading-relaxed mb-8">
                    {featured.shortDescription}
                  </p>
                  <div className="flex items-center gap-2 text-[var(--blue-brand)] text-sm font-bold uppercase tracking-widest">
                    Читать статью
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Article grid */}
        <section className="py-20 bg-[var(--navy-deep)]" aria-label="Все статьи">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-[var(--text-primary)] font-black text-2xl lg:text-3xl mb-12">
              Все материалы
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--divider)]">
              {rest.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* SEO lead capture */}
        <section className="py-16 bg-[var(--navy-card)] border-y border-[var(--divider)]" aria-label="Получить консультацию">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-[var(--text-primary)] font-black text-3xl lg:text-4xl text-balance mb-4">
              Остались вопросы по вашему объекту?
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed max-w-xl mx-auto mb-8">
              Технический директор отвечает на вопросы по конкретным проектам. Бесплатно, без обязательств.
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-3 bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-10 py-5 uppercase tracking-wider transition-colors duration-200"
            >
              Задать вопрос
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>

        <ContactsSection />
      </div>
    </SiteLayout>
  )
}

function ArticleCard({ article }: { article: (typeof articles)[0] }) {
  return (
    <Link
      href={`/articles/${article.slug}`}
      className="group bg-[var(--navy-deep)] hover:bg-[var(--navy-card)] transition-colors duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-[var(--navy-elevated)]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-deep)]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest border border-[var(--blue-brand)]/30 px-2.5 py-1">
            {article.category}
          </span>
          <span className="flex items-center gap-1 text-[var(--text-secondary)] text-xs">
            <Clock size={11} aria-hidden="true" />
            {article.readTime}
          </span>
        </div>
        <h3 className="text-[var(--text-primary)] font-bold text-base leading-snug mb-3 group-hover:text-[var(--blue-brand)] transition-colors duration-200 flex-1">
          {article.title}
        </h3>
        <p className="text-[var(--text-secondary)] text-xs leading-relaxed mb-5">
          {article.shortDescription}
        </p>
        <div className="flex items-center gap-1.5 text-[var(--blue-brand)] text-xs font-bold uppercase tracking-widest mt-auto">
          Читать
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
        </div>
      </div>
    </Link>
  )
}
