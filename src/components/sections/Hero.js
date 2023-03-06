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
          I love <span className={styles.highlighted}>teaching machines</span>{" "}
          to <span className={styles.highlighted}>solve problems</span> with{" "}
          <span className={styles.highlighted}>data</span>
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
          I'm a <span className={styles.highlighted}>first class graduate</span>{" "}
          in <span className={styles.highlighted}>Computer Science</span> from{" "}
          <span className={styles.highlighted}>University of Malaya</span>,
          specialising in{" "}
          <span className={styles.highlighted}>Artificial Intelligence</span>. I
          love building AI-based solutions (hopefully those that don't take over
          the world) and venturing into the vast world of technology.
          Professionally, my areas of interest include{" "}
          <span className={styles.highlighted}>Computer Vision</span>,{" "}
          <span className={styles.highlighted}>Data Science</span> and{" "}
          <span className={styles.highlighted}>
            Machine Learning Operations (MLOps)
          </span>
        </p>
      </div>
    </section>
  )
}
