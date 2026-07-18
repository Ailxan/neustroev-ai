"use client"

import { motion, useReducedMotion } from "framer-motion"

const ease = [0.16, 1, 0.3, 1] as const

export default function Intro() {
  const reduce = useReducedMotion()

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero-matrix" aria-hidden="true"><i /><i /><i /></div>
      <div className="hero-inner">
        <motion.div
          className="hero-copy"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .72, ease }}
        >
          <p className="hero-kicker"><span /> Full-Stack разработчик · Якутск</p>
          <h1 id="hero-title">
            <span className="hero-line"><b>Делаю проекты</b></span>
            <span className="hero-line"><b>под ваш бюджет,</b></span>
            <span className="hero-line hero-line-accent"><b>а не под шаблоны.</b></span>
          </h1>
          <div className="hero-bottom">
            <p>Беру на себя полный цикл: от идеи и плана до личного сопровождения запуска.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work"><span>Смотреть варианты</span><span aria-hidden="true">↘</span></a>
              <a className="button button-ghost" href="#contact"><span>Обсудить задачу</span><span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </motion.div>

        <motion.aside
          className="hero-profile"
          initial={reduce ? false : { opacity: 0, x: 34, clipPath: "inset(0 0 100% 0)" }}
          animate={{ opacity: 1, x: 0, clipPath: "inset(0 0 0% 0)" }}
          transition={{ delay: .16, duration: .9, ease }}
          aria-label="Профиль разработчика"
        >
          <div className="profile-head"><span>BUILD PROFILE</span><span>01 / 04</span></div>
          <strong>DESIGN<br />CODE<br />AI</strong>
          <dl>
            <div><dt>Фокус</dt><dd>Web + AI</dd></div>
            <div><dt>Стек</dt><dd>Next.js / TypeScript</dd></div>
            <div><dt>Формат</dt><dd>От идеи до запуска</dd></div>
          </dl>
          <div className="profile-signal" aria-hidden="true"><i /></div>
        </motion.aside>
      </div>
    </section>
  )
}
