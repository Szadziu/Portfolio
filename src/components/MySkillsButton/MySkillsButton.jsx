import { useRef } from "react";
import gsap from "gsap";
import * as P from "./parts";
import { useEffect } from "react";

const MySkillsButton = () => {
  const skillsButton = useRef(null);
  const waterDrop = useRef(null);
  useEffect(() => {
    const button = skillsButton.current;
    const drop = waterDrop.current;
    const tl = gsap.timeline();
    tl.to(drop, { top: 200, duration: 1, ease: "easeIn" })
      .to(
        drop,
        {
          opacity: 0,
        },
        0.5
      )
      .to(button, { top: "27vh" })
      .to(button, {
        opacity: 1,
        width: "300px",
        height: "100px",
      })
      .to(button, {
        opacity: 1,
        backgroundColor: "whitesmoke",
        color: "rgb(26,26,26)",
        fontSize: "32px",
      })
      .to(button, { transform: "rotate(20deg)" })
      .to(button, { transform: "rotate(-40deg)", ease: "bounce.in" })
      .to(button, 1, { transform: "rotate(5deg)" });
  }, []);
  return (
    <>
      <P.WaterDrop ref={waterDrop} />
      <P.Button ref={skillsButton}>aboutMySkills</P.Button>
    </>
  );
};

export default MySkillsButton;
