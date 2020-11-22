import { AuthContextProvider } from "../components/auth/AuthContextProvider"
import { getApolloClient } from "../lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { AppProps } from "next/dist/next-server/lib/router/router"
import { ThemeProvider } from "styled-components"
import { mainTheme } from "../view/mainTheme"
import { GlobalStyle } from "../view/GlobalStyle"

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthContextProvider>
      <ApolloProvider client={getApolloClient}>
        <ThemeProvider theme={mainTheme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </ApolloProvider>
    </AuthContextProvider>
  )
}

export default MyApp
