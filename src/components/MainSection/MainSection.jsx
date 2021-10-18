import * as P from "./parts";
import SectionWrapper from "../generics/SectionWrapper";
import SkillsWrapper from "../SkillsWrapper/SkillsWrapper";
import eyeMovie from "../../assets/eyeMovie.mp4";
import hacking from "../../assets/hacking.jpg";

const MainSection = () => {
  return (
    <SectionWrapper>
      <P.AnimationBlock>
        {/* <video width="auto" height="100%" controls>
          <source src={eyeMovie} type="video/mp4" />
        </video> */}
        {/* <img alt="hacking" src={hacking} /> */}
      </P.AnimationBlock>
      <SkillsWrapper />
    </SectionWrapper>
  );
};

export default MainSection;
