import Header from "../components/layout/header";
import Main from "../components/layout/main";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import { CustomTheme } from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CSSReset />
      <Header />
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  );
};

export default App;
