import FloatingButton from './generics/FloatingButton';
import Footer from './Footer';
import GlobalStyle from '../styles/GlobalStyle';
import LandingPage from './LandingPage';
import MainSection from './MainSection';
import Projects from './Projects';
import DefenderOfDimensions from '../components/DefenderOfDimensions';

import Theme from './Theme';

const App = () => {
    return (
        <Theme>
            <DefenderOfDimensions x={310} y={650} />
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
