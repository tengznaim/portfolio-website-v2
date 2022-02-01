import React from "react"
import * as styles from "../styles/footer.module.css"
import GitHubIcon from "../assets/github.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import MediumIcon from "../assets/medium.svg"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.iconsContainer}>
        <a
          href="https://github.com/tengznaim"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GitHubIcon className={styles.socialIcons}></GitHubIcon>
        </a>
        <a
          href="https://www.linkedin.com/in/tengku-naim/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon className={styles.socialIcons}></LinkedInIcon>
        </a>
        <a
          href="https://medium.com/@tengkunaim"
          target="_blank"
          rel="noreferrer noopener"
        >
          <MediumIcon className={styles.socialIcons}></MediumIcon>
        </a>
      </div>
      <p className={styles.footerInfo}>Designed and Built by Tengku Naim</p>
    </footer>
  )
}
