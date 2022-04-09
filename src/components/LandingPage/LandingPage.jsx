import { useTheme } from 'styled-components';

import Button from '../generics/Button';
import SectionWrapper from '../generics/SectionWrapper';

import * as P from './landingPage.parts.js';

const navigationConfigObject = [
  { label: 'Strona Główna', link: 'home', ratio: 3 }, //
  { label: 'Umiejętności', link: 'skills', ratio: 2 },
  { label: 'Moje projekty', link: 'projects', ratio: 4 },
  { label: 'Kontakt', link: 'contact', ratio: 130 },
];

const LandingPage = () => {
  const theme = useTheme();

  const generateMenuButtons = () => {
    return navigationConfigObject.map((btn, index) => (
      <Button link={btn.link} key={index}>
        {btn.label}
      </Button>
    ));
  };

  return (
    <SectionWrapper image={theme.personalPhoto}>
      {/* <P.BackgroundPhoto image={theme.personalPhoto} /> */}
      <P.Menu id="home">
        {generateMenuButtons()}
        {/* <Button
          text="Strona Główna"
          link="home"
        />
        <Button text="Umiejętności" link="skills" />
        <Button text="Moje projekty" link="projects" />
        <Button text="Kontakt" link="contact" /> */}
      </P.Menu>
      <P.Workplace>junior frontend developer</P.Workplace>
    </SectionWrapper>
  );
};

export default LandingPage;
