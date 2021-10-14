import { useRef } from "react";
import gsap from "gsap";
import * as P from "./parts";
import { useEffect } from "react";

const MySkillsButton = () => {
  const skillsButton = useRef(null);
  useEffect(() => {
    const button = skillsButton.current;
    const tl = gsap.timeline();
    tl.to(button, { top: "5vh" })
      .to(button, { transform: "rotate(15deg)" })
      .to(button, { top: "25vh", transform: "rotate(-30deg)" })
      .to(button, { transform: "rotate(5deg)" })
      .to(button, { top: "35vh", transform: "rotate(-15deg)" })
      .to(button, { transform: "rotate(10deg)", color: "black" });
    // przerobic na funkcje
  }, []);

  return (
    <>
      <P.Button ref={skillsButton}>aboutMySkills</P.Button>
    </>
  );
};
export default MySkillsButton;
