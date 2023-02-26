import { useTheme } from 'styled-components';
import Quote from '../generics/Quote';
import AboutMeDesc from './AboutMeDesc';
import SkillsPanel from './SkillsPanel';
import SectionWrapper from '../generics/SectionWrapper';
import HorizontalTimeline from '../Timeline/Timeline';
import { QUOTE } from '../../constants';
import * as P from './mainSection.parts';

const MainSection = () => {
    const theme = useTheme();

    return (
        <SectionWrapper bgColor={theme.gray_300} id="skills" minHeight={700}>
            <P.AboutMeSectionTitle color={theme.white}>kilka słów o mnie</P.AboutMeSectionTitle>
            <P.AboutMeDescWrapper>
                <HorizontalTimeline />
                <AboutMeDesc />
            </P.AboutMeDescWrapper>
            <Quote>{QUOTE}</Quote>
            <SkillsPanel />
        </SectionWrapper>
    );
};

export default MainSection;
