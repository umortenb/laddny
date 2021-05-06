import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
  }

  * {
    font-family: 'Open Sans', sans-serif;
    color: ${(props) => props.theme.neutralColor[900]};
  }

  a {
    text-decoration: none;
  }

  button:focus:not(:focus-visible) {
    outline: none;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    background-color: white !important;
    appearance: none;
  }
`;
