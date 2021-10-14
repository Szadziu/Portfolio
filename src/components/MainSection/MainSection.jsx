import * as P from "./parts";
import SectionWrapper from "../generics/SectionWrapper";
import SkillsWrapper from "../SkillsWrapper/SkillsWrapper";

const MainSection = () => {
  return (
    <SectionWrapper>
      <P.AnimationBlock>tutaj będzie animacja...</P.AnimationBlock>
      <SkillsWrapper />
    </SectionWrapper>
  );
};

export default MainSection;
