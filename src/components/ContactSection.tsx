import Reveal from "@/components/Reveal"

export default function ContactSection() {
  return (
    <footer id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="contact-glow" aria-hidden="true" />
      <div className="page-width contact-inner">
        <Reveal>
          <p className="contact-kicker">Есть задача?</p>
          <h2 id="contact-title">Обсудим<br />и решим.</h2>
        </Reveal>
        <div className="contact-meta">
          <p>Сайт, веб-продукт или другие вопросы? Можно начать с короткого разговора без презентаций и лишнего пафоса.</p>
          <div className="contact-links" aria-label="Контакты">
            <a href="https://t.me/Travka141" target="_blank" rel="noopener noreferrer">
              <span>Telegram</span><strong>@Travka141</strong>
            </a>
            <a href="mailto:ail.neustroev23072009@gmail.com">
              <span>Email</span><strong>ail.neustroev23072009@gmail.com</strong>
            </a>
            <a href="tel:+79143056200">
              <span>Телефон</span><strong>+7 914 305 62 00</strong>
            </a>
          </div>
        </div>
        <div className="footer-line"><span>AI Full-Stack Developer</span><span>Республика Саха (Якутия)</span><span>© {new Date().getFullYear()}</span></div>
      </div>
    </footer>
  )
}
