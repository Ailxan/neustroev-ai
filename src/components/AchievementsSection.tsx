import Reveal from "@/components/Reveal"
import ParallaxImage from "@/components/ParallaxImage"

const achievements = [
  ["2024", "Стипендия Главы Республики Саха (Якутия)"],
  ["2025", "Стипендия Главы города Якутска"],
  ["2026", "Вице-Мистер СУНЦ"],
  ["2026", "Мистер зрительских симпатий СУНЦ"],
  ["—", "Лауреат международных и всероссийских конференций"],
]

export default function AchievementsSection() {
  return (
    <section id="life" className="life-section section-space" aria-labelledby="life-title">
      <div className="page-width">
        <Reveal className="life-heading">
          <p className="section-label">За пределами редактора</p>
          <h2 id="life-title">Достижения<br />в жизни.</h2>
          <p>Не доказательство навыков разработчика. Скорее подтверждение, что я умею доводить начатое и не теряюсь вне кода.</p>
        </Reveal>
        <div className="life-layout">
          <Reveal className="event-visual">
            <ParallaxImage src="/photos/head-event.jpg" alt="На Ёлке Главы Республики Саха (Якутия)" sizes="(max-width: 900px) 100vw, 55vw" />
            <div className="image-caption"><span>Ёлка Главы РС(Я)</span><span>Личный архив</span></div>
          </Reveal>
          <div className="achievement-list">
            {achievements.map(([year, title], index) => (
              <Reveal className="achievement-row" key={title} delay={index * .025}>
                <span>{year}</span><p>{title}</p><i aria-hidden="true">↗</i>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
