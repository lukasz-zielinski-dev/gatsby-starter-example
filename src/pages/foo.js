import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/Layout"

import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Foo({ data }) {
  console.log(data);
  return (
    <Layout>
      <StyledContainer>
        <h1>Foo page!</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}{" "}
              <span>
                — {node.frontmatter.date}
              </span>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: node.html}} />
            <hr />
          </div>
        ))}
      </StyledContainer>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {order: ASC, fields: frontmatter___date}) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
          }
          html
        }
      }
    }
  }
`
