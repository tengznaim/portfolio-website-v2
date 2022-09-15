import React, { useState } from "react"
import { Link } from "gatsby"
import * as styles from "../styles/sidebar.module.css"
import { CgMenuRight } from "@react-icons/all-files/cg/CgMenuRight"
import { CgClose } from "@react-icons/all-files/cg/CgClose"

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const toggleFunction = event => {
    setSidebarOpen(!sidebarOpen)

    if (event.target.id === "open") {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = null
    }
  }

  return (
    <div className={styles.sidebarWrapper}>
      {sidebarOpen ? (
        <CgClose
          className={styles.mobileToggleButton}
          onClick={toggleFunction}
          id="close"
        ></CgClose>
      ) : (
        <CgMenuRight
          className={styles.mobileToggleButton}
          onClick={toggleFunction}
          id="open"
        ></CgMenuRight>
      )}
      <div
        className={
          sidebarOpen ? styles.sidebar : `${styles.sidebar} ${styles.hidden}`
        }
      >
        <div className={styles.linksContainer}>
          <Link
            to="/#experience"
            className={styles.navLinks}
            onClick={toggleFunction}
          >
            Experience
          </Link>
          <Link
            to="/#projects"
            className={styles.navLinks}
            onClick={toggleFunction}
          >
            Projects
          </Link>
          <Link
            to="/#skills"
            className={styles.navLinks}
            onClick={toggleFunction}
          >
            Skills
          </Link>
          <Link
            to="/#contact"
            className={styles.navLinks}
            onClick={toggleFunction}
          >
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
      </div>
    </div>
  )
}
