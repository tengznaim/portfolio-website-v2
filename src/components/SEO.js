import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { graphql, useStaticQuery } from "gatsby"

export default function SEO({ title, description, image }) {
  const { pathname } = useLocation()

  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          titleTemplate
          defaultDescription: description
          siteUrl: url
        }
      }
    }
  `)

  const { defaultTitle, titleTemplate, defaultDescription, siteUrl } =
    site.siteMetadata

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={titleTemplate}
    >
      <meta name="description" content={seo.description} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
    </Helmet>
  )
}

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
}
