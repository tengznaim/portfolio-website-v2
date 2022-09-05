import React from "react"
import * as styles from "../../styles/skills.module.css"

export default function Skills() {
  return (
    <section className={styles.skillsContainer} id="skills">
      <h1 className={styles.header} data-aos="fade" data-aos-delay="500">
        Skills
      </h1>
      <table
        className={styles.skillsTable}
        data-aos="fade"
        data-aos-delay="500"
      >
        <tbody>
          <tr data-aos="fade-right" data-aos-delay="1000">
            <td className={styles.categoryCol}>Languages</td>
            <td className={styles.dataCol}>
              Python, Java, JavaScript, SQL, HTML, CSS
            </td>
          </tr>
          <tr data-aos="fade-right" data-aos-delay="1500">
            <td className={styles.categoryCol}>AI/ML/DS</td>
            <td className={styles.dataCol}>
              TensorFlow, PyTorch, scikit-learn, PyCaret, tsfresh, Pandas,
              Numpy, Matplotlib, OpenCV
            </td>
          </tr>
          <tr data-aos="fade-right" data-aos-delay="2000">
            <td className={styles.categoryCol}>Web Development</td>
            <td className={styles.dataCol}>
              Flask, React JS, Gatsby JS, Streamlit
            </td>
          </tr>
          <tr data-aos="fade-right" data-aos-delay="2500">
            <td className={styles.categoryCol}>Cloud and Ops</td>
            <td className={styles.dataCol}>
              Google Cloud Platform, Firebase, Airflow, Terraform, Docker,
              Selenium, Git
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
