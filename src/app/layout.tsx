import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Портфолио | AI Full-Stack разработчик",
  description: "Портфолио AI Full-Stack разработчика, лицеиста СУНЦ СВФУ и автора сборника «Якутия в цифрах».",
  applicationName: "Портфолио AI Full-Stack разработчика",
  keywords: ["AI Full-Stack", "разработчик", "СУНЦ СВФУ", "Якутия в цифрах"],
  openGraph: {
    title: "Портфолио | AI Full-Stack разработчик",
    description: "Технологии, исследования и работа с реальными задачами.",
    type: "website",
    locale: "ru_RU",
  },
}

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#07101d",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
