import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "../../styles/projects.module.css"
import GitHubIcon from "../../assets/github.svg"
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink"

export default function Projects() {
  const data = useStaticQuery(graphql`
    query projectQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___featureID }
        filter: {
          fileAbsolutePath: { regex: "/projects/" }
          frontmatter: { feature: { eq: true } }
        }
      ) {
        nodes {
          id
          frontmatter {
            title
            description
            featureDesc
            githubRepo
            techStack
            deployedLink
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes

  const [visibleCount, setVisibleCount] = useState(3)
  const handleExpand = event => {
    // If the see more button is click, display the rest of the projects. Else, reset to the default count.
    if (visibleCount === 3) {
      setVisibleCount(nodes.length)
    } else {
      setVisibleCount(3)
    }
  }

  return (
    <section className={styles.projectsContainer} id="projects">
      <h1 className={styles.header} data-aos="fade" data-aos-delay="500">
        Projects
      </h1>
      <p className={styles.description} data-aos="fade" data-aos-delay="1000">
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
        {/* By default, show the first 3 projects and upon clicking see more, expand to the show the rest of the projects. */}
        {nodes.slice(0, visibleCount).map((node, index) => (
          <div
            className={styles.projectItem}
            key={node.id}
            data-aos="fade-up"
            data-aos-delay={index < 3 ? 1500 + index * 500 : 0}
          >
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
                {node.frontmatter.featureDesc
                  ? node.frontmatter.featureDesc
                  : node.frontmatter.description}
              </p>
              <p className={styles.itemText} id={styles.projectDescription}>
                {node.frontmatter.techStack}
              </p>
            </div>
          </div>
        ))}
      </div>
      <button
        id={styles.seeMoreButton}
        data-aos="fade-up"
        data-aos-delay="3000"
        onClick={handleExpand}
      >
        See {visibleCount === 3 ? "More" : "Less"}
      </button>
    </section>
  )
}
