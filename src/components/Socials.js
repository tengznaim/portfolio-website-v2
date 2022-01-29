import React from "react"
import * as styles from "../styles/socials.module.css"
import GitHubIcon from "../assets/github.svg"
import LinkedInIcon from "../assets/linkedin.svg"
import MediumIcon from "../assets/medium.svg"

export default function Socials() {
  return (
    <div className={styles.socialContainer}>
      <a href="https://github.com/tengznaim" target="_blank">
        <GitHubIcon className={styles.socialIcons}></GitHubIcon>
      </a>
      <a href="https://www.linkedin.com/in/tengku-naim/" target="_blank">
        <LinkedInIcon className={styles.socialIcons}></LinkedInIcon>
      </a>
      <a href="https://medium.com/@tengkunaim" target="_blank">
        <MediumIcon className={styles.socialIcons}></MediumIcon>
      </a>
    </div>
  )
}
