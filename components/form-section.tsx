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
            {/* Pre-form CTA block */}
            <div className="mb-10 p-6 border-l-4 border-[var(--blue-brand)] bg-[var(--navy-card)]">
              <p className="text-[var(--text-primary)] font-black text-xl leading-snug mb-2">
                Каждый день без расчёта — это день без понимания бюджета проекта.
              </p>
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                Оставьте заявку. Технический директор свяжется в течение 30 минут и даст предварительную оценку — бесплатно, без обязательств.
              </p>
            </div>

            <h2
              id="form-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance mb-4"
            >
              Узнайте стоимость вашего объекта за 3 рабочих дня
            </h2>
            <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-10">
              Заполните форму — получите развёрнутую смету с разбивкой по видам работ. Без звонков с предложением «обсудить» и без абстрактных цифр.
            </p>

            <div className="space-y-0 border-t border-[var(--divider)] pt-8">
              {[
                {
                  title: "Точный расчёт — не «от и до»",
                  desc: "Смета с разбивкой по позициям. Фиксируется в договоре — больше не меняется.",
                },
                {
                  title: "Звонок директора, не менеджера",
                  desc: "Технический директор лично. 30 минут после заявки в рабочее время.",
                },
                {
                  title: "Выезд на объект — бесплатно",
                  desc: "В пределах МО. Оцениваем площадку до начала любых обязательств.",
                },
                {
                  title: "Цена не вырастет в процессе",
                  desc: "Смета = приложение к контракту. Пересмотр только по вашей инициативе.",
                },
                {
                  title: "Гарантия 5 лет на все СМР",
                  desc: "Единый гарантийный паспорт объекта. Один звонок — вся ответственность у нас.",
                },
              ].map((item, i, arr) => (
                <div
                  key={item.title}
                  className={`flex gap-4 py-5 ${i < arr.length - 1 ? "border-b border-[var(--divider)]" : ""}`}
                >
                  <div className="w-1 bg-[var(--blue-brand)] shrink-0 self-stretch" aria-hidden="true" />
                  <div>
                    <p className="text-[var(--text-primary)] font-bold text-sm uppercase tracking-wide">{item.title}</p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mt-1">{item.desc}</p>
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
