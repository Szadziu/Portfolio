import FloatingButton from './generics/FloatingButton';
import Footer from './Footer';
import GlobalStyle from '../styles/GlobalStyle';
import LandingPage from './LandingPage';
import MainSection from './MainSection';
import Projects from './Projects';
import Theme from './Theme';
import DefenderOfDimensions from './DefenderOfDimensions';

const App = () => {
  return (
    <Theme>
      <DefenderOfDimensions />
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
