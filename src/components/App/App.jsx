import Footer from "../Footer";
import Landing from "../Landing";
import MainSection from "../MainSection";
import Projects from "../Projects";
import GlobalStyle from "../../styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Landing />
      <MainSection />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
