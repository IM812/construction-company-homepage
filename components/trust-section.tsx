import { Users, ShieldCheck, FileCheck } from "lucide-react"

const docs = [
  { label: "СРО НОСТРОЙ",      sub: "Свидетельство № 0129.01" },
  { label: "СРО НОПРИЗ",       sub: "Допуск к проектным работам" },
  { label: "Лицензия ФСБ",     sub: "Работа на режимных объектах" },
  { label: "Страхование СМР",  sub: "Покрытие до 500 млн ₽" },
  { label: "ГОСТ Р ISO 9001",  sub: "Система менеджмента качества" },
  { label: "Лицензия МЧС",     sub: "Монтаж систем пожарной защиты" },
]

const leaders = [
  {
    name: "Захаров С.В.",
    role: "Генеральный директор",
    exp: "20+ лет в строительстве. Руководит компанией с момента основания. Лично отвечает за соблюдение контрактных обязательств на каждом объекте.",
  },
  {
    name: "Казаков Л.Д.",
    role: "Технический директор",
    exp: "Образование МГСУ. Ведёт технический надзор на всех объектах компании. Специализация: промышленное строительство и реконструкция действующих предприятий.",
  },
]

export function TrustSection() {
  return (
    <section id="trust" className="py-20 sm:py-28 bg-[#f7f8fa]" aria-labelledby="trust-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="mb-12 border-b border-[#e2e6ef] pb-10">
          <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            05 / Доверие
          </p>
          <h2 id="trust-heading" className="text-[#0f1c3a] font-black text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Документы и руководство
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Documents */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileCheck size={18} className="text-[#1a5fd4]" aria-hidden="true" />
              <h3 className="text-[#0f1c3a] font-bold text-lg uppercase tracking-wide">Допуски и лицензии</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#e2e6ef]">
              {docs.map((doc) => (
                <div key={doc.label} className="bg-white hover:bg-[#f7f8fa] p-5 transition-colors duration-200">
                  <div className="flex items-start gap-3">
                    <ShieldCheck size={15} className="text-[#1a5fd4] mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <p className="text-[#0f1c3a] font-bold text-sm">{doc.label}</p>
                      <p className="text-[#5a6880] text-xs mt-0.5">{doc.sub}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users size={18} className="text-[#1a5fd4]" aria-hidden="true" />
              <h3 className="text-[#0f1c3a] font-bold text-lg uppercase tracking-wide">Руководство</h3>
            </div>
            <div className="flex flex-col gap-px bg-[#e2e6ef]">
              {leaders.map((person) => (
                <div key={person.name} className="bg-white hover:bg-[#f7f8fa] p-6 transition-colors duration-200 flex items-start gap-5">
                  <div className="w-12 h-12 bg-[#e8f0fd] flex items-center justify-center shrink-0 text-[#1a5fd4] font-black text-lg">
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[#0f1c3a] font-bold text-base">{person.name}</p>
                    <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-widest mb-2">{person.role}</p>
                    <p className="text-[#5a6880] text-sm leading-relaxed">{person.exp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
