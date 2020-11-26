import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.backgroundColor};
    font-family: 'Open Sans', sans-serif;
  }

  a {
    text-decoration: none;
  }
`