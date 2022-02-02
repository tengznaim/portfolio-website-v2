import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/hero.module.css"

export default function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.leftText}>
        <h1 className={styles.header} data-aos="fade-right">
          Hello, I'm <span className={styles.highlighted}>Naim!</span>
        </h1>
        <h1
          className={styles.subheader}
          data-aos="fade-right"
          data-aos-delay="500"
        >
          I love <span className={styles.highlighted}>solving problems</span>{" "}
          with <span className={styles.highlighted}>data</span> and{" "}
          <span className={styles.highlighted}>computers</span>
        </h1>
        <Link to="/archive">
          <button
            id={styles.archiveButton}
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            Check out my work!
          </button>
        </Link>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.rightText}>
        <p
          className={styles.aboutParagraph}
          data-aos="fade-left"
          data-aos-delay="1500"
        >
          I'm a third year{" "}
          <span className={styles.highlighted}>Computer Science</span>{" "}
          undergraduate majoring in{" "}
          <span className={styles.highlighted}>Artificial Intelligence</span> at{" "}
          <span className={styles.highlighted}>University of Malaya</span>. I
          love building AI-based solutions (hopefully those that don't take over
          the world) and venturing into the vast world of technology. Currently,
          I'm focusing on completing my final two semesters at university.
        </p>
      </div>
    </section>
  )
}
