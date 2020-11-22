import { AuthContextProvider } from "../components/auth/AuthContextProvider"
import { getApolloClient } from "../lib/apolloClient"
import { ApolloProvider } from "@apollo/client"
import { AppProps } from "next/dist/next-server/lib/router/router"

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AuthContextProvider>
      <ApolloProvider client={getApolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </AuthContextProvider>
  )
}

export default MyApp
