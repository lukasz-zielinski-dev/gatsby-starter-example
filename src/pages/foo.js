import React from "react"
import Layout from "../components/Layout"

import styled from "styled-components"

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Foo() {
  return (
    <Layout>
      <StyledContainer>
        <h1>Foo page!</h1>
      </StyledContainer>
    </Layout>
  )
}
