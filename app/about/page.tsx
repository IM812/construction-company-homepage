import { SiteLayout } from "@/components/site-layout"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProcessSection } from "@/components/process-section"
import { ContactsSection } from "@/components/contacts-section"
import { Building2, Users, Award, TrendingUp } from "lucide-react"

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-[var(--navy-deep)]" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                О компании
              </p>
              <h1
                id="about-heading"
                className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance mb-8"
              >
                Генеральный подрядчик полного цикла
              </h1>
              <p className="text-[var(--text-secondary)] text-lg lg:text-xl leading-relaxed mb-8">
                15 лет на рынке промышленного и коммерческого строительства. 230+ завершённых проектов. 
                48 миллиардов рублей — объём выполненных работ.
              </p>
              <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                Мы берём на себя полную ответственность за результат: от первого эскиза до получения 
                разрешения на ввод объекта в эксплуатацию. Один договор, один подрядчик, 
                фиксированный бюджет и гарантия сроков.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 bg-[var(--navy-card)]" aria-label="Ключевые показатели">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--divider)]">
              {[
                {
                  icon: Building2,
                  value: "230+",
                  label: "Объектов сдано",
                  description: "За 15 лет работы",
                },
                {
                  icon: Users,
                  value: "400+",
                  label: "Рабочих в штате",
                  description: "Собственный ресурс",
                },
                {
                  icon: TrendingUp,
                  value: "₽48 млрд",
                  label: "Объём работ",
                  description: "С момента основания",
                },
                {
                  icon: Award,
                  value: "0",
                  label: "Срывов сроков",
                  description: "100% соблюдение",
                },
              ].map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-8 transition-colors duration-300"
                  >
                    <Icon
                      size={32}
                      className="text-[var(--blue-brand)] mb-4"
                      aria-hidden="true"
                    />
                    <p className="text-[var(--blue-brand)] font-black text-3xl lg:text-4xl leading-none mb-2">
                      {stat.value}
                    </p>
                    <p className="text-[var(--text-primary)] font-bold text-base mb-1">
                      {stat.label}
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm">
                      {stat.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <AdvantagesSection />
        <ProcessSection />
        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
