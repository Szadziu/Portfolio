import * as P from "./parts";
import { useRef } from "react";
import { useIntersection } from "react-use";
import gsap from "gsap";
import { useEffect } from "react";
import { colorOfSkillAdvancement } from "../../../utils";

const SkillBar = ({ children, advancement }) => {
  const skillBarRef = useRef(null);
  const skillTitleRef = useRef(null);
  const intersection = useIntersection(skillBarRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });

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
    return advancementLevel;
  };
  // intersection && generateAdvancementLevel();

  const observer = intersection && generateAdvancementLevel();

  return (
    <>
      <P.TitleOfSkill ref={skillTitleRef}>{children}</P.TitleOfSkill>
      <P.Bar ref={skillBarRef}>
        {observer}
        {/* {intersection &&
          intersection.intersectionRatio < 1 &&
          generateAdvancementLevel()} */}
      </P.Bar>
    </>
  );
};

export default SkillBar;
