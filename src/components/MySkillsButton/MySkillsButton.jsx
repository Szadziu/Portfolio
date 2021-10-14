import { useRef } from "react";
import gsap from "gsap";
import * as P from "./parts";
import { useEffect } from "react";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { skillsButtonLoadAnimation } from "../../animations/skillsButtonLoadAnimation";

const MySkillsButton = () => {
  const skillsButton = useRef(null);
  useEffect(() => {
    const button = skillsButton.current;
    skillsButtonLoadAnimation(button);
    // przerobic na funkcje
  }, []);

  return (
    <>
      <P.Button ref={skillsButton}>aboutMySkills</P.Button>
    </>
  );
};
export default MySkillsButton;
