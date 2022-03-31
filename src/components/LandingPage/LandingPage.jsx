import { useTheme } from 'styled-components';

import Button from '../generics/Button';
import SectionWrapper from '../generics/SectionWrapper';

import * as P from './landingPage.parts.js';

const LandingPage = () => {
  const theme = useTheme();
  return (
    <SectionWrapper image={theme.personalPhoto}>
      {/* <P.BackgroundPhoto image={theme.personalPhoto} /> */}
      <P.Menu id="home">
        <Button text="Strona Główna" link="home" />
        <Button text="Umiejętności" link="skills" />
        <Button text="Moje projekty" link="projects" />
        <Button text="Kontakt" link="contact" />
      </P.Menu>
      <P.Workplace>junior frontend developer</P.Workplace>
    </SectionWrapper>
  );
};

export default LandingPage;
