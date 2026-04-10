import { Award, FileCheck, Users, ShieldCheck } from "lucide-react"

const docs = [
  { label: "СРО НОСТРОЙ", sub: "Свидетельство № 0129.01" },
  { label: "СРО НОПРИЗ", sub: "Допуск к проектным работам" },
  { label: "Лицензия ФСБ", sub: "Работа на режимных объектах" },
  { label: "Страхование СМР", sub: "Покрытие до 500 млн ₽" },
  { label: "ГОСТ Р ISO 9001", sub: "Система менеджмента качества" },
  { label: "Лицензия МЧС", sub: "Монтаж систем пожарной защиты" },
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
    <section
      id="trust"
      className="py-28 bg-[var(--navy-card)]"
      aria-labelledby="trust-heading"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="mb-16 border-b border-[var(--divider)] pb-12">
          <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-[0.3em] mb-4">
            05 / Доверие
          </p>
          <h2
            id="trust-heading"
            className="text-[var(--text-primary)] font-black text-4xl lg:text-5xl leading-tight text-balance"
          >
            Документы и руководство
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Documents */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <FileCheck size={20} className="text-[var(--blue-brand)]" aria-hidden="true" />
              <h3 className="text-[var(--text-primary)] font-bold text-xl uppercase tracking-wide">
                Допуски и лицензии
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--divider)]">
              {docs.map((doc) => (
                <div
                  key={doc.label}
                  className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-5 transition-colors duration-200 group"
                >
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={16}
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

          {/* Leadership */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users size={20} className="text-[var(--blue-brand)]" aria-hidden="true" />
              <h3 className="text-[var(--text-primary)] font-bold text-xl uppercase tracking-wide">
                Руководство
              </h3>
            </div>
            <div className="flex flex-col gap-px bg-[var(--divider)]">
              {leaders.map((person) => (
                <div
                  key={person.name}
                  className="bg-[var(--navy-card)] hover:bg-[var(--navy-elevated)] p-6 transition-colors duration-200 flex items-start gap-5"
                >
                  <div
                    className="w-12 h-12 bg-[var(--navy-elevated)] border border-[var(--divider)] flex items-center justify-center shrink-0 text-[var(--blue-brand)] font-black text-lg"
                    aria-hidden="true"
                  >
                    {person.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[var(--text-primary)] font-bold text-base">
                      {person.name}
                    </p>
                    <p className="text-[var(--blue-brand)] text-xs font-semibold uppercase tracking-widest mb-1">
                      {person.role}
                    </p>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                      {person.exp}
                    </p>
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
