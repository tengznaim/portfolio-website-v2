import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet"
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

  return (
    <Layout>
      <Helmet title="Archive" />
      <div className={styles.archiveContainer}>
        <h1 className={styles.header} data-aos="fade-down">
          Hall of Projects
        </h1>
        <p
          className={styles.description}
          data-aos="fade-down"
          data-aos-delay="500"
        >
          Here's an archive of the things I've worked on, either in professional
          environments or my own personal projects.
        </p>
        <table className={styles.archiveTable}>
          <thead>
            <tr data-aos="fade-down" data-aos-delay="1000">
              <th className={`${styles.tableHeader} ${styles.mobileHide}`}>
                Year
              </th>
              <th className={styles.tableHeader}>Project</th>
              <th className={`${styles.tableHeader} ${styles.mobileHide}`}>
                Developed At
              </th>
              <th className={styles.tableHeader}>Description</th>
              <th className={`${styles.tableHeader} ${styles.mobileHide}`}>
                Tech Stack
              </th>
              <th className={styles.tableHeader}>Links</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {nodes.map(node => (
              <tr key={node.id} data-aos="fade-down" data-aos-delay="1500">
                <td
                  className={`${styles.tableData} ${styles.mobileHide}`}
                  id={styles.yearCol}
                >
                  {node.frontmatter.year}
                </td>
                <td className={styles.tableData} id={styles.projectCol}>
                  {node.frontmatter.title}
                </td>
                <td className={`${styles.tableData} ${styles.mobileHide}`}>
                  {node.frontmatter.developedAt}
                </td>
                <td className={styles.tableData}>
                  {node.frontmatter.description}
                </td>
                <td className={`${styles.tableData} ${styles.mobileHide}`}>
                  {node.frontmatter.techStack}
                </td>
                <td className={styles.tableData}>
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
                        href={node.frontmatter.deployedLink}
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
          </tbody>
        </table>
      </div>
    </Layout>
  )
}
