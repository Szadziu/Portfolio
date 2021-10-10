import * as P from "./parts";
import SectionWrapper from "../generics/SectionWrapper";
import ProgressWrapper from "../ProgressWrapper";

const MainSection = () => {
  return (
    <SectionWrapper>
      <P.AnimationBlock>tutaj będzie animacja...</P.AnimationBlock>
      <ProgressWrapper />
    </SectionWrapper>
  );
};

export default MainSection;
