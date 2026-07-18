const links = [
  { label: "Работа", href: "#work" },
  { label: "Кейс", href: "#case" },
  { label: "Обо мне", href: "#about" },
  { label: "В жизни", href: "#life" },
]

export default function Header() {
  return (
    <header className="header-shell">
      <div className="header-inner">
        <a className="brand-mark" href="#top" aria-label="В начало страницы">
          <span>AI &amp; IT</span><span>FULL-STACK</span>
        </a>
        <nav aria-label="Основная навигация">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </nav>
        <a className="header-cta" href="#contact">Обсудить задачу</a>
      </div>
    </header>
  )
}
