import * as P from "./parts";
import { colorOfSkillAdvancement } from "../../../utils";

const SkillBar = ({ children, advancement }) => {
  const generateAdvancementLevel = () => {
    const color = colorOfSkillAdvancement(advancement);
    const advancementLevel = [];
    for (let i = 0; i < advancement; i++) {
      advancementLevel.push(<P.BoxOfSkill color={color} />);
    }
    return advancementLevel;
  };

  return (
    <>
      <P.TitleOfSkill>{children}</P.TitleOfSkill>
      <P.Bar>{generateAdvancementLevel()}</P.Bar>
    </>
  );
};

export default SkillBar;
