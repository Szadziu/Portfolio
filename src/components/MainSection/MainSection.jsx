import * as P from "./parts";
import SectionWrapper from "../generics/SectionWrapper";
import ProgressBar from "../generics/ProgressBar";

const MainSection = () => {
  return (
    <SectionWrapper>
      <P.AnimationBlock>tutaj będzie animacja...</P.AnimationBlock>
      <ProgressBar />
    </SectionWrapper>
  );
};

export default MainSection;
