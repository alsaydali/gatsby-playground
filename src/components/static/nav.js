import React from "react"
import Links from "../reuseable/links"

const Nav = (props) => (
  <div>
    <nav className="container">
      {props.sitetitle}
      <Links class="nav__links" />
    </nav>
  </div>
)

export default Nav
