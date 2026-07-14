import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const RESEND_API_KEY = "re_cf8Xjqk9_FZZbb31ijGmGoPfNbKSG9tS6"
const CONTACT_EMAIL = "info@stroygenpodriad.ru"

const resend = new Resend(RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, phone, email, service, area, message, source, answers } = body

    if (!name || !phone) {
      return NextResponse.json({ error: "Обязательные поля: имя и телефон." }, { status: 400 })
    }

    const toEmail = CONTACT_EMAIL

    const sourceLabel: Record<string, string> = {
      contact_form: "Форма контактов",
      popup: "Всплывающий попап",
      quiz: "Квиз-калькулятор",
    }

    const serviceMap: Record<string, string> = {
      genpodrjad: "Генподряд под ключ",
      proektirovanie: "Проектирование",
      stroitelstvo: "Строительство",
      rekonstruktsiya: "Реконструкция",
      "inzhenernye-seti": "Инженерные сети",
      nadzor: "Технический надзор",
    }

    const quizAnswersMap: Record<string, string> = {
      warehouse: "Склад / Логистика",
      office: "Офис / Торговый центр",
      industrial: "Производство / Завод",
      residential: "Жилой дом / ЖК",
      lt1000: "До 1 000 м²",
      "1000-5000": "1 000 — 5 000 м²",
      "5000-20000": "5 000 — 20 000 м²",
      gt20000: "Более 20 000 м²",
      fullcycle: "Полный цикл",
      design: "Только проектирование",
      construction: "Только строительство",
      reconstruction: "Реконструкция / Капремонт",
    }

    const now = new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })

    const quizHtml = answers
      ? `
        <tr><td colspan="2" style="padding:12px 24px 4px;font-size:11px;font-weight:700;color:#8d98aa;text-transform:uppercase;letter-spacing:1px;background:#f7f8fa;">Ответы квиза</td></tr>
        ${answers.type ? `<tr><td style="padding:8px 24px;font-size:13px;color:#5a6880;width:160px;">Тип объекта</td><td style="padding:8px 24px;font-size:14px;color:#0f1c3a;font-weight:600;">${quizAnswersMap[answers.type] ?? answers.type}</td></tr>` : ""}
        ${answers.area ? `<tr><td style="padding:8px 24px;font-size:13px;color:#5a6880;">Площадь</td><td style="padding:8px 24px;font-size:14px;color:#0f1c3a;font-weight:600;">${quizAnswersMap[answers.area] ?? answers.area}</td></tr>` : ""}
        ${answers.works ? `<tr><td style="padding:8px 24px;font-size:13px;color:#5a6880;">Работы</td><td style="padding:8px 24px;font-size:14px;color:#0f1c3a;font-weight:600;">${quizAnswersMap[answers.works] ?? answers.works}</td></tr>` : ""}
      `
      : ""

    const html = `
<!DOCTYPE html>
<html lang="ru">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f0f2f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f2f5;padding:32px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:4px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

        <tr><td style="background:#1a5fd4;padding:20px 24px;">
          <p style="margin:0;color:#ffffff;font-size:18px;font-weight:800;letter-spacing:-0.3px;">СтройГенПодряд</p>
          <p style="margin:4px 0 0;color:rgba(255,255,255,0.7);font-size:13px;">Новая заявка с сайта</p>
        </td></tr>

        <tr><td style="background:#edf3fc;padding:10px 24px;border-bottom:1px solid #dce7fa;">
          <p style="margin:0;font-size:12px;color:#1a5fd4;font-weight:700;text-transform:uppercase;letter-spacing:0.8px;">
            Источник: ${sourceLabel[source] ?? source ?? "Сайт"}
          </p>
        </td></tr>

        <tr><td style="padding:0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
            <tr><td colspan="2" style="padding:16px 24px 4px;font-size:11px;font-weight:700;color:#8d98aa;text-transform:uppercase;letter-spacing:1px;background:#f7f8fa;">Контакты</td></tr>
            <tr><td style="padding:10px 24px;font-size:13px;color:#5a6880;width:140px;">Имя</td><td style="padding:10px 24px;font-size:15px;color:#0f1c3a;font-weight:700;">${name}</td></tr>
            ${company ? `<tr><td style="padding:10px 24px;font-size:13px;color:#5a6880;">Компания</td><td style="padding:10px 24px;font-size:14px;color:#0f1c3a;font-weight:600;">${company}</td></tr>` : ""}
            <tr><td style="padding:10px 24px;font-size:13px;color:#5a6880;">Телефон</td><td style="padding:10px 24px;font-size:15px;color:#1a5fd4;font-weight:700;"><a href="tel:${phone}" style="color:#1a5fd4;text-decoration:none;">${phone}</a></td></tr>
            ${email ? `<tr><td style="padding:10px 24px;font-size:13px;color:#5a6880;">Email</td><td style="padding:10px 24px;font-size:14px;"><a href="mailto:${email}" style="color:#1a5fd4;text-decoration:none;">${email}</a></td></tr>` : ""}

            ${service || area ? `
            <tr><td colspan="2" style="padding:16px 24px 4px;font-size:11px;font-weight:700;color:#8d98aa;text-transform:uppercase;letter-spacing:1px;background:#f7f8fa;">Объект</td></tr>
            ${service ? `<tr><td style="padding:10px 24px;font-size:13px;color:#5a6880;">Услуга</td><td style="padding:10px 24px;font-size:14px;color:#0f1c3a;font-weight:600;">${serviceMap[service] ?? service}</td></tr>` : ""}
            ${area ? `<tr><td style="padding:10px 24px;font-size:13px;color:#5a6880;">Площадь</td><td style="padding:10px 24px;font-size:14px;color:#0f1c3a;font-weight:600;">${area} м²</td></tr>` : ""}
            ` : ""}

            ${quizHtml}

            ${message ? `
            <tr><td colspan="2" style="padding:16px 24px 4px;font-size:11px;font-weight:700;color:#8d98aa;text-transform:uppercase;letter-spacing:1px;background:#f7f8fa;">Комментарий</td></tr>
            <tr><td colspan="2" style="padding:10px 24px 16px;font-size:14px;color:#0f1c3a;line-height:1.6;">${message}</td></tr>
            ` : ""}
          </table>
        </td></tr>

        <tr><td style="background:#f7f8fa;border-top:1px solid #e2e6ef;padding:14px 24px;">
          <p style="margin:0;font-size:12px;color:#8d98aa;">Получено: ${now} (МСК)</p>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`

    const subject = `Новая заявка от ${name}${company ? ` (${company})` : ""} — ${sourceLabel[source] ?? "Сайт"}`

    const { error } = await resend.emails.send({
      from: "СтройГенПодряд <onboarding@resend.dev>",
      to: [toEmail],
      replyTo: email || undefined,
      subject,
      html,
    })

    if (error) {
      console.error("[contact] Resend error:", error)
      return NextResponse.json({ error: "Ошибка отправки письма." }, { status: 500 })
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error("[contact] server error:", err)
    return NextResponse.json({ error: "Ошибка сервера. Попробуйте позже." }, { status: 500 })
  }
}
