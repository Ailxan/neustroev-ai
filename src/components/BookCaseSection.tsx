import Reveal from "@/components/Reveal"
import ParallaxImage from "@/components/ParallaxImage"

export default function BookCaseSection() {
  return (
    <section id="case" className="book-case section-space" aria-labelledby="book-title">
      <div className="page-width book-panel">
        <div className="book-copy">
          <Reveal><p className="section-label">Не код, но тоже продукт</p><h2 id="book-title">«Якутия<br />в цифрах»</h2></Reveal>
          <Reveal className="book-description" delay={.06}>
            <p>Моя книга-брошюра о математических и логических задачах, связанных с моим родным краем. Она напечатана тиражом 1000 экземпляров, которые я бесплатно раздал общеобразовательным организациям Республики Саха (Якутия).</p>
            <p>Эта работа — про кругозор, самостоятельность и умение объяснять сложное нормальным языком.</p>
          </Reveal>
          <Reveal className="book-facts" delay={.1}>
            <div><span>Роль</span><strong>Автор</strong></div>
            <div><span>Формат</span><strong>Сборник задач</strong></div>
            <div><span>Публичность</span><strong>Интервью НВК «Саха»</strong></div>
          </Reveal>
        </div>
        <Reveal className="book-visual" delay={.08}>
          <span className="photo-index">02 / 02</span>
          <ParallaxImage src="/photos/nvk-interview.jpg" alt="Интервью НВК «Саха» о сборнике задач «Якутия в цифрах»" sizes="(max-width: 900px) 100vw, 52vw" />
          <div className="image-caption"><span>Интервью НВК «Саха»</span><span>«Якутия в цифрах»</span></div>
        </Reveal>
      </div>
    </section>
  )
}
