import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as styles from "../../styles/experience.module.css"

export default function Experience() {
  const data = useStaticQuery(graphql`
    query experienceQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/experience/" } }
        sort: { fields: frontmatter___experienceID, order: ASC }
      ) {
        nodes {
          id
          frontmatter {
            company
            duration
            title
            description
          }
          html
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes
  const [activeExperience, setActiveExperience] = useState(0)

  return (
    <section className={styles.experienceContainer} id="experience">
      <h1 className={styles.header}>Experience</h1>
      <div className={styles.content}>
        <div className={styles.selectorList}>
          {nodes.map((node, index) => (
            <button
              className={
                index === activeExperience
                  ? `${styles.selectorButtons} ${styles.activeButton}`
                  : styles.selectorButtons
              }
              key={node.id}
              value={node.frontmatter.company}
              onClick={() => {
                setActiveExperience(index)
              }}
            >
              {node.frontmatter.company}
            </button>
          ))}
        </div>
        <div className={styles.experienceInfo}>
          <h1 className={styles.infoHeader}>
            {nodes[activeExperience].frontmatter.title}
          </h1>
          <h1 className={styles.infoHeader}>
            {nodes[activeExperience].frontmatter.duration}
          </h1>
          {nodes[activeExperience].frontmatter.description && (
            <p className={styles.infoParagraph}>
              {nodes[activeExperience].frontmatter.description}
            </p>
          )}
          <div
            className={styles.taskList}
            dangerouslySetInnerHTML={{ __html: nodes[activeExperience].html }}
          ></div>
        </div>
      </div>
    </section>
  )
}
