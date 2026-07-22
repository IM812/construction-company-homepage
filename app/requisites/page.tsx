import type { Metadata } from "next"
import Link from "next/link"
import { SiteLayout } from "@/components/site-layout"

export const metadata: Metadata = {
  title: "Реквизиты — ООО СтройФинТраст",
  description: "Банковские и юридические реквизиты ООО «Группа Стройфинтраст инжиниринг» (ООО «СтройФинТраст»). ИНН 9725027278, ОГРН 1197746749771.",
}

const requisites = [
  { label: "Полное наименование", value: 'Общество с ограниченной ответственностью "Группа Стройфинтраст инжиниринг"' },
  { label: "Сокращённое наименование", value: 'ООО "СтройФинТраст"' },
  { label: "Юридический адрес", value: "105122, РФ, г. Москва, Щелковское шоссе, д. 9, пом/ком/оф I/17/105" },
  { label: "ИНН", value: "9725027278" },
  { label: "КПП", value: "771801001" },
  { label: "ОГРН", value: "1197746749771" },
  { label: "ОКПО", value: "42849324" },
  { label: "Код ОКАТО", value: "45263564000" },
  { label: "Код ОКТМО", value: "45305000000" },
]

const bank = [
  { label: "Наименование банка", value: "ФИЛИАЛ № 7701 БАНКА ВТБ (ПАО)" },
  { label: "Расчётный счёт", value: "40702810806010000236" },
  { label: "Корреспондентский счёт", value: "30101810345250000745 в ГУ БАНКА РОССИИ ПО ЦФО" },
  { label: "БИК", value: "044525745" },
]

const contacts = [
  { label: "Генеральный директор", value: "Захаров Станислав Васильевич" },
  { label: "Главный бухгалтер", value: "Захаров Станислав Васильевич" },
  { label: "Главный инженер", value: "Казаков Леонид Джемалович" },
  { label: "Телефон", value: "+7 (499) 390-94-73" },
  { label: "Мобильный телефон", value: "+7 (926) 638-73-40" },
  { label: "E-mail", value: "info@stroyfintrust.ru" },
  { label: "Сайт", value: "www.stroyfintrust.ru" },
]

const sro = [
  { label: "Членство в СРО", value: 'Ассоциация «Саморегулируемая организация "Строительные организации Москвы"» (Ассоциация СРО «СОМ»)' },
]

function ReqTable({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="divide-y divide-[#e2e6ef]">
      {rows.map(({ label, value }) => (
        <div key={label} className="grid grid-cols-1 sm:grid-cols-[220px_1fr] gap-1 sm:gap-6 py-4">
          <dt className="text-[#8d98aa] text-xs font-semibold uppercase tracking-widest self-start pt-0.5">{label}</dt>
          <dd className="text-[#0f1c3a] text-sm font-medium">{value}</dd>
        </div>
      ))}
    </div>
  )
}

export default function RequisitesPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-[#0f1c3a] pt-28 pb-16" aria-labelledby="req-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#1a5fd4] text-xs font-semibold uppercase tracking-[0.3em] mb-4">Документы</p>
          <h1 id="req-heading" className="text-white font-black text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4">
            Реквизиты организации
          </h1>
          <p className="text-white/60 text-base">
            ООО «Группа Стройфинтраст инжиниринг» — официальные юридические и банковские реквизиты.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Юридические */}
          <div>
            <h2 className="text-[#0f1c3a] font-bold text-lg sm:text-xl mb-6 border-l-4 border-[#1a5fd4] pl-4">
              Юридические реквизиты
            </h2>
            <dl>
              <ReqTable rows={requisites} />
            </dl>
          </div>

          {/* Банковские */}
          <div>
            <h2 className="text-[#0f1c3a] font-bold text-lg sm:text-xl mb-6 border-l-4 border-[#1a5fd4] pl-4">
              Банковские реквизиты
            </h2>
            <dl>
              <ReqTable rows={bank} />
            </dl>
          </div>

          {/* Контактные лица */}
          <div>
            <h2 className="text-[#0f1c3a] font-bold text-lg sm:text-xl mb-6 border-l-4 border-[#1a5fd4] pl-4">
              Руководство и контакты
            </h2>
            <dl>
              <ReqTable rows={contacts} />
            </dl>
          </div>

          {/* СРО */}
          <div>
            <h2 className="text-[#0f1c3a] font-bold text-lg sm:text-xl mb-6 border-l-4 border-[#1a5fd4] pl-4">
              Членство в СРО
            </h2>
            <dl>
              <ReqTable rows={sro} />
            </dl>
          </div>

          {/* Back */}
          <div className="pt-8 border-t border-[#e2e6ef]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#1a5fd4] text-sm font-semibold hover:text-[#0f1c3a] transition-colors"
            >
              ← Вернуться на главную
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
