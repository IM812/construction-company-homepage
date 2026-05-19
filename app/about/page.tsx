import { SiteLayout } from "@/components/site-layout"
import { FormSection } from "@/components/form-section"
import { QuizSection } from "@/components/quiz-section"
import Link from "next/link"
import {
  Building2,
  Users,
  Award,
  FileText,
  Wrench,
  Zap,
  Network,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  Star,
} from "lucide-react"

const stats = [
  { value: "15+",      label: "Лет на рынке",          sub: "С 2009 года" },
  { value: "230+",     label: "Объектов сдано",         sub: "Под ключ" },
  { value: "₽48 млрд", label: "Объём работ",            sub: "С момента основания" },
  { value: "400+",     label: "Рабочих в штате",        sub: "Собственный ресурс" },
]

const whatWeDo = [
  { icon: FileText,  title: "Проектирование",              description: "Стадии П и РД, BIM-моделирование, прохождение государственной экспертизы, получение разрешения на строительство." },
  { icon: Building2, title: "Строительство",               description: "Жилые, коммерческие и складские объекты. Генеральный подряд: единый договор, полная ответственность за сроки и бюджет." },
  { icon: Wrench,    title: "Реконструкция",               description: "Обследование конструкций, усиление, перепланировка, капремонт. Работаем без остановки действующего производства." },
  { icon: Zap,       title: "Внутренние инженерные сети",  description: "Отопление, вентиляция, кондиционирование, водоснабжение, канализация, электроснабжение, слаботочные системы." },
  { icon: Network,   title: "Внешние инженерные сети",     description: "Наружные коммуникации: теплоснабжение, канализация, водоснабжение, кабельные линии, технологическое присоединение." },
  { icon: Award,     title: "Сдача объектов",              description: "Госкомиссия, разрешение на ввод, передача исполнительной документации и гарантийного паспорта объекта." },
]

const advantages = [
  {
    num: "01",
    title: "Полный цикл",
    description: "Проектирование, строительство, инженерные сети и сдача — один договор. Вам не нужно искать и согласовывать отдельных подрядчиков.",
  },
  {
    num: "02",
    title: "Ответственность за результат",
    description: "Фиксированная цена и сроки в договоре. Штрафные санкции за просрочку. За 15 лет — ни одного объекта, сданного позже срока.",
  },
  {
    num: "03",
    title: "Снижение рисков",
    description: "Единая точка контроля исключает конфликты смежников. Страхование СМР до 500 млн ₽. Допуски СРО, лицензия ФСБ, ISO 9001.",
  },
  {
    num: "04",
    title: "Еженедельный контроль",
    description: "Авторский и технический надзор в штате. Отчётность каждую неделю. Освидетельствование скрытых работ с составлением актов.",
  },
]

const docs = [
  { label: "СРО НОСТРОЙ",     sub: "Свидетельство № 0129.01",        img: "/images/about-sro.jpg" },
  { label: "СРО НОПРИЗ",      sub: "Допуск к проектным работам",      img: "/images/about-sro.jpg" },
  { label: "Лицензия ФСБ",    sub: "Работа на режимных объектах",     img: "/images/about-sro.jpg" },
  { label: "Страхование СМР", sub: "Покрытие до 500 млн ₽",          img: "/images/about-sro.jpg" },
  { label: "ГОСТ Р ISO 9001", sub: "Система менеджмента качества",    img: "/images/about-sro.jpg" },
  { label: "Лицензия МЧС",    sub: "Монтаж систем пожарной защиты",  img: "/images/about-sro.jpg" },
]

const leaders = [
  {
    name: "Захаров С.В.",
    role: "Генеральный директор",
    description: "Руководит компанией с момента основания. Лично контролирует ключевые объекты. 20+ лет в строительной отрасли.",
    img: "/images/about-director.jpg",
  },
  {
    name: "Казаков Л.Д.",
    role: "Технический директор",
    description: "Отвечает за техническую политику, качество СМР и соответствие нормативным требованиям. Образование — МГСУ.",
    img: "/images/about-tech-director.jpg",
  },
]

