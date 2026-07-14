import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CookieBanner } from '@/components/cookie-banner'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const BASE_URL = "https://stroyfintrust.ru"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "СтройГенПодряд — Генеральный подрядчик в Москве",
    template: "%s — СтройГенПодряд",
  },
  description:
    "Генподряд под ключ: проектирование, строительство, инженерные сети, ввод в эксплуатацию. 230+ объектов. Фиксированная цена в договоре.",
  keywords: [
    "генподряд", "генеральный подрядчик", "строительство Москва",
    "под ключ", "промышленное строительство", "коммерческое строительство",
    "проектирование", "реконструкция", "инженерные сети",
  ],
  authors: [{ name: "СтройГенПодряд" }],
  creator: "СтройГенПодряд",
  publisher: "СтройГенПодряд",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: BASE_URL,
    siteName: "СтройГенПодряд",
    title: "СтройГенПодряд — Генеральный подрядчик в Москве",
    description:
      "Генподряд под ключ: проектирование, строительство, инженерные сети, ввод в эксплуатацию. 230+ объектов. Фиксированная цена в договоре.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "СтройГенПодряд — Генеральный подрядчик" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} bg-white`} data-scroll-behavior="smooth">
      <body className="font-sans antialiased bg-white text-[#0f1c3a]">
        {children}
        <CookieBanner />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
