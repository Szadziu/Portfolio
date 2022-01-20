import * as P from './parts';
import AboutMeDesc from './AboutMeDesc';
import SectionWrapper from '../generics/SectionWrapper';
import SkillsWrapper from './SkillsWrapper';
import Quote from '../generics/Quote';
import { QUOTE } from '../../constants';
import SectionTitle from '../generics/SectionTitle';
import { useTheme } from 'styled-components';

const MainSection = () => {
  const theme = useTheme();

  return (
    <P.MainSectionWrapper id='skills'>
      <SectionWrapper bgColor={theme.gray}>
        <SectionTitle color={theme.white}>kilka słów o mnie ...</SectionTitle>
        <AboutMeDesc />
        <Quote>{QUOTE}</Quote>
        <SkillsWrapper />
      </SectionWrapper>
    </P.MainSectionWrapper>
  );
};

export default MainSection;