const clients = [
  "ПАО «Газпром»", "ГК «Самолёт»", "X5 Group", "ГК «ПИК»",
  "Росатом", "СБЕР", "ГК «Эталон»", "ВТБ Капитал",
]

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="pt-24">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[var(--navy-deep)] border-b border-[var(--divider)]" aria-labelledby="about-heading">
          {/* Background team photo */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/about-team.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy-deep)] via-[var(--navy-deep)]/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                О компании
              </p>
              <h1
                id="about-heading"
                className="text-[var(--text-primary)] font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-balance mb-6"
              >
                Генеральный подрядчик полного цикла
              </h1>
              <p className="text-[var(--text-primary)] text-lg sm:text-xl leading-relaxed font-medium mb-4 max-w-2xl">
                На рынке с 2009 года. 230+ объектов под ключ. Один договор — вся ответственность.
              </p>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-xl mb-10">
                Работаем как единый подрядчик и берём на себя координацию всех этапов: от сбора исходных данных до передачи готового объекта с исполнительной документацией.
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-3 bg-[var(--blue-brand)] hover:bg-[var(--blue-hover)] text-white font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200"
              >
                Обсудить проект
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-[var(--navy-card)] border-b border-[var(--divider)]" aria-label="Ключевые показатели">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--divider)]">
              {stats.map((stat) => (
                <div key={stat.label} className="py-8 sm:py-10 px-5 sm:px-8">
                  <p className="text-[var(--blue-brand)] font-black text-2xl sm:text-3xl lg:text-4xl leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[var(--text-primary)] font-bold text-xs sm:text-sm mb-1">{stat.label}</p>
                  <p className="text-[var(--text-secondary)] text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Кто мы + офис фото ── */}
        <section className="py-16 sm:py-24 bg-[var(--navy-deep)]" aria-labelledby="whoweare-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                  01 / Кто мы
                </p>
                <h2
                  id="whoweare-heading"
                  className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance mb-6"
                >
                  Работаем как единый подрядчик и берём на себя координацию всех этапов
                </h2>
                <div className="flex flex-col gap-5 text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed">
                  <p>
                    Берём на себя проектирование, строительство, монтаж инженерных сетей, строительный контроль, прохождение госкомиссии и получение разрешения на ввод. Заказчик заключает один договор — и получает единую точку ответственности.
                  </p>
                  <p>
                    Собственный ресурс — 400 рабочих и 80 единиц спецтехники — обеспечивает независимость от рынка субподрядчиков. Контрактный график выдерживается без привязки к внешним исполнителям.
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-8 border-t border-[var(--divider)] pt-8">
                  {[
                    ["400+", "рабочих в штате"],
                    ["80",   "единиц спецтехники"],
                    ["0",    "срывов контрактных сроков"],
                  ].map(([val, label]) => (
                    <div key={label} className="flex items-baseline gap-3">
                      <span className="text-[var(--blue-brand)] font-black text-2xl leading-none">{val}</span>
                      <span className="text-[var(--text-secondary)] text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office photo */}
              <div className="relative">
                <img
                  src="/images/about-office.jpg"
                  alt="Офис компании СтройГенПодряд"
                  className="w-full aspect-[4/3] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--navy-deep)] to-transparent h-24" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-[var(--text-secondary)] text-xs uppercase tracking-widest">
                    Офис компании · Москва, Щелковское шоссе, 7
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Что делаем ── */}
        <section className="py-16 sm:py-24 bg-[var(--navy-card)]" aria-labelledby="whatwedo-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 border-b border-[var(--divider)] pb-8 sm:pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6">
              <div>
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                  02 / Что делаем
                </p>
                <h2
                  id="whatwedo-heading"
                  className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight"
                >
                  Проектирование, строительство,<br className="hidden md:block" /> инженерные сети, сдача
                </h2>
              </div>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-xs">
                Все виды работ — в рамках одного генподрядного договора.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--divider)]">
              {whatWeDo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-6 sm:p-8 transition-colors duration-300 group">
                    <div className="w-11 h-11 bg-[var(--navy-elevated)] group-hover:bg-[var(--blue-brand)] flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={20} className="text-[var(--blue-brand)] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <h3 className="text-[var(--text-primary)] font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Преимущества ── */}
        <section className="py-16 sm:py-24 bg-[var(--navy-deep)]" aria-labelledby="about-advantages-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 border-b border-[var(--divider)] pb-8 sm:pb-12">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                03 / Преимущества
              </p>
              <h2
                id="about-advantages-heading"
                className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight"
              >
                Четыре причины работать с нами
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--divider)]">
              {advantages.map((adv) => (
                <div key={adv.title} className="bg-[var(--navy-deep)] hover:bg-[var(--navy-card)] p-7 sm:p-10 transition-colors duration-300">
                  <span className="text-[var(--blue-brand)]/20 font-black text-6xl leading-none block mb-3" aria-hidden="true">{adv.num}</span>
                  <h3 className="text-[var(--text-primary)] font-bold text-xl mb-3">{adv.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Руководство ── */}
        <section className="py-16 sm:py-24 bg-[var(--navy-card)]" aria-labelledby="leadership-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 border-b border-[var(--divider)] pb-8 sm:pb-12">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                04 / Руководство
              </p>
              <h2
                id="leadership-heading"
                className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight"
              >
                Управленческая команда
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--divider)]">
              {leaders.map((person) => (
                <div key={person.name} className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] transition-colors duration-200">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={person.img}
                      alt={`${person.name}, ${person.role}`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-[var(--text-primary)] font-black text-xl mb-1">{person.name}</p>
                    <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest mb-4">{person.role}</p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">{person.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Лицензии и СРО ── */}
        <section className="py-16 sm:py-24 bg-[var(--navy-deep)]" aria-labelledby="docs-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 border-b border-[var(--divider)] pb-8 sm:pb-12">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
                05 / Лицензии и допуски
              </p>
              <h2
                id="docs-heading"
                className="text-[var(--text-primary)] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight"
              >
                Допуски СРО, лицензии, страхование
              </h2>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed mt-4 max-w-xl">
                Все необходимые допуски для работы на объектах любой категории сложности. Лицензии можно запросить при заключении договора.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--divider)]">
              {docs.map((doc) => (
                <div key={doc.label} className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] transition-colors duration-200 group">
                  {/* Document thumbnail */}
                  <div className="aspect-[3/2] overflow-hidden relative">
                    <img
                      src={doc.img}
                      alt={`${doc.label} — документ`}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy-card)] via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <div className="w-8 h-8 bg-[var(--blue-brand)] flex items-center justify-center">
                        <ShieldCheck size={14} className="text-white" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                  {/* Label */}
                  <div className="p-5">
                    <p className="text-[var(--text-primary)] font-bold text-sm">{doc.label}</p>
                    <p className="text-[var(--text-secondary)] text-xs mt-1 leading-relaxed">{doc.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-5 sm:p-6 border border-[var(--blue-brand)]/20 bg-[var(--blue-brand)]/5 flex flex-col sm:flex-row sm:items-center gap-4">
              <FileCheck size={18} className="text-[var(--blue-brand)] shrink-0" aria-hidden="true" />
              <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                <strong className="text-[var(--text-primary)]">Запросить копии документов</strong> можно при подготовке коммерческого предложения. Отправляем в течение 1 рабочего дня.
              </p>
              <Link
                href="/contacts"
                className="shrink-0 flex items-center gap-2 text-[var(--blue-brand)] font-bold text-sm hover:text-[var(--text-primary)] transition-colors"
              >
                Запросить
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Клиенты ── */}
        <section className="py-14 sm:py-20 bg-[var(--navy-card)] border-y border-[var(--divider)]" aria-label="Клиенты">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[var(--text-secondary)] text-xs font-semibold uppercase tracking-[0.3em] mb-8 text-center">
              Среди наших клиентов
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[var(--divider)]">
              {clients.map((name) => (
                <div key={name} className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] px-6 py-5 flex items-center justify-center transition-colors duration-200">
                  <span className="text-[var(--text-secondary)] font-semibold text-sm text-center">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <QuizSection />
        <FormSection />
      </div>
    </SiteLayout>
  )
}
