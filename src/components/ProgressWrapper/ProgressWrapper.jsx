import * as P from "./parts";
import SkillBar from "../generics/SkillBar";
import { SKILL_BUNDLE } from "../../constants";

const ProgressWrapper = () => {
  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill) => (
      <SkillBar advancement={skill.advancement} key={skill.id}>
        {skill.name}
      </SkillBar>
    ));
  };

  return <P.SkillContainer>{renderListOfSkills()}</P.SkillContainer>;
};

export default ProgressWrapper;
