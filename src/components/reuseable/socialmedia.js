import React from "react"
import { Link } from "gatsby"
import TwitterIcon from "../socialicons/twittericon"
import InstagramIcon from "../socialicons/instagramicon"
import BehanceIcon from "../socialicons/behanceicon"
import GithubIcon from "../socialicons/githubicon"
const SocialMedia = (props) => (
  <div className={props.class}>
    <TwitterIcon width={props.width} />
    <InstagramIcon width={props.width} />
    <BehanceIcon width={props.width} />
    <GithubIcon width={props.width} />
  </div>
)

export default SocialMedia
