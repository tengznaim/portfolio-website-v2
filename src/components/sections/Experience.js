import React from "react"
import * as styles from "../../styles/experience.module.css"

export default function Experience() {
  return (
    <section className={styles.experienceContainer} id="experience">
      <h1 className={styles.header}>Experience</h1>
      <div className={styles.content}>
        <div className={styles.selectorList}>
          <button
            className={`${styles.selectorButtons} ${styles.activeButton}`}
            value="Maxis"
          >
            Maxis
          </button>
          <button className={styles.selectorButtons} value="PEKOM">
            PEKOM
          </button>
        </div>
        <div className={styles.experienceInfo}>
          <h1 className={styles.infoHeader}>
            Analytics and AI Intern (MLOps Team)
          </h1>
          <h1 className={styles.infoHeader}>July 2021 - January 2022</h1>
          <p className={styles.infoParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit
            totam voluptates voluptate neque! Maxime voluptatem dolorum animi at
            neque cupiditate deleniti obcaecati eligendi necessitatibus adipisci
            ea facilis nesciunt consectetur libero illo, mollitia veniam
            deserunt minima facere consequatur maiores, eveniet tenetur harum
            perspiciatis. Sint cum voluptatibus asperiores ex, quisquam commodi?
          </p>
        </div>
      </div>
    </section>
  )
}
