import { X, CheckCircle2 } from "lucide-react"

const withoutUs = [
  "Вы тратите время на поиск проектировщика, строителя, сетевика — каждого отдельно",
  "Ответственность размыта: каждый отвечает только за свой участок",
  "Вы лично координируете каждого — или никто не контролирует никого",
  "Один сорвал сроки — весь проект стоит, бюджет растёт",
  "Дефект после сдачи: никто не признаёт вину, претензии ходят по кругу",
  "Шесть договоров, шесть гарантий, шесть точек риска",
]

const withUs = [
  "Вы подписываете один договор — и получаете готовый объект",
  "Один ответственный за сроки, бюджет и качество на всех этапах",
  "Вам не нужно координировать подрядчиков — это наша работа",
  "Цена зафиксирована в договоре. Без пересмотра. Без сюрпризов.",
  "Гарантия 5 лет на все СМР по единому гарантийному паспорту",
  "Еженедельный отчёт: фото, КС-2, статус бюджета — без запросов с вашей стороны",
]

const weHandle = [
  { title: "Сбор исходных данных",  desc: "Изыскания, ТУ от РСО, ИРД — без вашего участия" },
  { title: "Проектирование",        desc: "Стадии П и РД, BIM-модель, экспертиза, разрешение на строительство" },
  { title: "Согласования",          desc: "РСО, Мосгоргеотрест, органы надзора — всё ведём мы" },
  { title: "Строительство",         desc: "400+ рабочих и 80 единиц техники в штате. Без поиска бригад." },
  { title: "Инженерные сети",       desc: "ОВиК, ВК, электроснабжение, пожарная защита — монтаж и пусконаладка" },
  { title: "Ввод в эксплуатацию",   desc: "Госкомиссия, разрешение на ввод, полный пакет документации." },
]

export function ClientValueSection() {
  return (
    <section id="client-value" className="py-16 sm:py-28 bg-[#eef0f4]" aria-labelledby="client-value-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 border-b border-[#c8d0de] pb-10">
          <div>
            <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              04 / Ценность генподряда
            </p>
            <h2 id="client-value-heading" className="text-[#0f1c3a] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight text-balance">
              Вы получаете объект.<br />Не головную боль.
            </h2>
          </div>
          <p className="text-[#5a6880] text-lg leading-relaxed max-w-sm">
            Единственное принципиальное отличие генподряда — и оно меняет всё.
          </p>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#c8d0de] mb-14">
          <div className="bg-white p-8 lg:p-10">
            <p className="text-[#5a6880] text-xs font-semibold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <X size={13} className="text-red-400" aria-hidden="true" />
              Без генподрядчика
            </p>
            <ul className="space-y-4">
              {withoutUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <X size={13} className="text-red-400/70 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-[#5a6880] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 lg:p-10 border-l-4 border-[#1a5fd4]">
            <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.25em] mb-6 flex items-center gap-2">
              <CheckCircle2 size={13} aria-hidden="true" />
              С генподрядчиком СтройФинТраст
            </p>
            <ul className="space-y-4">
              {withUs.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={13} className="text-[#1a5fd4] mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-[#0f1c3a] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* What we handle */}
        <h3 className="text-[#0f1c3a] font-black text-2xl sm:text-3xl mb-8 border-b border-[#c8d0de] pb-6">
          Что мы берём на себя
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#c8d0de]">
          {weHandle.map((item, i) => (
            <div key={item.title} className="bg-white hover:bg-[#f7f8fa] p-6 sm:p-8 transition-colors duration-200 group">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[#1a5fd4] font-black text-xs w-7 h-7 bg-[#e8f0fd] flex items-center justify-center shrink-0" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 className="text-[#0f1c3a] font-bold text-sm sm:text-base">{item.title}</h4>
              </div>
              <p className="text-[#5a6880] text-xs sm:text-sm leading-relaxed pl-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
