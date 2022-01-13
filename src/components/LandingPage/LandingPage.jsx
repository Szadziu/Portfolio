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
          <Button text='homePage' link='home' />
          <Button text='aboutMySkills' link='skills' />
          <Button text='myProjects' link='projects' />
          <Button text='contactToMe' link='contact' />
        </P.Menu>
      </P.Wrapper>
    </SectionWrapper>
  );
};

export default LandingPage;
