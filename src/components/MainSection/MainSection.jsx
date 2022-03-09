import { useTheme } from "styled-components";

import SectionTitle from "../generics/SectionTitle";
import SectionWrapper from "../generics/SectionWrapper";
import Quote from "../generics/Quote";

import AboutMeDesc from "./AboutMeDesc";
import SkillsWrapper from "./SkillsWrapper";

import { QUOTE } from "../../constants";

const MainSection = () => {
  const theme = useTheme();

  return (
    <SectionWrapper bgColor={theme.gray} id="skills">
      <SectionTitle color={theme.white}>kilka słów o mnie ...</SectionTitle>
      <AboutMeDesc />
      <Quote>{QUOTE}</Quote>
      <SkillsWrapper />
    </SectionWrapper>
  );
};

export default MainSection;
