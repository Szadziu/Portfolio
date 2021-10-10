import * as P from "./parts";
import SkillBar from "../generics/SkillBar";

const ProgressWrapper = () => {
  // const renderListOfSkills

  return (
    <P.SkillContainer>
      <SkillBar>HTML 5</SkillBar>
      <SkillBar />
      <SkillBar />
      <SkillBar />
      <SkillBar />
    </P.SkillContainer>
  );
};

export default ProgressWrapper;
