import * as P from "./parts";
import SkillBar from "../generics/SkillBar";
import { SKILL_BUNDLE, QUOTE } from "../../constants";

const ProgressWrapper = () => {
  const renderListOfSkills = () => {
    return SKILL_BUNDLE.map((skill) => (
      <SkillBar advancement={skill.advancement} key={skill.id}>
        {skill.name}
        {` ⚙️ ${skill.advancement * 10}% ⚙️`}
      </SkillBar>
    ));
  };

  return (
    <P.SkillContainer>
      <P.Quote>{QUOTE}</P.Quote>
      {renderListOfSkills()}
    </P.SkillContainer>
  );
};

export default ProgressWrapper;
