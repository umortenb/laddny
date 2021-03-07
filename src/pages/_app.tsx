import { AuthContextProvider } from "../components/auth/AuthContextProvider";
import { getApolloClient } from "../lib/apolloClient";
import { ApolloProvider } from "@apollo/client";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../view/mainTheme";
import { GlobalStyle } from "../view/GlobalStyle";
import HeaderMenu from "../components/HeaderMenu";
import { PageContainer } from "../view/PageContainer";
import I18nProviderWrapper from "../components/I18nProviderWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <ApolloProvider client={getApolloClient}>
        <ThemeProvider theme={mainTheme}>
          <I18nProviderWrapper messages={pageProps.messages}>
            <HeaderMenu />
            <GlobalStyle />
            <PageContainer>
              <Component {...pageProps} />
            </PageContainer>
          </I18nProviderWrapper>
        </ThemeProvider>
      </ApolloProvider>
    </AuthContextProvider>
  );
}

export default MyApp;