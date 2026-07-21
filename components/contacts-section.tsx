import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function ContactsSection() {
  const year = new Date().getFullYear()

  return (
    <>
      <section id="contacts" className="py-16 sm:py-28 bg-white" aria-labelledby="contacts-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14 border-b border-[#e2e6ef] pb-10">
            <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">06 / Контакты</p>
            <h2 id="contacts-heading" className="text-[#0f1c3a] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Свяжитесь с нами
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#e2e6ef]">
            {/* Phones */}
            <div className="bg-white hover:bg-[#f7f8fa] transition-colors p-8">
              <div className="w-10 h-10 bg-[#e8f0fd] flex items-center justify-center mb-5">
                <Phone size={18} className="text-[#1a5fd4]" aria-hidden="true" />
              </div>
              <p className="text-[#8d98aa] text-xs uppercase tracking-widest mb-3">Телефоны</p>
              <a href="tel:+74993909473" className="block text-[#0f1c3a] font-bold text-lg hover:text-[#1a5fd4] transition-colors mb-1">
                8 (499) 390-94-73
              </a>
              <a href="tel:+79299857900" className="block text-[#0f1c3a] font-bold text-lg hover:text-[#1a5fd4] transition-colors">
                8 (929) 985-79-00
              </a>
            </div>

            {/* Email */}
            <div className="bg-white hover:bg-[#f7f8fa] transition-colors p-8">
              <div className="w-10 h-10 bg-[#e8f0fd] flex items-center justify-center mb-5">
                <Mail size={18} className="text-[#1a5fd4]" aria-hidden="true" />
              </div>
              <p className="text-[#8d98aa] text-xs uppercase tracking-widest mb-3">Email</p>
              <a href="mailto:info@stroygenpodriad.ru" className="block text-[#0f1c3a] font-bold text-base hover:text-[#1a5fd4] transition-colors mb-1 break-all">
                info@stroygenpodriad.ru
              </a>
              <a href="mailto:tender@stroygenpodriad.ru" className="block text-[#5a6880] text-sm hover:text-[#1a5fd4] transition-colors break-all">
                tender@stroygenpodriad.ru
              </a>
            </div>

            {/* Address */}
            <div className="bg-white hover:bg-[#f7f8fa] transition-colors p-8">
              <div className="w-10 h-10 bg-[#e8f0fd] flex items-center justify-center mb-5">
                <MapPin size={18} className="text-[#1a5fd4]" aria-hidden="true" />
              </div>
              <p className="text-[#8d98aa] text-xs uppercase tracking-widest mb-3">Адрес</p>
              <address className="not-italic">
                <p className="text-[#0f1c3a] font-bold text-base leading-snug">Москва, Пресненская наб., 12</p>
                <p className="text-[#5a6880] text-sm mt-1">Башня «Федерация», блок Восток, 38 этаж</p>
              </address>
            </div>

            {/* Hours */}
            <div className="bg-white hover:bg-[#f7f8fa] transition-colors p-8">
              <div className="w-10 h-10 bg-[#e8f0fd] flex items-center justify-center mb-5">
                <Clock size={18} className="text-[#1a5fd4]" aria-hidden="true" />
              </div>
              <p className="text-[#8d98aa] text-xs uppercase tracking-widest mb-3">Режим работы</p>
              <p className="text-[#0f1c3a] font-bold text-base">Пн — Пт: 9:00 – 18:00</p>
              <p className="text-[#5a6880] text-sm mt-1">Суббота — по согласованию</p>
              <div className="flex items-center gap-2 mt-3">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
                <span className="text-green-600 text-xs font-semibold uppercase tracking-widest">Сейчас работаем</span>
              </div>
            </div>
          </div>

          {/* Address strip */}
          <div className="mt-0 border border-[#e2e6ef] border-t-0 bg-[#f7f8fa] px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-12">
            <div className="flex items-start gap-3">
              <MapPin size={16} className="text-[#1a5fd4] mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[#0f1c3a] font-bold text-sm">Москва, Щелковское шоссе, дом 7</p>
                <p className="text-[#5a6880] text-xs mt-0.5">Ближайшее метро: Щёлковская (15 мин. пешком)</p>
              </div>
            </div>
            <p className="sm:ml-auto text-[#5a6880] text-sm">Бесплатная парковка на территории</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1c3a] border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">© {year} ООО СтройФинТраст. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">Реквизиты</a>
            <a href="#" className="text-white/50 hover:text-white text-sm transition-colors">СРО</a>
          </div>
        </div>
      </footer>
    </>
  )
}
