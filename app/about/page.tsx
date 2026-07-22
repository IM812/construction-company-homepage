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
  ShieldCheck,
  FileCheck,
  ArrowRight,
} from "lucide-react"

const stats = [
  { value: "15+",       label: "Лет на рынке",   sub: "С 2009 года" },
  { value: "230+",      label: "Объектов сдано",  sub: "Под ключ" },
  { value: "₽48 млрд",  label: "Объём работ",     sub: "С момента основания" },
  { value: "400+",      label: "Рабочих в штате", sub: "Собственный ресурс" },
]

const whatWeDo = [
  { icon: FileText,  title: "Проектирование",             description: "Стадии П и РД, BIM-моделирование, прохождение государственной экспертизы, получение разрешения на строительство." },
  { icon: Building2, title: "Строительство",              description: "Жилые, коммерческие и складские объекты. Генеральный подряд: единый договор, полная ответственность." },
  { icon: Wrench,    title: "Реконструкция",              description: "Обследование конструкций, усиление, перепланировка, капремонт. Работаем без остановки производства." },
  { icon: Zap,       title: "Внутренние инженерные сети", description: "Отопление, вентиляция, кондиционирование, водоснабжение, канализация, электроснабжение, слаботочные системы." },
  { icon: Network,   title: "Внешние инженерные сети",    description: "Наружные коммуникации: теплоснабжение, канализация, водоснабжение, кабельные линии, технологическое присоединение." },
  { icon: Award,     title: "Сдача объектов",             description: "Госкомиссия, разрешение на ввод, передача исполнительной документации и гарантийного паспорта объекта." },
]

const advantages = [
  { num: "01", title: "Полный цикл",               description: "Проектирование, строительство, инженерные сети и сдача — один договор. Не нужно искать отдельных подрядчиков." },
  { num: "02", title: "Ответственность за результат", description: "Фиксированная цена и сроки в договоре. Штрафные санкции за просрочку. За 15 лет — ни одного объекта, сданного позже срока." },
  { num: "03", title: "Снижение рисков",           description: "Единая точка контроля. Страхование СМР до 500 млн ₽. Допуски СРО, лицензия ФСБ, ISO 9001." },
  { num: "04", title: "Еженедельный контроль",     description: "Авторский и технический надзор в штате. Отчётность каждую неделю. Освидетельствование скрытых работ с актами." },
]

