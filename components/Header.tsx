import Link from "next/link";

import { Dancing_Script } from 'next/font/google'
import styles from "./styles.module.css";

const  dancing = Dancing_Script({subsets: ['latin']})

export default function Header() {
  
  return (
    
    <section className="header">
      <nav className="nav">
        <div></div>
            <img
              id="navimg"
              src="/crna.png"
              alt="Logo"
              width={150}
              height={100}
            />
          
        <div className="nav-links">
          <ul>
            <li>
              <Link href="/">Početna</Link>
            </li>
            <li>
              <Link href="/about">O nama</Link>
            </li>
            <li>
              <Link href="/galerija">Galerija</Link>
            </li>
            <li>
              <Link href="/about">Instagram</Link>
            </li>
            <li>
              <Link href="/contact">Kontakt</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="text-box">
       
        <h1 className={dancing.className}>Art by Nejra</h1>
        <p className="animate__backInLeft">
          "Neki slikari sunce pretvaraju u žutu mrlju. Drugi žutu mrlju
          pretvaraju u sunce." <br />
          <br /> Pablo Picasso
        </p>
      </div>
      
    </section>
  );
}
