import Footer from "../Footer";
import Landing from "../Landing";
import MainSection from "../MainSection";
import Projects from "../Projects";
import GlobalStyle from "../../styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { THEME } from "../../constants";
import { useState, createContext } from "react";

//! problem ze stylowaniem Link (react-scroll)

export const BackgroundContext = createContext({});
// ten context docelowo będzie w contextach, ale był problem z przeniesieniem
const App = () => {
  const [color, setColor] = useState("");

  const value = {
    color,
    setColor,
  };

  return (
    <>
      <BackgroundContext.Provider value={value}>
        <ThemeProvider theme={THEME}>
          <GlobalStyle />
          <Landing />
          <MainSection />
          <Projects />
          <Footer />
        </ThemeProvider>
      </BackgroundContext.Provider>
    </>
  );
};

export default App;
