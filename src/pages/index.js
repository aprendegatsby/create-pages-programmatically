import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Lista de articulos</h1>
    <h2>{data.allMarkdownRemark.totalCount} artículos</h2>
    {data.allMarkdownRemark.edges.map(post => (
      <div key={post.node.id}>
        <h2>{post.node.frontmatter.title}</h2>
        <p>{post.node.excerpt}</p>
        <h4>
          {post.node.frontmatter.date} - {post.node.timeToRead} min de lectura
        </h4>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            date
            title
          }
          timeToRead
        }
      }
    }
  }
`

export default IndexPage
