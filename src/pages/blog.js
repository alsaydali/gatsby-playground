import React from "react"
import Layout from "../layout/layout"
import Header from "../components/static/header"
import PostsList from "../components/reuseable/postslist"
const Blog = ({ data }) => (
  <Layout>
    <Header title="Post of my Blog" desc="List of my blog posts" />
    <PostsList />
  </Layout>
)

export default Blog
