import AuthProvider from "../components/auth/AuthProvider";
import { AppProps } from "next/dist/next-server/lib/router/router";
import { ThemeProvider } from "styled-components";
import "modern-normalize/modern-normalize.css";
import { mainTheme } from "../components/styles/mainTheme";
import { GlobalStyle } from "../components/styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider theme={mainTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default MyApp;
