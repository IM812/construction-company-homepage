import { SiteLayout } from "@/components/site-layout"
import { ContactsSection } from "@/components/contacts-section"
import { FormSection } from "@/components/form-section"
import {
  Building2,
  Users,
  TrendingUp,
  Award,
  FileText,
  Wrench,
  Zap,
  Network,
  CheckCircle2,
  ShieldCheck,
  FileCheck,
} from "lucide-react"

const stats = [
  { value: "15+",      label: "Лет на рынке",        sub: "С 2009 года" },
  { value: "230+",     label: "Объектов сдано",       sub: "Под ключ" },
  { value: "₽48 млрд", label: "Объём выполненных работ", sub: "С момента основания" },
  { value: "400+",     label: "Рабочих в штате",      sub: "Собственный ресурс" },
]

const whatWeDo = [
  {
    icon: FileText,
    title: "Проектирование",
    description:
      "Предпроектные работы, стадия П, прохождение государственной экспертизы, рабочая документация. BIM-моделирование.",
  },
  {
    icon: Building2,
    title: "Строительство",
    description:
      "Жилые, коммерческие и складские объекты. Генеральный подряд: единый договор, полная ответственность за сроки и бюджет.",
  },
  {
    icon: Wrench,
    title: "Реконструкция",
    description:
      "Обследование конструкций, усиление, перепланировка, капитальный ремонт. Работаем без остановки действующего производства.",
  },
  {
    icon: Zap,
    title: "Внутренние инженерные сети",
    description:
      "Отопление, вентиляция, кондиционирование, водоснабжение, канализация, электроснабжение, слаботочные системы.",
  },
  {
    icon: Network,
    title: "Внешние инженерные сети",
    description:
      "Наружные коммуникации: теплоснабжение, канализация, водоснабжение, кабельные линии. Технологическое присоединение к централизованным сетям.",
  },
  {
    icon: Award,
    title: "Сдача объектов",
    description:
      "Прохождение государственной комиссии, получение разрешения на ввод в эксплуатацию, передача исполнительной документации заказчику.",
  },
]

const advantages = [
  {
    title: "Полный цикл",
    description:
      "Проектирование, строительство, инженерные сети и сдача — в рамках одного договора. Заказчик не тратит время на поиск и согласование отдельных подрядчиков.",
  },
  {
    title: "Ответственность за результат",
    description:
      "Фиксированная цена и сроки закрепляются в договоре. Штрафные санкции за просрочку. За 15 лет — ни одного объекта, сданного с нарушением срока.",
  },
  {
    title: "Снижение рисков",
    description:
      "Единая точка контроля исключает конфликты между субподрядчиками. Страхование СМР до 500 млн ₽. Допуски СРО, лицензия ФСБ, ISO 9001.",
  },
  {
    title: "Контроль всех этапов",
    description:
      "Авторский и технический надзор в штате. Еженедельная отчётность по объекту. Освидетельствование скрытых работ с составлением актов.",
  },
]

const docs = [
  { label: "СРО НОСТРОЙ",       sub: "Свидетельство № 0129.01" },
  { label: "СРО НОПРИЗ",        sub: "Допуск к проектным работам" },
  { label: "Лицензия ФСБ",      sub: "Работа на режимных объектах" },
  { label: "Страхование СМР",   sub: "Покрытие до 500 млн ₽" },
  { label: "ГОСТ Р ISO 9001",   sub: "Система менеджмента качества" },
  { label: "Лицензия МЧС",      sub: "Монтаж систем пожарной защиты" },
]

const leaders = [
  {
    initials: "ЗС",
    name: "Захаров С.В.",
    role: "Генеральный директор",
    description:
      "Руководит компанией с момента основания. Лично контролирует ключевые объекты. 20+ лет в строительной отрасли.",
  },
  {
    initials: "КЛ",
    name: "Казаков Л.Д.",
    role: "Технический директор",
    description:
      "Отвечает за техническую политику компании, качество строительно-монтажных работ и соответствие нормативным требованиям. Образование МГСУ.",
  },
]

