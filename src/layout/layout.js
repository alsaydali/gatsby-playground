import React from "react"
import { useStaticQuery, graphql } from "gatsby"

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
      <Nav sitetitle={siteTitle} />
      {children}
      <Footer sitetitle={siteTitle} />
    </>
  )
}

export default Layout
