import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { FormSection } from "@/components/form-section"

export default function ContactsPage() {
  return (
    <SiteLayout>
      <div className="pt-24">
        {/* Hero */}
        <section className="py-20 bg-[var(--navy-deep)]" aria-label="Связаться с нами">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                Контакты
              </p>
              <h1 className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl xl:text-6xl leading-tight text-balance mb-8">
                Свяжитесь с нами
              </h1>
              <p className="text-[var(--text-secondary)] text-lg lg:text-xl leading-relaxed">
                Оставьте заявку — перезвоним в течение 30 минут и ответим на все вопросы. 
                Бесплатный выезд технического директора на объект в пределах Московской области.
              </p>
            </div>
          </div>
        </section>

        <FormSection />
        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
