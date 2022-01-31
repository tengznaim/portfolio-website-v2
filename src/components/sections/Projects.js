import React from "react"
import { Link } from "gatsby"
import * as styles from "../../styles/projects.module.css"
import GitHubIcon from "../../assets/github.svg"
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink"

export default function Projects() {
  return (
    <section className={styles.projectsContainer}>
      <h1 className={styles.header}>Projects</h1>
      <p className={styles.description}>
        I've worked in a variety of projects, primarily in the categories of
        machine learning, computer vision and web application development. To
        see more of my work, feel free to view the{" "}
        <Link to="/archive" className={styles.externalLink}>
          archive
        </Link>{" "}
        or my{" "}
        <a
          href="https://github.com/tengznaim"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.externalLink}
        >
          GitHub
        </a>
        .
      </p>
      <div className={styles.projectsGrid}>
        <div className={styles.projectItem}>
          <div className={styles.projectLinkContainer}>
            <a
              href="https://github.com/tengznaim"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon className={styles.linkIcons}></GitHubIcon>
            </a>
            <a
              href="https://github.com/tengznaim"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiExternalLink className={styles.linkIcons}></FiExternalLink>
            </a>
            <h2 className={styles.itemText} id={styles.projectTitle}>
              Project 1
            </h2>
            <p className={styles.itemText} id={styles.projectDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              culpa eos vitae provident corrupti amet alias fuga impedit magni
              consequatur.
            </p>
            <p className={styles.itemText} id={styles.projectDescription}>
              Tensorflow Streamlit Pandas
            </p>
          </div>
        </div>
        <div className={styles.projectItem}>
          <div className={styles.projectLinkContainer}>
            <a
              href="https://github.com/tengznaim"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon className={styles.linkIcons}></GitHubIcon>
            </a>
            <a
              href="https://github.com/tengznaim"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiExternalLink className={styles.linkIcons}></FiExternalLink>
            </a>
            <h2 className={styles.itemText} id={styles.projectTitle}>
              Project 1
            </h2>
            <p className={styles.itemText} id={styles.projectDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              culpa eos vitae provident corrupti amet alias fuga impedit magni
              consequatur.
            </p>
            <p className={styles.itemText} id={styles.projectDescription}>
              Tensorflow Streamlit Pandas
            </p>
          </div>
        </div>
        <div className={styles.projectItem}>
          <div className={styles.projectLinkContainer}>
            <a
              href="https://github.com/tengznaim"
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon className={styles.linkIcons}></GitHubIcon>
            </a>
            <a
              href="https://github.com/tengznaim"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FiExternalLink className={styles.linkIcons}></FiExternalLink>
            </a>
            <h2 className={styles.itemText} id={styles.projectTitle}>
              Project 1
            </h2>
            <p className={styles.itemText} id={styles.projectDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              culpa eos vitae provident corrupti amet alias fuga impedit magni
              consequatur.
            </p>
            <p className={styles.itemText} id={styles.projectDescription}>
              Tensorflow Streamlit Pandas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
