import React from 'react'
import styles from "./service.module.css"

const service = () => {
  return (
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
  )
}

export default service