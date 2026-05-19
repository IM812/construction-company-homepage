import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'СтройГенПодряд — Генеральный подрядчик в Москве',
  description:
    'Генподряд под ключ: от проектирования до сдачи объекта. Промышленные, коммерческие и жилые объекты. Работаем по всей России.',
  keywords: 'генподряд, генеральный подрядчик, строительство, Москва, под ключ',
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
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
