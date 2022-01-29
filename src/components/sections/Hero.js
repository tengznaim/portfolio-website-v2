import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/hero.module.css"

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.leftText}>
        <h1 className={styles.header}>
          Hello, I'm <span className={styles.highlighted}>Naim!</span>
        </h1>
        <h1 className={styles.subheader}>
          I love making <span className={styles.highlighted}>computers</span>{" "}
          solve <span className={styles.highlighted}>human problems</span>
        </h1>
        <Link to="/archive">
          <button id={styles.archiveButton}>Check out my work!</button>
        </Link>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.rightText}>
        <p className={styles.aboutParagraph}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum animi
          nulla voluptates beatae? Nemo, animi optio. Libero vel culpa doloribus
          unde nemo hic. Aliquam, minima blanditiis dignissimos fugit,
          laudantium nobis provident a perferendis cum libero placeat numquam
          enim unde animi minus quis! Itaque tempore mollitia hic repudiandae
          perferendis sed iste.
        </p>
      </div>
    </section>
  )
}
