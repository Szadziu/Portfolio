import SectionWrapper from '../generics/SectionWrapper';
import * as P from './parts.js';
import Button from '../generics/Button';
import personalPortrait from '../../assets/personalPhoto.png';

const LandingPage = () => {
  return (
    <SectionWrapper>
      <P.Wrapper>
        <P.Menu id='home'>
          <P.BackgroundPhoto src={personalPortrait} />
          <Button text='Strona Główna' link='home' />
          <Button text='Umiejętności' link='skills' />
          <Button text='Moje projekty' link='projects' />
          <Button text='Kontakt' link='contact' />
        </P.Menu>
      </P.Wrapper>
    </SectionWrapper>
  );
};

export default LandingPage;
