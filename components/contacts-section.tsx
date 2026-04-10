import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactsSection() {
  const year = new Date().getFullYear()

  return (
    <>
      <section id="contacts" className="py-28 bg-[var(--navy-card)]" aria-labelledby="contacts-heading">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              06 / Контакты
            </p>
            <h2
              id="contacts-heading"
              className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
            >
              Свяжитесь с нами
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--divider)]">
            {/* Phones */}
            <div className="bg-[var(--navy-card)] p-8">
              <div className="w-10 h-10 bg-[var(--navy-elevated)] flex items-center justify-center mb-5">
                <Phone size={18} className="text-[var(--blue-brand)]" aria-hidden="true" />
              </div>
              <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-3">
                Телефоны
              </p>
              <a
                href="tel:+74951234567"
                className="block text-[var(--text-primary)] font-bold text-lg hover:text-[var(--blue-brand)] transition-colors mb-1"
              >
                +7 (495) 123-45-67
              </a>
              <a
                href="tel:+79161234567"
                className="block text-[var(--text-primary)] font-bold text-lg hover:text-[var(--blue-brand)] transition-colors"
              >
                +7 (916) 123-45-67
              </a>
            </div>

            {/* Email */}
            <div className="bg-[var(--navy-card)] p-8">
              <div className="w-10 h-10 bg-[var(--navy-elevated)] flex items-center justify-center mb-5">
                <Mail size={18} className="text-[var(--blue-brand)]" aria-hidden="true" />
              </div>
              <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-3">
                Email
              </p>
              <a
                href="mailto:info@stroygenpodriad.ru"
                className="block text-[var(--text-primary)] font-bold text-base hover:text-[var(--blue-brand)] transition-colors mb-1 break-all"
              >
                info@stroygenpodriad.ru
              </a>
              <a
                href="mailto:tender@stroygenpodriad.ru"
                className="block text-[var(--text-secondary)] text-sm hover:text-[var(--blue-brand)] transition-colors break-all"
              >
                tender@stroygenpodriad.ru
              </a>
            </div>

            {/* Address */}
            <div className="bg-[var(--navy-card)] p-8">
              <div className="w-10 h-10 bg-[var(--navy-elevated)] flex items-center justify-center mb-5">
                <MapPin size={18} className="text-[var(--blue-brand)]" aria-hidden="true" />
              </div>
              <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-3">
                Адрес
              </p>
              <address className="not-italic">
                <p className="text-[var(--text-primary)] font-bold text-base leading-snug">
                  Москва, Пресненская наб., 12
                </p>
                <p className="text-[var(--text-secondary)] text-sm mt-1">
                  Башня «Федерация», блок Восток, 38 этаж
                </p>
              </address>
            </div>

            {/* Hours */}
            <div className="bg-[var(--navy-card)] p-8">
              <div className="w-10 h-10 bg-[var(--navy-elevated)] flex items-center justify-center mb-5">
                <Clock size={18} className="text-[var(--blue-brand)]" aria-hidden="true" />
              </div>
              <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest mb-3">
                Режим работы
              </p>
              <p className="text-[var(--text-primary)] font-bold text-base">
                Пн — Пт: 9:00 – 18:00
              </p>
              <p className="text-[var(--text-secondary)] text-sm mt-1">
                Суббота — по согласованию
              </p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                <span className="text-green-400 text-xs font-semibold uppercase tracking-widest">
                  Сейчас работаем
                </span>
              </div>
            </div>
          </div>

          {/* Address detail strip */}
          <div className="mt-4 border border-[var(--divider)] border-t-0 bg-[var(--navy-elevated)] px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-12">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[var(--blue-brand)] mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[var(--text-primary)] font-bold text-base">Москва, Щелковское шоссе, дом 7</p>
                <p className="text-[var(--text-secondary)] text-sm mt-0.5">Ближайшее метро: Щёлковская (15 мин. пешком)</p>
              </div>
            </div>
            <div className="sm:ml-auto text-[var(--text-secondary)] text-sm leading-relaxed">
              Бесплатная парковка на территории
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--navy-deep)] border-t border-[var(--divider)] py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[var(--text-secondary)] text-sm">
            © {year} СтройГенПодряд. Все права защищены.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors">
              Реквизиты
            </a>
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors">
              СРО
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
