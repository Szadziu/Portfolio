import Footer from "../Footer";
import Landing from "../Landing";
import MainSection from "../MainSection";
import Projects from "../Projects";
import GlobalStyle from "../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../constants";

//! problem ze stylowaniem Link (react-scroll)
//! zdjecie profilowe - nie background
//! wyjustować tekst w main section
//! formularz - zmiana stylu
//! zmienić formularz mobile - inputy cala szerokosc + label
//! przeniesc theme provider do nowego komponentu
//! migające ikonki info
//! font awesome
//! floating button dolozyc

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <Landing />
      <MainSection />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
