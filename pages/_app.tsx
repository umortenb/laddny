import AuthProvider from "../components/auth/AuthProvider";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import HeaderMenu from "../components/layout/HeaderMenu";
import "modern-normalize/modern-normalize.css";
import { mainTheme } from "../components/styles/mainTheme";
import { GlobalStyle } from "../components/styles/GlobalStyle";
import { PageContainer } from "../components/layout/PageContainer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={mainTheme}>
        <HeaderMenu />
        <GlobalStyle />
        <PageContainer>
          <Component {...pageProps} />
        </PageContainer>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
