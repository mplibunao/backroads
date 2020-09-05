import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
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

export default () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={({ site: { siteMetadata } }) => {
        return (
          <div>
            <h1>title: {siteMetadata.title}</h1>
            <h1>author: {siteMetadata.author}</h1>
          </div>
        )
      }}
    />
  )
}
