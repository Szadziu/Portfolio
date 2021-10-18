import * as P from "./parts";
import SkillBar from "../generics/SkillBar";
import { SKILL_BUNDLE } from "../../constants";

const SkillsWrapper = () => {
  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill) => (
      <SkillBar advancement={skill.advancement} key={skill.id}>
        {skill.name}
        {` ⚙️ ${skill.advancement * 10}% ⚙️`}
      </SkillBar>
    ));
  };
  return <P.SkillContainer>{renderListOfSkills()}</P.SkillContainer>;
};

export default SkillsWrapper;
