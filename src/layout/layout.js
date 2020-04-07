import React from "react"
import Nav from "../components/static/nav"
import Footer from "../components/static/footer"
const Layout = ({ children }) => (
  <>
    <Nav />
    {children}
    <Footer />
  </>
)

export default Layout
