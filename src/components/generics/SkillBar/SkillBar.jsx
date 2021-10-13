import * as P from "./parts";
import { colorOfSkillAdvancement } from "../../../utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SkillBar = ({ children, advancement }) => {
  const barRef = useRef(null);

  const generateAdvancementLevel = () => {
    const color = colorOfSkillAdvancement(advancement);
    const advancementLevel = [];
    for (let i = 0; i < advancement; i++) {
      advancementLevel.push(<P.BoxOfSkill color={color} />);
    }
    return advancementLevel;
  };
  const boxesOfSkillsAnimation = () => {
    const boxes = barRef.current.children;
    gsap.to(boxes, { scale: 1, stagger: 0.3 });
  };

  useEffect(() => boxesOfSkillsAnimation(), []);

  return (
    <>
      <P.TitleOfSkill>{children}</P.TitleOfSkill>
      <P.Bar ref={barRef}>{generateAdvancementLevel()}</P.Bar>
    </>
  );
};

export default SkillBar;
