import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Header from "../components/layout/header";
import { CustomTheme } from "../styles/theme";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <CSSReset />
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
