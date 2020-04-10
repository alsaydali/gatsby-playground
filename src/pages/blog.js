import React from "react"
import { graphql } from "gatsby"
import Layout from "../layout/layout"
import Header from "../components/static/header"

const Blog = ({ data }) => (
  <Layout>
    <Header
      title="Post of my Blog"
      desc={`This Blog has ${data.allMarkdownRemark.totalCount} posts `}
    />
    <div className="container">
      <h4>Posts List</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title}
            <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  </Layout>
)
export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`
export default Blog
