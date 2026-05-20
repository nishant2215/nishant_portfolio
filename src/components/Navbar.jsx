import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "../style/Navbar.module.css";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
  setMenuOpen(false);
};

  return (
    <header className={styles.header}>

      <div className={styles.logo}>
        <Link className={styles.link} to="/" style={{ fontFamily: "Playfair Display, serif" }}>Nishant Shrivastava</Link>
      </div>

      <div 
        className={styles.hamburger}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      <nav>
        <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`} style={{ fontFamily: "Playfair Display"}}>
          <li><Link className={styles.navLink} to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link className={styles.navLink} to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link className={styles.navLink} to="/projects" onClick={closeMenu}>Projects</Link></li>
          <li><Link className={styles.navLink} to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>

    </header>
  )
}