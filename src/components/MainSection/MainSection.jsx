import * as P from "./parts";
import SectionWrapper from "../generics/SectionWrapper";
import SkillsWrapper from "../SkillsWrapper/SkillsWrapper";
import Quote from "../Quote";
import { QUOTE } from "../../constants";

const MainSection = () => {
  return (
    <SectionWrapper>
      <P.MainSectionWrapper>
        <Quote>{QUOTE}</Quote>
        <SkillsWrapper />
      </P.MainSectionWrapper>
    </SectionWrapper>
  );
};

export default MainSection;
