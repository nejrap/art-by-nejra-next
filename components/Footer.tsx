import Link from 'next/link';
import SocialMedia from './SocialMediaIcons';
import styles from './styles.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <SocialMedia />
      </div>
      <ul className={styles.links}>
        <li>
          <Link href="/">Početna</Link>
        </li>
        <li>
          <Link href="/">O nama</Link>
        </li>
        <li>
          <Link href="/">Galerija</Link>
        </li>
        <li>
          <Link href="/">Instagram</Link>
        </li>
        <li>
          <Link href="/">Kontakt</Link>
        </li>
      </ul>
      <p id={styles.footer}>2023 | Made with ♥</p>
    </div>
  );
}
