import React from 'react'
import Image from 'next/image'
import styles from "./service.module.css"

const service = () => {
  return (
          <section className={styles.sectionOne}>
        <h1>Our Shop</h1>
        <p>Eleifend arcu non lorem justo in tempus purus gravida. Est tortor.</p>
        <ul>
          <li>All products</li>
          <li>Nail polishes</li>
          <li>Makeup bases</li>
          <li>Lipsticks</li>
          <li>Night creams</li>
          <li>Mascaras</li>
          <li>Eyebrow pencils</li>
        </ul>
        <div className={styles.sectionGrid}>
          <article>
            <Image src="/services/bottom/1.jpg" width={240} height={240} alt="eyebrow hair removal">
            </Image>
            <h3>Eye shadow</h3>
            <span>$55</span>
          </article>
                    <article>
            <Image src="/services/bottom/2.png" width={240} height={240} alt="eyebrow hair removal">
            </Image>
            <h3>Eye shadow</h3>
            <span>$55</span>
          </article>
                    <article>
            <Image src="/services/bottom/3.jpg" width={240} height={240} alt="eyebrow hair removal">
            </Image>
            <h3>Eye shadow</h3>
            <span>$55</span>
          </article>
                    <article>
            <Image src="/services/bottom/4.png" width={240} height={240} alt="eyebrow hair removal">
            </Image>
            <h3>Eye shadow</h3>
            <span>$55</span>
          </article>
                    <article>
            <Image src="/services/bottom/5.jpg" width={240} height={240} alt="eyebrow hair removal">
            </Image>
            <h3>Eye shadow</h3>
            <span>$55</span>
          </article>
                    <article>
            <Image src="/services/bottom/6.jpg" width={240} height={240} alt="eyebrow hair removal">
            </Image>
            <h3>Eye shadow</h3>
            <span>$55</span>
          </article>
                    <article>
            <Image src="/services/bottom/7.jpg" width={240} height={240} alt="eyebrow hair removal">
            </Image>
            <h3>Eye shadow</h3>
            <span>$55</span>
          </article>
                    <article>
            <Image src="/services/bottom/8.jpg" width={240} height={240} alt="eyebrow hair removal">
            </Image>
            <h3>Eye shadow</h3>
            <span>$55</span>
          </article>
        </div>
      </section>
  )
}

export default service