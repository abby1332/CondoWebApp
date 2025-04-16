import styles from './Header.module.css';
import logoWhite from '../assets/logoWhite.png';

function Header() {
  return (
    <header className={styles.header}>
    <div className={styles.leftSide}>
        <img src={logoWhite} alt="MBYC Logo" className={styles.logo} />
        <a href="/" className={styles.siteTitle}>Home</a>
        <a href="#permit" className={styles.siteTitle}>Request a Permit</a>
        <a href="#faq" className={styles.siteTitle}>FAQs</a>
        <a href="#contact" className={styles.siteTitle}>Contact</a>
    </div>
    </header>
  );
}

export default Header;
