import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/Layout"

import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Foo({ data }) {
  return (
    <Layout>
      <StyledContainer>
        <h1>Najnowsze wpisy:</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h2>
                {node.frontmatter.title} - {node.frontmatter.date}
              </h2>
            </Link>
            <hr />
          </div>
        ))}
      </StyledContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
