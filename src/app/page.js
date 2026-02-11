import Image from "next/image";
import styles from "./page.module.css";
import HomeOne from "./components/hometwo/home";

export default function Home() {
  return (
  <>
  <main className={styles.main}>
    <Image
    src="/main.jpg"
    alt="main"
    width={2500}
    height={1200} />
  </main>
  <section className={styles.firstSection}>
    <div>
      <Image width="480" height="745" alt="1" src="/first/1.jpg">
      </Image>
      <article>
        <h1>
          Professional Premium-Grade Skincare and Beauty Products
        </h1>
        <p>
          Expertise combined with quality: The essence of beauty. At Aesthetic Lab, we offer exceptional professional skincare and beauty products tailored for you.
        </p>
        <button><Image width="36" height="36" alt="1" src="/clock.png"></Image> BOOK NOW</button>
      </article>
    </div>
    <Image width="914" height="357" alt="2" src="/first/2.jpg">
    </Image>
  </section>
    <HomeOne />
  </>
  );
}
