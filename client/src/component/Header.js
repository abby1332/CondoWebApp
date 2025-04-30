// Header.js
import React, { useState } from "react";
import styles from "./Header.module.css";
import logoWhite from "../assets/logoWhite.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.leftSide}>
        <img src={logoWhite} alt="Madeira Beach Yacht Club Condos Logo" className={styles.logo} />
      </div>

      <nav className={styles.desktopNav}>
        <a href="https://www.sunhostresorts.com/" className={styles.navLink}>Home</a>
        <a href="#permit" className={styles.navLink}>Request a Permit</a>
        <a href="https://www.sunhostresorts.com/frequently-asked-questions" className={styles.navLink}>FAQs</a>
        <a href="https://www.sunhostresorts.com/contact-us" className={styles.navLink}>Contact</a>
      </nav>

      <button
        className={styles.hamburger}
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
      <nav className={`${styles.mobileNav} ${menuOpen ? styles.show : ""}`}>
        <a href="https://www.sunhostresorts.com/" className={styles.navLink}>Home</a>
        <a href="#permit" className={styles.navLink}>Request a Permit</a>
        <a href="#faq" className={styles.navLink}>FAQs</a>
        <a href="https://www.sunhostresorts.com/contact-us" className={styles.navLink}>Contact</a>
      </nav>
    </header>
  );
}

export default Header;
