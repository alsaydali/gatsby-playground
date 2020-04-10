import React from "react"

const Header = (props) => (
  <header className="container hero">
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
  </header>
)

export default Header
