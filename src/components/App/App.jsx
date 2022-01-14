import Footer from '../Footer';
import LandingPage from '../LandingPage';
import MainSection from '../MainSection';
import Projects from '../Projects';
import GlobalStyle from '../../styles/GlobalStyle';
import Theme from '../Theme';
import FloatingButton from '../FloatingButton';

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

{
  /* <div style={{ backgroundColor: 'blue', height: '100px' }} ref={ref}></div> */
}
