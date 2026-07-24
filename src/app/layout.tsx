import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://neustroev-ai.ru"),
  title: "Айылхан Неустроев — программист и разработчик цифровых проектов",
  description:
    "Разрабатываю сайты, веб-приложения, интерфейсы и программные решения на Next.js, React и TypeScript. Создание проектов с нуля, адаптивная вёрстка, доработка и запуск готовых продуктов. Работаю в Якутске и удалённо.",
  applicationName: "Айылхан Неустроев — разработчик",
  alternates: {
    canonical: "/",
  },
  authors: [
    {
      name: "Айылхан Неустроев",
      url: "https://neustroev-ai.ru",
    },
  ],
  creator: "Айылхан Неустроев",
  publisher: "Айылхан Неустроев",
  category: "Разработка программного обеспечения",
  keywords: [
    "программист",
    "разработчик",
    "разработчик проектов",
    "разработка программного обеспечения",
    "разработка цифровых проектов",
    "разработка сайтов",
    "разработка веб-приложений",
    "создание веб-приложений",
    "frontend разработчик",
    "web разработчик",
    "веб-разработчик",
    "React разработчик",
    "Next.js разработчик",
    "TypeScript разработчик",
    "создание интерфейсов",
    "разработка пользовательских интерфейсов",
    "адаптивная вёрстка",
    "создание лендингов",
    "разработка портфолио",
    "доработка сайтов",
    "разработка проекта с нуля",
    "заказать разработку проекта",
    "программист Якутск",
    "разработчик Якутск",
    "веб-разработчик Якутск",
    "разработка сайтов Якутск",
    "создание сайтов Якутск",
    "разработка приложений Якутск",
    "разработчик Россия",
    "удалённый разработчик",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Айылхан Неустроев — программист и разработчик проектов",
    description:
      "Разработка сайтов, веб-приложений, интерфейсов и цифровых продуктов на Next.js, React и TypeScript.",
    url: "https://neustroev-ai.ru",
    siteName: "Айылхан Неустроев",
    type: "website",
    locale: "ru_RU",
    images: [
      {
        url: "/polar-night-material.png",
        width: 1672,
        height: 941,
        alt: "Портфолио разработчика Айылхана Неустроева",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Айылхан Неустроев — программист и разработчик проектов",
    description:
      "Разработка сайтов, веб-приложений, интерфейсов и цифровых продуктов на Next.js, React и TypeScript.",
    images: ["/polar-night-material.png"],
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
