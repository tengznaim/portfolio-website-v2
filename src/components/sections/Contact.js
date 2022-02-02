import React from "react"
import * as styles from "../../styles/contact.module.css"

export default function Contact() {
  return (
    <section className={styles.contactContainer} id="contact">
      <h1 className={styles.header} data-aos="fade" data-aos-delay="500">
        Contact
      </h1>
      <p className={styles.paragraph} data-aos="fade" data-aos-delay="1000">
        As I'm still a student until early 2023, I'm not actively looking for
        positions. However, if you'd like to know more about me, interested to
        work with me or just want to say hi, feel free to contact me!
      </p>
      <a href="mailto:naimtmas@gmail.com">
        <button
          id={styles.contactButton}
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          Drop me a message!
        </button>
      </a>
    </section>
  )
}
