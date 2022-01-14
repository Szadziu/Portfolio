import Footer from '../Footer';
import LandingPage from '../LandingPage';
import MainSection from '../MainSection';
import Projects from '../Projects';
import GlobalStyle from '../../styles/GlobalStyle';
import Theme from '../Theme';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <LandingPage />
      <MainSection />
      <Projects />
      <Footer />
    </Theme>
  );
};

export default App;
