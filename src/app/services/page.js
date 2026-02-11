import React from 'react'
import Image from 'next/image'
import styles from "./services.module.css"
import ServiceT from '../components/servicetwo/service'

const app = () => {
  return (
    <>
      <main className={styles.main}>
        <h1>
          Monthly Offers Take advantage of our exclusive deals!
        </h1>
        <div className={styles.topGrid}>
          <article>
            <Image src="/services/top/1.jpg" width={400} height={300} alt="eyebrow hair removal">
            </Image>
            <h3>Eyebrow Lamination</h3>
            <span>Eyebrow styling and lamination</span>
          </article>
                    <article>
            <Image src="/services/top/2.jpg" width={400} height={300} alt="eyebrow hair removal">
            </Image>
            <h3>Laser Hair Removal – Smart Package</h3>
            <span>Underarms, full bikini, and full legs</span>
          </article>
                    <article>
            <Image src="/services/top/3.jpg" width={400} height={300} alt="eyebrow hair removal">
            </Image>
            <h3>Progressive Permanent Hair Removal</h3>
            <span>6 Full Body sessions + 6 Laser <br /> Facial Rejuvenation sessions</span>
          </article>
        </div>
      </main>
      <ServiceT />
      <section className={styles.sectionTwo}>
        <h1>
          Subscribe to receive the latest offers from <br /> Aesthetic Lab
        </h1>
        <div>
          <input placeholder='Email Adress'>
          </input>
          <button>Subscribe</button>
        </div>
      </section>
    </>
  )
}

export default app