import { AuthContextProvider } from "../components/auth/AuthContextProvider";
import { getApolloClient } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import HeaderMenu from "../components/layout/HeaderMenu";
import { mainTheme } from "../components/styles/mainTheme";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import { PageContainer } from "../components/layout/PageContainer";

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
  );
}

export default MyApp;
