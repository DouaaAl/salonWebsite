import "./globals.css"
import styles from "./layout.module.css"
import { Imperial_Script, Poppins, Aclonica } from 'next/font/google';
import Image from "next/image";
// Initialize Imperial Script
const imperialScript = Imperial_Script({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-imperial', 
});
const aclonica = Aclonica({
  weight: '400', 
  subsets: ['latin'],
  display: 'swap',
});

// Initialize Poppins
const poppins = Poppins({
  weight: ['100', '400', '700', '900'], // Choose the weights you actually need
  subsets: ['latin'],
  variable: '--font-poppins',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <header className={styles.header}>
      <h1 className="">
        <span>Beauty</span> <span>Salon</span>
      </h1>
      <nav>
        <li> <a href="/">Home</a></li>
        <li> <a href="/services">Services</a> </li>
        <li> <a href="/contact">Contact Us</a></li>
        <li> <a href="/book"> Book Now</a> </li>
      </nav>
      </header>
        {children}
        <footer className={styles.footer}>
          <h1 className="">
        <span>Beauty</span> <span>Salon</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>
          <Image src={`/socials/facebook.png`} width={20}
          height={20}
          alt="facebook" />
          <Image src={`/socials/insta.png`} width={20}
          height={20}
          alt="instagram" />
          <Image src={`/socials/telegram.png`} width={20}
          height={20}
          alt="telegram" />
          <Image src={`/socials/x.png`} width={20}
          height={20}
          alt="x" />
        </div>
        </footer>
      </body>
    </html>
  );
}
