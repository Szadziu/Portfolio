import * as P from "./parts";
import AboutMeDesc from "../AboutMeDesc";
import SectionWrapper from "../generics/SectionWrapper";
import SkillsWrapper from "../SkillsWrapper/SkillsWrapper";
import Quote from "../Quote";
import { QUOTE } from "../../constants";
import SectionTitle from "../generics/SectionTitle";

const MainSection = () => {
  return (
    <SectionWrapper bgColor="white">
      <P.MainSectionWrapper id="skills">
        <P.Background />
        <SectionTitle color="black">kilka słów o mnie ...</SectionTitle>
        <AboutMeDesc />
        <Quote>{QUOTE}</Quote>
        <SkillsWrapper />
      </P.MainSectionWrapper>
    </SectionWrapper>
  );
};

export default MainSection;
