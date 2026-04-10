import { ContactForm } from "./contact-form"

export function FormSection() {
  return (
    <section id="form" className="py-28 bg-[var(--navy-deep)]" aria-labelledby="form-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              06 / Заявка
            </p>
            <h2
              id="form-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance mb-6"
            >
              Оставьте заявку — получите расчёт за 3 дня
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10">
              Технический директор перезвонит в течение 30 минут и даст предварительную оценку стоимости вашего объекта. Бесплатно.
            </p>

            <div className="space-y-6 border-t border-[var(--divider)] pt-8">
              {[
                {
                  title: "Имя, телефон, услуга",
                  desc: "Укажите тип работ и площадь — так расчёт будет точнее",
                },
                {
                  title: "Смета за 3 рабочих дня",
                  desc: "Детальная разбивка по видам работ и материалам",
                },
                {
                  title: "Выезд на объект — бесплатно",
                  desc: "В пределах МО. Пн–Пт, 9:00–18:00",
                },
                {
                  title: "Фиксированная цена в договоре",
                  desc: "Бюджет не пересматривается в процессе строительства",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 bg-[var(--blue-brand)] shrink-0 mt-1" style={{ minHeight: "44px" }} aria-hidden="true" />
                  <div>
                    <p className="text-[var(--text-primary)] font-bold text-base">{item.title}</p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div className="bg-[var(--navy-card)] border border-[var(--divider)] p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
