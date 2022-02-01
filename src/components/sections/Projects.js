import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "../../styles/projects.module.css"
import GitHubIcon from "../../assets/github.svg"
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query projectQuery {
      allMarkdownRemark(
        filter: {
          frontmatter: { feature: { eq: true } }
          fileAbsolutePath: { regex: "/projects/" }
        }
        sort: { order: ASC, fields: frontmatter___featureID }
      ) {
        nodes {
          id
          frontmatter {
            title
            title
            description
            githubRepo
            techStack
            deployedLink
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes

  return (
    <section className={styles.projectsContainer} id="projects">
      <h1 className={styles.header}>Projects</h1>
      <p className={styles.description}>
        I've worked on a variety of projects, primarily in the fields of machine
        learning, computer vision and web application development. To see more
        of my work, especially those in professional environments, feel free to
        view my{" "}
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
        {nodes.map(node => (
          <div className={styles.projectItem} key={node.id}>
            <div className={styles.projectLinkContainer}>
              {node.frontmatter.githubRepo && (
                <a
                  href={node.frontmatter.githubRepo}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GitHubIcon className={styles.linkIcons}></GitHubIcon>
                </a>
              )}
              {node.frontmatter.deployedLink && (
                <a
                  href={node.frontmatter.deployedLink}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FiExternalLink className={styles.linkIcons}></FiExternalLink>
                </a>
              )}
              <h2 className={styles.itemText} id={styles.projectTitle}>
                {node.frontmatter.title}
              </h2>
              <p className={styles.itemText} id={styles.projectDescription}>
                {node.frontmatter.description}
              </p>
              <p className={styles.itemText} id={styles.projectDescription}>
                {node.frontmatter.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