export default function AboutPage() {
  return (
    <SiteLayout>
      <div className="pt-24">

        {/* ── Hero ── */}
        <section className="py-24 bg-[var(--navy-deep)] border-b border-[var(--divider)]" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
              <div>
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                  О компании
                </p>
                <h1
                  id="about-heading"
                  className="text-[var(--text-primary)] font-black text-5xl lg:text-6xl xl:text-7xl leading-[1.02] text-balance"
                >
                  Генеральный подрядчик полного цикла
                </h1>
              </div>
              <div className="flex flex-col gap-5 lg:pb-2">
                <p className="text-[var(--text-primary)] text-xl leading-relaxed font-medium">
                  Компания выполняет проектирование, строительство и инженерные сети с доведением объекта до сдачи.
                </p>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Один подрядчик закрывает весь цикл работ. Заказчик не управляет цепочкой смежников — он контролирует один договор и одну команду.
                </p>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  На рынке с 2009 года. 230+ сданных объектов. Объём выполненных работ — 48 млрд рублей.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="bg-[var(--navy-card)] border-y border-[var(--divider)]" aria-label="Ключевые показатели">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-[var(--divider)]">
              {stats.map((stat) => (
                <div key={stat.label} className="py-10 px-8">
                  <p className="text-[var(--blue-brand)] font-black text-3xl lg:text-4xl leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="text-[var(--text-primary)] font-bold text-sm mb-1">
                    {stat.label}
                  </p>
                  <p className="text-[var(--text-secondary)] text-xs">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Кто мы ── */}
        <section className="py-24 bg-[var(--navy-deep)]" aria-labelledby="whoweare-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                  01 / Кто мы
                </p>
                <h2
                  id="whoweare-heading"
                  className="text-[var(--text-primary)] font-black text-3xl lg:text-4xl leading-tight text-balance mb-8"
                >
                  Работаем как единый подрядчик и берём на себя координацию всех этапов
                </h2>
                {/* Inline metric strip */}
                <div className="flex flex-col gap-3 border-t border-[var(--divider)] pt-8">
                  {[
                    ["400+", "рабочих в штате"],
                    ["80", "единиц спецтехники"],
                    ["0", "срывов контрактных сроков"],
                  ].map(([val, label]) => (
                    <div key={label} className="flex items-baseline gap-3">
                      <span className="text-[var(--blue-brand)] font-black text-2xl leading-none">{val}</span>
                      <span className="text-[var(--text-secondary)] text-sm">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Берём на себя координацию всех этапов строительного проекта: проектирование, строительство, монтаж инженерных сетей, строительный контроль, прохождение государственной комиссии и получение разрешения на ввод.
                </p>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Заказчик заключает один договор — и получает единую точку ответственности. Нет параллельных договоров с проектировщиком, строителем и сетевиком. Нет взаимных претензий между смежниками. Нет неконтролируемого роста бюджета.
                </p>
                <p className="text-[var(--text-secondary)] text-base leading-relaxed">
                  Собственный ресурс — 400 рабочих и 80 единиц спецтехники — обеспечивает независимость от рынка субподрядчиков. Контрактный график выдерживается без привязки к внешним исполнителям.
                </p>
                <div className="mt-4 p-5 border-l-2 border-[var(--blue-brand)] bg-[var(--navy-card)]">
                  <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                    <strong className="text-[var(--text-primary)]">Ключевое отличие от обычного подрядчика:</strong> мы не перекладываем координацию смежников на заказчика. Технический директор ведёт объект лично — от первого совещания до подписания акта ввода.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Что делаем ── */}
        <section className="py-24 bg-[var(--navy-card)]" aria-labelledby="whatwedo-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14 border-b border-[var(--divider)] pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                  02 / Что делаем
                </p>
                <h2
                  id="whatwedo-heading"
                  className="text-[var(--text-primary)] font-black text-3xl lg:text-4xl leading-tight"
                >
                  Проектирование, строительство,<br className="hidden md:block" /> инженерные сети, сдача
                </h2>
              </div>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-xs">
                Все виды работ выполняются в рамках одного генподрядного договора.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--divider)]">
              {whatWeDo.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-8 transition-colors duration-300 group"
                  >
                    <div className="w-11 h-11 bg-[var(--navy-elevated)] group-hover:bg-[var(--blue-brand)] flex items-center justify-center mb-6 transition-colors duration-300">
                      <Icon
                        size={20}
                        className="text-[var(--blue-brand)] group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-[var(--text-primary)] font-bold text-lg mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Преимущества ── */}
        <section className="py-24 bg-[var(--navy-deep)]" aria-labelledby="about-advantages-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14 border-b border-[var(--divider)] pb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                  03 / Преимущества
                </p>
                <h2
                  id="about-advantages-heading"
                  className="text-[var(--text-primary)] font-black text-3xl lg:text-4xl leading-tight"
                >
                  Полный цикл. Ответственность.<br className="hidden md:block" /> Снижение рисков. Контроль.
                </h2>
              </div>
              <p className="text-[var(--text-secondary)] text-base leading-relaxed max-w-xs">
                Четыре принципа, на которых строится работа с каждым заказчиком.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--divider)]">
              {advantages.map((adv, i) => (
                <div
                  key={adv.title}
                  className="bg-[var(--navy-deep)] hover:bg-[var(--navy-card)] p-10 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <CheckCircle2
                      size={22}
                      className="text-[var(--blue-brand)] mt-0.5 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="text-[var(--text-primary)] font-bold text-xl mb-3">
                        {adv.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                        {adv.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Руководство + Допуски ── */}
        <section className="py-24 bg-[var(--navy-card)]" aria-labelledby="leadership-heading">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-14 border-b border-[var(--divider)] pb-12">
              <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-5">
                04 / Руководство и документы
              </p>
              <h2
                id="leadership-heading"
                className="text-[var(--text-primary)] font-black text-3xl lg:text-4xl leading-tight"
              >
                Руководство компании
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              {/* Leaders */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <Users size={18} className="text-[var(--blue-brand)]" aria-hidden="true" />
                  <h3 className="text-[var(--text-primary)] font-bold text-base uppercase tracking-widest">
                    Руководство
                  </h3>
                </div>
                <div className="flex flex-col gap-px bg-[var(--divider)]">
                  {leaders.map((person) => (
                    <div
                      key={person.name}
                      className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-7 transition-colors duration-200 flex items-start gap-6"
                    >
                      <div
                        className="w-14 h-14 bg-[var(--navy-elevated)] border border-[var(--blue-brand)]/30 flex items-center justify-center shrink-0 text-[var(--blue-brand)] font-black text-sm tracking-wide"
                        aria-hidden="true"
                      >
                        {person.initials}
                      </div>
                      <div>
                        <p className="text-[var(--text-primary)] font-bold text-lg leading-tight">
                          {person.name}
                        </p>
                        <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest mt-1 mb-3">
                          {person.role}
                        </p>
                        <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                          {person.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Docs */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <FileCheck size={18} className="text-[var(--blue-brand)]" aria-hidden="true" />
                  <h3 className="text-[var(--text-primary)] font-bold text-base uppercase tracking-widest">
                    Допуски и лицензии
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--divider)]">
                  {docs.map((doc) => (
                    <div
                      key={doc.label}
                      className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-5 transition-colors duration-200"
                    >
                      <div className="flex items-start gap-3">
                        <ShieldCheck
                          size={15}
                          className="text-[var(--blue-brand)] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-[var(--text-primary)] font-bold text-sm">
                            {doc.label}
                          </p>
                          <p className="text-[var(--text-secondary)] text-xs mt-0.5 leading-relaxed">
                            {doc.sub}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <FormSection />
        <ContactsSection />
      </div>
    </SiteLayout>
  )
}
