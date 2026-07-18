import Reveal from "@/components/Reveal"

const capabilities = [
  ["Frontend", "Интерфейсы, которые быстро работают и нормально ощущаются на любом экране."],
  ["Backend", "API, данные и серверная логика без разрыва между макетом и продуктом."],
  ["Product", "Сначала разбираюсь в задаче. Только потом выбираю стек и пишу код."],
]

export default function AboutSection() {
  return (
    <section id="about" className="about-section section-space" aria-labelledby="about-title">
      <div className="page-width">
        <Reveal className="about-heading">
          <p className="section-label">Подход</p>
          <h2 id="about-title">Мне 17.<br />Но эффективность оценивают<br />не по возрасту.</h2>
          <p>Учусь в СУНЦ СВФУ, работаю как самозанятый и отвечаю за результат лично.</p>
        </Reveal>
        <div className="capability-grid">
          {capabilities.map(([title, text], index) => (
            <Reveal className={`capability-item capability-${index + 1}`} key={title} delay={(index % 2) * .05}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <i aria-hidden="true">↗</i>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
