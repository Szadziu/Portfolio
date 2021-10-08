import { useRef } from "react";
import gsap from "gsap";
import * as P from "./parts";
import { useEffect } from "react";
import calc from "postcss-calc";

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
        borderColor: "transparent",
        backgroundImage: "linear-gradient(326deg, #f8002f 0%, #000c14 74%)",
      })
      .to(button, { transform: "rotate(20deg)" })
      .to(button, { transform: "rotate(-40deg)", ease: "bounce.in" })
      .to(button, 2, { transform: "rotate(5deg)" })
      .to(button, { color: "whitesmoke", fontSize: "32px" });

    // tl.from(button, {
    //   x: "5vw",
    //   y: "-50vh",
    //   width: "20px",
    //   height: "20px",
    //   duration: 1,
    // });
    // tl.from(button, { scale: 0, ease: "back", delay: 1.5 });
  }, []);
  return (
    <>
      <P.WaterDrop ref={waterDrop} />
      <P.Button ref={skillsButton}>aboutMySkills</P.Button>
    </>
  );
};

export default MySkillsButton;
