import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

import "./index.css"

import Layout from "@components/layout"

const IndexPage = ({ data }) => {
  const title = "The Unofficial Gatsby Version"

  return (
    <StaticQuery
      query={graphql`
        query IndexSiteQuery {
          site {
            siteMetadata {
              title
              sidebar {
                pages {
                  slug
                  title
                  pages {
                    slug
                    title
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div id="example" class="index">
          <Helmet
            title={
              title
                ? `${title} - ${data.site.siteMetadata.title}`
                : data.site.siteMetadata.title
            }
            meta={[
              {
                name: "description",
                content: "Active learning system",
              },
              {
                name: "keywords",
                content: "active learning system",
              },
            ]}
          >
            <html lang="en" />
          </Helmet>
          <Layout></Layout>
        </div>
      )}
    />
  )
}

export default IndexPage