const docs = [
  { label: "СРО НОСТРОЙ",     sub: "Свидетельство № 0129.01" },
  { label: "СРО НОПРИЗ",      sub: "Допуск к проектным работам" },
  { label: "Лицензия ФСБ",    sub: "Работа на режимных объектах" },
  { label: "Страхование СМР", sub: "Покрытие до 500 млн ₽" },
  { label: "ГОСТ Р ISO 9001", sub: "Система менеджмента качества" },
  { label: "Лицензия МЧС",    sub: "Монтаж систем пожарной защиты" },
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
      <div className="pt-[calc(4rem+2px)]">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#0f1c3a]" aria-labelledby="about-heading">
          <div className="absolute inset-0 z-0">
            <img src="/images/about-team.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0f1c3a] via-[#0f1c3a]/80 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-5">О компании</p>
              <h1 id="about-heading" className="text-white font-black text-4xl sm:text-5xl lg:text-7xl leading-[1.02] text-balance mb-6">
                Генеральный подрядчик полного цикла
              </h1>
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed font-medium mb-4 max-w-2xl">
                На рынке с 2009 года. 230+ объектов под ключ. Один договор — вся ответственность.
              </p>
              <p className="text-white/60 text-base leading-relaxed max-w-xl mb-10">
                Работаем как единый подрядчик и берём на себя координацию всех этапов: от сбора исходных данных до передачи готового объекта.
              </p>
              <Link
                href="/contacts"
                className="inline-flex items-center gap-3 bg-[#1a5fd4] hover:bg-[#1450b8] text-white font-bold text-sm px-8 py-4 uppercase tracking-wider transition-colors duration-200"
              >
                Обсудить проект
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-[#0f1c3a] border-b border-white/10" aria-label="Ключевые показатели">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="py-8 sm:py-10 px-5 sm:px-8">
                  <p className="text-[#1a5fd4] font-black text-2xl sm:text-3xl lg:text-4xl leading-none mb-2">{stat.value}</p>
                  <p className="text-white font-bold text-xs sm:text-sm mb-1">{stat.label}</p>
                  <p className="text-white/50 text-xs">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Кто мы ── */}
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="whoweare-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              <div>
                <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">01 / Кто мы</p>
                <h2 id="whoweare-heading" className="text-[#0f1c3a] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight text-balance mb-6">
                  Работаем как единый подрядчик и берём на себя координацию всех этапов
                </h2>
                <div className="flex flex-col gap-5 text-[#5a6880] text-sm sm:text-base leading-relaxed">
                  <p>
                    Берём на себя проектирование, строительство, монтаж инженерных сетей, строительный контроль, прохождение госкомиссии и получение разрешения на ввод. Заказчик заключает один договор.
                  </p>
                  <p>
                    Собственный ресурс — 400 рабочих и 80 единиц спецтехники — обеспечивает независимость от рынка субподрядчиков.
                  </p>
                </div>
                <div className="flex flex-col gap-3 mt-8 border-t border-[#e2e6ef] pt-8">
                  {[["400+","рабочих в штате"],["80","единиц спецтехники"],["0","срывов контрактных сроков"]].map(([val,label]) => (
                    <div key={label} className="flex items-baseline gap-3">
                      <span className="text-[#1a5fd4] font-black text-2xl leading-none">{val}</span>
                      <span className="text-[#5a6880] text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img src="/images/about-office.jpg" alt="Офис компании ООО СтройФинТраст" className="w-full aspect-[4/3] object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-16" />
                <div className="absolute bottom-3 left-4 right-4">
                  <p className="text-[#5a6880] text-xs uppercase tracking-widest">Офис · Москва, Щелковское шоссе, 7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Что делаем ── */}
        <section className="py-16 sm:py-24 bg-[#f7f8fa]" aria-labelledby="whatwedo-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 border-b border-[#e2e6ef] pb-8 sm:pb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">02 / Что делаем</p>
                <h2 id="whatwedo-heading" className="text-[#0f1c3a] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
                  Проектирование, строительство,<br className="hidden md:block" /> инженерные сети, сдача
                </h2>
              </div>
              <p className="text-[#5a6880] text-base leading-relaxed max-w-xs">
                Все виды работ — в рамках одного договора.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e6ef]">
              {whatWeDo.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white hover:bg-[#f7f8fa] p-6 sm:p-8 transition-colors duration-300 group">
                    <div className="w-11 h-11 bg-[#e8f0fd] group-hover:bg-[#1a5fd4] flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon size={20} className="text-[#1a5fd4] group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <h3 className="text-[#0f1c3a] font-bold text-lg mb-3">{item.title}</h3>
                    <p className="text-[#5a6880] text-sm leading-relaxed">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Преимущества ── */}
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="about-advantages-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 border-b border-[#e2e6ef] pb-8 sm:pb-10">
              <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">03 / Преимущества</p>
              <h2 id="about-advantages-heading" className="text-[#0f1c3a] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Четыре причины работать с нами
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e2e6ef]">
              {advantages.map((adv) => (
                <div key={adv.title} className="bg-white hover:bg-[#f7f8fa] p-7 sm:p-10 transition-colors duration-300">
                  <span className="text-[#1a5fd4]/15 font-black text-6xl leading-none block mb-3" aria-hidden="true">{adv.num}</span>
                  <h3 className="text-[#0f1c3a] font-bold text-xl mb-3">{adv.title}</h3>
                  <p className="text-[#5a6880] text-sm leading-relaxed">{adv.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Руководство ── */}
        <section className="py-16 sm:py-24 bg-[#f7f8fa]" aria-labelledby="leadership-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 border-b border-[#e2e6ef] pb-8 sm:pb-10">
              <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">04 / Руководство</p>
              <h2 id="leadership-heading" className="text-[#0f1c3a] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Управленческая команда
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e2e6ef]">
              {leaders.map((person) => (
                <div key={person.name} className="bg-white hover:bg-[#f7f8fa] transition-colors duration-200">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={person.img} alt={`${person.name}, ${person.role}`} className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-[#0f1c3a] font-black text-xl mb-1">{person.name}</p>
                    <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-widest mb-4">{person.role}</p>
                    <p className="text-[#5a6880] text-sm leading-relaxed">{person.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Лицензии ── */}
        <section className="py-16 sm:py-24 bg-white" aria-labelledby="docs-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-14 border-b border-[#e2e6ef] pb-8 sm:pb-10">
              <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">05 / Лицензии и допуски</p>
              <h2 id="docs-heading" className="text-[#0f1c3a] font-black text-2xl sm:text-3xl lg:text-4xl leading-tight">
                Допуски СРО, лицензии, страхование
              </h2>
              <p className="text-[#5a6880] text-base leading-relaxed mt-4 max-w-xl">
                Все необходимые допуски для работы на объектах любой категории сложности.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#e2e6ef]">
              {docs.map((doc) => (
                <div key={doc.label} className="bg-white hover:bg-[#f7f8fa] transition-colors duration-200 p-6 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#e8f0fd] group-hover:bg-[#1a5fd4] flex items-center justify-center shrink-0 transition-colors duration-200">
                      <ShieldCheck size={16} className="text-[#1a5fd4] group-hover:text-white transition-colors" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[#0f1c3a] font-bold text-sm">{doc.label}</p>
                      <p className="text-[#5a6880] text-xs mt-1 leading-relaxed">{doc.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-5 sm:p-6 border border-[#1a5fd4]/20 bg-[#e8f0fd]/40 flex flex-col sm:flex-row sm:items-center gap-4">
              <FileCheck size={18} className="text-[#1a5fd4] shrink-0" aria-hidden="true" />
              <p className="text-[#3d4d66] text-sm leading-relaxed">
                <strong className="text-[#0f1c3a]">Запросить копии документов</strong> можно при подготовке КП. Отправляем в течение 1 рабочего дня.
              </p>
              <Link href="/contacts" className="shrink-0 flex items-center gap-2 text-[#1a5fd4] font-bold text-sm hover:text-[#0f1c3a] transition-colors">
                Запросить <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── Клиенты ── */}
        <section className="py-14 sm:py-20 bg-[#f7f8fa] border-y border-[#e2e6ef]" aria-label="Клиенты">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-[#8d98aa] text-xs font-semibold uppercase tracking-[0.3em] mb-8 text-center">Среди наших клиентов</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#e2e6ef]">
              {clients.map((name) => (
                <div key={name} className="bg-white hover:bg-[#f7f8fa] px-6 py-5 flex items-center justify-center transition-colors duration-200">
                  <span className="text-[#5a6880] font-semibold text-sm text-center">{name}</span>
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
