import React from "react"
import { Link } from "gatsby"

const Links = (props) => (
  <div className={props.class}>
    <Link to="/">Home</Link>
    <Link to="/blog">Blog</Link>
    <Link to="/contact">Contact</Link>
  </div>
)

export default Links
