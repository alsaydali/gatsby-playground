import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from "react-helmet"

import Nav from "../components/static/nav"
import Footer from "../components/static/footer"
const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author {
              name
              summary
            }
            description
            title
            social {
              behance
              github
              instagram
              twitter
            }
          }
        }
      }
    `
  )
  const siteTitle = data.site.siteMetadata.title
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{siteTitle}</title>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Helmet>
      <Nav sitetitle={siteTitle} />
      {children}
      <Footer sitetitle={siteTitle} />
    </>
  )
}

export default Layout
