import Header from "@/components/Header"
import Intro from "@/components/Intro"
import Work from "@/components/Work"
import BookCaseSection from "@/components/BookCaseSection"
import AboutSection from "@/components/AboutSection"
import AchievementsSection from "@/components/AchievementsSection"
import ContactSection from "@/components/ContactSection"
import LenisProvider from "@/components/LenisProvider"
import ScrollProgress from "@/components/ScrollProgress"

export default function Page() {
  return (
    <LenisProvider>
      <a className="skip-link" href="#main">Перейти к содержанию</a>
      <ScrollProgress />
      <div className="site-shell">
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
