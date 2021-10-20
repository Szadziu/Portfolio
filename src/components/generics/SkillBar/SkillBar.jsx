import * as P from "./parts";
import { colorOfSkillAdvancement } from "../../../utils/colorOfSkillAdvancement";
import { useEffect } from "react";
import gsap from "gsap";
import { useInView } from "react-intersection-observer";

const SkillBar = ({ children, advancement }) => {
  const [ref, inView, entry] = useInView();

  const generateAdvancementLevel = () => {
    const color = colorOfSkillAdvancement(advancement);
    const advancementLevel = [];
    for (let i = 0; i < advancement; i++) {
      advancementLevel.push(<P.BoxOfSkill color={color} />);
    }
    return advancementLevel;
  };
  const boxesOfSkillsAnimation = () => {
    gsap.to(entry.target.children, { scale: 1, stagger: 0.5 });
  };

  useEffect(() => {
    if (inView) {
      boxesOfSkillsAnimation();
    }
  }, [inView]);

  return (
    <P.Bar>
      <P.TitleOfSkill>{children}</P.TitleOfSkill>
      <P.Boxes ref={ref}>{generateAdvancementLevel()}</P.Boxes>
    </P.Bar>
  );
};

export default SkillBar;
