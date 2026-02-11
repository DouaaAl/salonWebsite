import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'

const home = () => {
  return (
    <section className={styles.sectionTwo}>
      <h1>
        Elegance comes from being as beautiful inside as outside
      </h1>
      <p>
        Eleifend arcu non lorem justo in tempus purus gravida. Est tortor egestas sed feugiat elementum. Viverra nulla amet a ultrices massa dui. Tortor est purus morbi vitae arcu suspendisse amet.
      </p>
      <div className={styles.socialsGrid}>
        <article>
          <Image  width="306" height="320" alt="1" src="/section/1.jpg"  />
          <div>
          <Image   width="30" height="30" alt="2" src="/section/icons/1.png" />
          <h3>make up</h3>
          </div>
        </article>
                <article>
          <Image  width="306" height="320" alt="2" src="/section/2.jpg"  />
          <div>
          <Image   width="30" height="30" alt="2" src="/section/icons/2.png" />
          <h3>hair styling</h3>
          </div>
        </article>
                <article>
          <Image  width="306" height="320" alt="2" src="/section/3.jpg"  />
          <div>
          <Image   width="30" height="30" alt="2" src="/section/icons/3.png" />
          <h3>nail care</h3>
          </div>
        </article>
                <article>
          <Image  width="306" height="320" alt="2" src="/section/4.jpg"  />
          <div>
          <Image   width="30" height="30" alt="2" src="/section/icons/4.png" />
          <h3>cosmetology</h3>
          </div>
        </article>
      </div>
    </section>
  )
}

export default home