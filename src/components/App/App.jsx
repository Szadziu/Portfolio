import FloatingButton from '../FloatingButton';
import Footer from '../Footer';
import GlobalStyle from '../../styles/GlobalStyle';
import LandingPage from '../LandingPage';
import MainSection from '../MainSection';
import Projects from '../Projects';
import Theme from '../Theme';

const App = () => {
  return (
    <Theme>
      <GlobalStyle />
      <FloatingButton />
      <LandingPage />
      <MainSection />
      <Projects />
      <Footer />
    </Theme>
  );
};

export default App;
