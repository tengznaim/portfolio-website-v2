import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"
import * as styles from "../styles/navbar.module.css"
import PersonalLogo from "../assets/personal-logo.svg"
import Sidebar from "./Sidebar"

export default function Navbar() {
  const scrollPos = useRef(0)
  const [scrolledToTop, setScrolledTop] = useState(true)
  const [navVisible, setNavVisible] = useState(true)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    function handleScroll() {
      const currPos = document.body.getBoundingClientRect().top

      // Scrolling down AND below threshold
      if (currPos < scrollPos.current && currPos <= -70) {
        setScrolledTop(false)
        setNavVisible(false)
        // Scrolling up AND above threshold
      } else if (currPos > scrollPos.current && currPos > -70) {
        setScrolledTop(true)
        //Scrolling up but not above threshold
      } else if (currPos > scrollPos.current) {
        setNavVisible(true)
      }
      scrollPos.current = currPos
    }

    //Cleanup Function
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolledToTop, navVisible])

  return (
    <header
      className={`${styles.header} ${!navVisible && styles.hidden} ${
        !scrolledToTop && styles.glass
      }`}
    >
      <nav className={styles.navbar}>
        <Link to="/">
          <PersonalLogo id={styles.logo} />
        </Link>
        <div className={styles.linksContainer}>
          <Link to="/#experience" className={styles.navLinks}>
            Experience
          </Link>
          <Link to="/#projects" className={styles.navLinks}>
            Projects
          </Link>
          <Link to="/#skills" className={styles.navLinks}>
            Skills
          </Link>
          <Link to="/#contact" className={styles.navLinks}>
            Contact
          </Link>
          <a
            href="/tengku_naim_resume.pdf"
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
