import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/404.module.css"

export default function NotFound() {
  return (
    <Layout>
      <h1 className={styles.header}>404</h1>
      <h2 className={styles.subheader}>Oops! There's nothing here!</h2>
      <Link to="/">
        <button id={styles.homeButton}>Take me home</button>
      </Link>
    </Layout>
  )
}
