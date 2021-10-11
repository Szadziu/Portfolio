import * as P from "./parts";
import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";
import { colorOfSkillAdvancement } from "../../../utils";

const SkillBar = ({ children, advancement }) => {
  useEffect(() => {
    const boxesOfSkill = skillBarRef.current.children;
    const titleOfSkill = skillTitleRef.current;
    const tl = gsap.timeline();

    console.log(titleOfSkill);

    tl.from(boxesOfSkill, { transform: "scale(0)", stagger: "0.5" }).from(
      titleOfSkill,
      {
        opacity: "0",
      }
    );
  }, []);

  const generateAdvancementLevel = () => {
    const color = colorOfSkillAdvancement(advancement);
    const advancementLevel = [];
    for (let i = 0; i < advancement; i++) {
      advancementLevel.push(<P.BoxOfSkill color={color} />);
    }
    // const a = [...Array(advancement).keys()].map(el => <P.BoxOfSkill>{advancement}</P.BoxOfSkill>)
    return advancementLevel;
  };

  const skillBarRef = useRef(null);
  const skillTitleRef = useRef(null);

  return (
    <>
      <P.TitleOfSkill ref={skillTitleRef}>{children}</P.TitleOfSkill>
      <P.Bar ref={skillBarRef}>
        {/* <P.BoxOfSkill>{advancement}</P.BoxOfSkill> */}
        {generateAdvancementLevel()}
      </P.Bar>
    </>
  );
};

export default SkillBar;
