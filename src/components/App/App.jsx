import Footer from '../Footer';
import LandingPage from '../LandingPage';
import MainSection from '../MainSection';
import Projects from '../Projects';
import GlobalStyle from '../../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { THEME } from 'constants';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <GlobalStyle />
      <LandingPage />
      <MainSection />
      <Projects />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
