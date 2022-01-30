import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/navbar.module.css"
import PersonalLogo from "../assets/personal-logo.svg"
import Sidebar from "./Sidebar"

export default function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <PersonalLogo id={styles.logo} />
        <div className={styles.linksContainer}>
          <Link to="#experience" className={styles.navLinks}>
            Experience
          </Link>
          <Link to="#experience" className={styles.navLinks}>
            Projects
          </Link>
          <Link to="#experience" className={styles.navLinks}>
            Skills
          </Link>
          <Link to="#experience" className={styles.navLinks}>
            Contact
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            className={styles.navLinks}
            id={styles.resumeButton}
          >
            Resume
          </a>
        </div>
        <Sidebar></Sidebar>
      </nav>
    </header>
  )
}
