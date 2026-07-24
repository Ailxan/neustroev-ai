import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Work from "@/components/Work"
import BookCaseSection from "@/components/BookCaseSection"
import AboutSection from "@/components/AboutSection"
import AchievementsSection from "@/components/AchievementsSection"
import ContactSection from "@/components/ContactSection"
import LenisProvider from "@/components/LenisProvider"
import ScrollProgress from "@/components/ScrollProgress"

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://neustroev-ai.ru/#person",
      name: "Айылхан Неустроев",
      url: "https://neustroev-ai.ru",
      email: "mailto:neustroev.ai@internet.ru",
      jobTitle: "Программист и веб-разработчик",
      knowsAbout: [
        "Веб-разработка",
        "Разработка сайтов",
        "Разработка веб-приложений",
        "Frontend-разработка",
        "Next.js",
        "React",
        "TypeScript",
        "Адаптивная вёрстка",
      ],
      sameAs: ["https://t.me/Neustroev_IT"],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://neustroev-ai.ru/#service",
      name: "Разработка цифровых проектов — Айылхан Неустроев",
      url: "https://neustroev-ai.ru",
      description:
        "Разработка сайтов, веб-приложений, интерфейсов и цифровых проектов.",
      areaServed: ["Якутск", "Республика Саха (Якутия)", "Россия"],
      serviceType: [
        "Разработка сайтов",
        "Разработка веб-приложений",
        "Frontend-разработка",
        "Создание интерфейсов",
        "Адаптивная вёрстка",
        "Доработка существующих проектов",
      ],
    },
  ],
}

export default function Page() {
  return (
    <LenisProvider>
      <a className="skip-link" href="#main">Перейти к содержанию</a>
      <ScrollProgress />
      <div className="site-shell">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        <main id="main">
          <Intro />
          <Work />
          <BookCaseSection />
          <AboutSection />
          <AchievementsSection />
        </main>
        <ContactSection />
      </div>
    </LenisProvider>
  )
}
