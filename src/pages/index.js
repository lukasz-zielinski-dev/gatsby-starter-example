import React from "react"
import styled from "styled-components"

import Layout from "../components/Layout"
import welcomeImage from "../../static/undraw_welcome_cats_thqn.png"

const StyledWelcomeImage = styled.div`
  background-image: url(${welcomeImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 70vw;
  min-height: calc(619/1129*70vw);

  margin: 50px auto;
`

export default function Home() {
  return (
    <Layout>
        <StyledWelcomeImage></StyledWelcomeImage>
    </Layout>
  )
}
