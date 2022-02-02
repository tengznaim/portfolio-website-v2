import React from "react"
import * as styles from "../../styles/skills.module.css"

export default function Skills() {
  return (
    <section className={styles.skillsContainer} id="skills">
      <h1 className={styles.header}>Skills</h1>
      <table className={styles.skillsTable}>
        <tbody>
          <tr>
            <td className={styles.categoryCol}>Languages</td>
            <td className={styles.dataCol}>
              Python, Java, JavaScript, SQL, HTML, CSS
            </td>
          </tr>
          <tr>
            <td className={styles.categoryCol}>AI/ML/DS</td>
            <td className={styles.dataCol}>
              TensorFlow, PyTorch, scikit-learn, Pandas, Numpy, Matplotlib,
              OpenCV
            </td>
          </tr>
          <tr>
            <td className={styles.categoryCol}>Web Development</td>
            <td className={styles.dataCol}>
              Flask, React JS, Gatsby JS, Streamlit
            </td>
          </tr>
          <tr>
            <td className={styles.categoryCol}>Cloud and Ops</td>
            <td className={styles.dataCol}>
              Google Cloud Platform, Airflow, Terraform, Docker, Selenium, Git
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}
