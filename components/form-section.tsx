import { ContactForm } from "./contact-form"

export function FormSection() {
  return (
    <section id="form" className="py-20 sm:py-28 bg-[#0f1c3a]" aria-labelledby="form-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left */}
          <div>
            <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              06 / Заявка
            </p>

            <div className="mb-8 p-6 border-l-4 border-[#1a5fd4] bg-white/5">
              <p className="text-white font-black text-xl leading-snug mb-2">
                Каждый день без расчёта — это день без понимания бюджета проекта.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                Оставьте заявку. Технический директор свяжется в течение 30 минут.
              </p>
            </div>

            <h2
              id="form-heading"
              className="text-white font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance mb-4"
            >
              Узнайте стоимость вашего объекта за 3 рабочих дня
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Заполните форму — получите развёрнутую смету. Без звонков с предложением «обсудить» и без абстрактных цифр.
            </p>

            <div className="space-y-0 border-t border-white/10 pt-8">
              {[
                { title: "Точный расчёт — не «от и до»",  desc: "Смета с разбивкой по позициям. Фиксируется в договоре." },
                { title: "Звонок директора, не менеджера", desc: "Технический директор лично. 30 минут после заявки." },
                { title: "Выезд на объект — бесплатно",   desc: "В пределах МО. До любых обязательств с вашей стороны." },
                { title: "Цена не вырастет в процессе",   desc: "Смета = приложение к контракту. Пересмотр только по вашей инициативе." },
                { title: "Гарантия 5 лет на все СМР",     desc: "Единый гарантийный паспорт объекта." },
              ].map((item, i, arr) => (
                <div key={item.title} className={`flex gap-4 py-5 ${i < arr.length - 1 ? "border-b border-white/10" : ""}`}>
                  <div className="w-1 bg-[#1a5fd4] shrink-0 self-stretch" aria-hidden="true" />
                  <div>
                    <p className="text-white font-bold text-sm uppercase tracking-wide">{item.title}</p>
                    <p className="text-white/60 text-sm leading-relaxed mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="bg-white p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}
