import { useTheme } from 'styled-components';
import Quote from '../generics/Quote';
import AboutMeDesc from './AboutMeDesc';
import SkillsWrapper from './SkillsWrapper';
import SectionWrapper from '../generics/SectionWrapper';
import Timeline from '../Timeline/Timeline';
import { QUOTE } from '../../constants';
import * as P from './mainSection.parts';
import HorizontalTimeline from '../HorizontalTimeline/HorizontalTimeline';

const MainSection = () => {
    const theme = useTheme();

    return (
        <SectionWrapper bgColor={theme.gray_300} id="skills">
            <P.MainSectionTitle color={theme.white}>
                kilka słów o mnie ...
            </P.MainSectionTitle>
            <P.AboutMeDescWrapper>
                <HorizontalTimeline />
                <AboutMeDesc />
            </P.AboutMeDescWrapper>
            <Quote>{QUOTE}</Quote>
            <SkillsWrapper />
        </SectionWrapper>
    );
};

export default MainSection;
