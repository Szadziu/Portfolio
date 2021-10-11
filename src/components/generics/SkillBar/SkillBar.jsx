import * as P from "./parts";
import { useRef } from "react";
import gsap from "gsap";
import { useEffect } from "react";

const SkillBar = ({ children, advancement }) => {
  useEffect(() => {
    const boxesOfSkill = skillBarRef.current.children;
    const tl = gsap.timeline();

    tl.from(boxesOfSkill, { transform: "scale(0.1)", stagger: "0.5" });
  }, []);

  const generateAdvancementLevel = () => {
    const advancementLevel = [];
    for (let i = 0; i < advancement; i++) {
      advancementLevel.push(<P.BoxOfSkill />);
    }
    // const a = [...Array(advancement).keys()].map(el => <P.BoxOfSkill>{advancement}</P.BoxOfSkill>)
    return advancementLevel;
  };

  const skillBarRef = useRef(null);

  return (
    <>
      <P.TitleOfSkill>{children}</P.TitleOfSkill>
      <P.Bar ref={skillBarRef}>
        {/* <P.BoxOfSkill>{advancement}</P.BoxOfSkill> */}
        {generateAdvancementLevel()}
      </P.Bar>
    </>
  );
};

export default SkillBar;
