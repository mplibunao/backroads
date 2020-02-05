import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSite = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSite)
  return (
    <div>
      <h1>title: {siteMetadata.title}</h1>
      <h1>author: {siteMetadata.author}</h1>
    </div>
  )
}

export default Header
