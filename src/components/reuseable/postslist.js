import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const PostsList = (props) => {
  const data = useStaticQuery(
    graphql`
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
  )
  return (
    <div className={props.class}>
      {" "}
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
  )
}

export default PostsList
