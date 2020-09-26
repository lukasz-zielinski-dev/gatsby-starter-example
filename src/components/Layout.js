import React from "react"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import FilterVintageIcon from "@material-ui/icons/FilterVintage"
import Button from "@material-ui/core/Button"
import styled from "styled-components"

import GlobalStyles from "../components/GlobalStyles"

const StyledWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`
const StyledTitle = styled.h1`
  flex-grow: 1;
`
const StyledContent = styled.div`
  min-height: 100%;
  margin: 0;
  padding: 0;
  flex-grow: 1;
`
const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyles />
      <AppBar position="static">
        <Toolbar>
          <StyledTitle>
            <StyledLink to="/">Gatsby - poligon testowy</StyledLink>
          </StyledTitle>
          <StyledLink to="/foo">
            <Button
              variant="outlined"
              color="secondary"
              startIcon={<FilterVintageIcon />}
            >
              Foo
            </Button>
          </StyledLink>
        </Toolbar>
      </AppBar>
      <StyledContent>{children}</StyledContent>
    </StyledWrapper>
  )
}

export default Layout
