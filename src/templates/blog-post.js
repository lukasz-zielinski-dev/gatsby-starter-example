import React from "react"
import Layout from "../components/Layout"
import styled from "styled-components"

const StyledPostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledPostHeader = styled.h1`
  width: 800px;
  font-size: 42px;
`

const StyledPostContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  & > p > img {
    width: 100%;
  }
`

const BlogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <StyledPostContainer>
        <StyledPostHeader>
          <span>{post.frontmatter.title}</span>
          <span> </span>
          <span>{post.frontmatter.date}</span>
        </StyledPostHeader>
        <StyledPostContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </StyledPostContainer>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
      }
    }
  }
`
