"use client"

import Reveal from "@/components/Reveal"
import type { PointerEvent } from "react"

const stack = ["Next.js", "TypeScript", "React", "Motion", "Lenis", "AI"]

export default function Work() {
  const moveSpotlight = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--mouse-x", `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty("--mouse-y", `${event.clientY - rect.top}px`)
  }

  return (
    <section id="work" className="work-section section-space" aria-labelledby="work-title">
      <div className="page-width">
        <Reveal className="work-intro">
          <p className="section-label">Работа</p>
          <h2 id="work-title">Функциональность —<br />прежде всего.</h2>
          <p>Работаю за результат, а не за часы, поэтому цена адекватная.</p>
        </Reveal>

        <Reveal className="live-case" delay={.06}>
          <div className="case-spotlight" onPointerMove={moveSpotlight} aria-hidden="true" />
          <div className="case-index"><span>001</span><span>Сейчас в продакшене</span><span>2026</span></div>
          <div className="case-main">
            <div>
              <span className="case-type">Собственный кейс</span>
              <h3>Этот сайт —<br />продукт, а не декорация.</h3>
            </div>
            <p>Стратегия, визуальная система, адаптивная вёрстка и анимации собраны в одном Next.js-проекте.</p>
          </div>
          <div className="case-footer">
            <div className="stack-list" aria-label="Технологии">
              {stack.map((item) => <span key={item}>{item}</span>)}
            </div>
            <span className="case-arrow" aria-hidden="true">↗</span>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
