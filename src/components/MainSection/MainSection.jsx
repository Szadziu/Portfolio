import * as P from "./parts";
import SectionWrapper from "../generics/SectionWrapper";
import SkillsWrapper from "../SkillsWrapper/SkillsWrapper";
import Quote from "../Quote";
import { QUOTE, DESC_ABOUT_ME } from "../../constants";
import SectionTitle from "../generics/SectionTitle";

const MainSection = () => {
  return (
    <SectionWrapper bgColor="black">
      <P.MainSectionWrapper>
        <SectionTitle>kilka słów o mnie ...</SectionTitle>
        <P.AboutMeDesc>{DESC_ABOUT_ME}</P.AboutMeDesc>
        <Quote>{QUOTE}</Quote>
        <SkillsWrapper />
      </P.MainSectionWrapper>
    </SectionWrapper>
  );
};

export default MainSection;
