import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TwitterIcon from "../socialicons/twittericon"
import InstagramIcon from "../socialicons/instagramicon"
import BehanceIcon from "../socialicons/behanceicon"
import GithubIcon from "../socialicons/githubicon"
const SocialMedia = (props) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
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
  return (
    <div className={props.class}>
      <a
        href={data.site.siteMetadata.social.twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        <TwitterIcon width={props.width} />
      </a>
      <a
        href={data.site.siteMetadata.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon width={props.width} />
      </a>
      <a
        href={data.site.siteMetadata.social.behance}
        target="_blank"
        rel="noopener noreferrer"
      >
        <BehanceIcon width={props.width} />
      </a>
      <a
        href={data.site.siteMetadata.social.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon width={props.width} />
      </a>
    </div>
  )
}

export default SocialMedia
