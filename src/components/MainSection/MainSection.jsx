import { useTheme } from 'styled-components';

import SectionTitle from '../generics/SectionTitle';
import SectionWrapper from '../generics/SectionWrapper';
import Quote from '../generics/Quote';

import AboutMeDesc from './AboutMeDesc';
import Badges from '../Badges';
import SkillsWrapper from './SkillsWrapper';

import { QUOTE } from '../../constants';

import * as P from './parts';

const MainSection = () => {
  const theme = useTheme();

  return (
    <P.MainSectionWrapper id='skills'>
      <SectionWrapper bgColor={theme.gray}>
        <SectionTitle color={theme.white}>kilka słów o mnie ...</SectionTitle>
        <AboutMeDesc />
        <Quote>{QUOTE}</Quote>
        <SkillsWrapper />
        <Badges />
      </SectionWrapper>
    </P.MainSectionWrapper>
  );
};

export default MainSection;
