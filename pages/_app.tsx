import { AuthContextProvider } from "../components/auth/AuthContextProvider"
import { getApolloClient } from "../lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { AppProps } from "next/dist/next-server/lib/router/router"
import { ThemeProvider } from "styled-components"
import { mainTheme } from "../view/mainTheme"
import { GlobalStyle } from "../view/GlobalStyle"
import HeaderMenu from "../components/HeaderMenu"
import { PageContainer } from "../view/PageContainer"

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthContextProvider>
      <ApolloProvider client={getApolloClient}>
        <ThemeProvider theme={mainTheme}>
          <HeaderMenu />
          <GlobalStyle />
          <PageContainer>
            <Component {...pageProps} />
          </PageContainer>
        </ThemeProvider>
      </ApolloProvider>
    </AuthContextProvider>
  )
}

export default MyApp
