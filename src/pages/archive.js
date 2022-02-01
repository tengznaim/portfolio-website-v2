import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/Layout"
import * as styles from "../styles/archive.module.css"
import GitHubIcon from "../assets/github.svg"
import { FiExternalLink } from "@react-icons/all-files/fi/FiExternalLink"

export default function Archive() {
  const data = useStaticQuery(graphql`
    query archiveQuery {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: frontmatter___year, order: DESC }
      ) {
        nodes {
          id
          frontmatter {
            deployedLink
            description
            developedAt
            year
            techStack
            title
            githubRepo
          }
        }
      }
    }
  `)
  const nodes = data.allMarkdownRemark.nodes
  console.log(nodes)

  return (
    <Layout>
      <div className={styles.archiveContainer}>
        <h1 className={styles.header}>Project Archive</h1>
        <p className={styles.description}>
          Here's an archive of the things I've worked on, either in professional
          environments or my own personal projects.
        </p>
        <table className={styles.archiveTable}>
          <tr>
            <th className={styles.tableHeader}>Year</th>
            <th className={styles.tableHeader}>Project</th>
            <th className={styles.tableHeader}>Developed At</th>
            <th className={styles.tableHeader}>Description</th>
            <th className={styles.tableHeader}>Tech Stack</th>
            <th className={styles.tableHeader}>Links</th>
          </tr>
          {nodes.map(node => (
            <tr key={node.id}>
              <td>{node.frontmatter.year}</td>
              <td>{node.frontmatter.title}</td>
              <td>{node.frontmatter.developedAt}</td>
              <td>{node.frontmatter.description}</td>
              <td>{node.frontmatter.techStack}</td>
              <td>
                <div className={styles.linksContainer}>
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
                      href={node.frontmatter.githubRepo}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <FiExternalLink
                        className={styles.linkIcons}
                      ></FiExternalLink>
                    </a>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </Layout>
  )
}
