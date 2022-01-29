import React from "react"
import { Link } from "gatsby"
import * as styles from "../styles/navbar.module.css"
import PersonalLogo from "../assets/personal-logo.svg"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <PersonalLogo id={styles.logo} />
      <div className={styles.linksContainer}>
        <Link to="#experience" className={styles.navLinks}>
          Experience
        </Link>
      </div>
    </nav>
  )
}
