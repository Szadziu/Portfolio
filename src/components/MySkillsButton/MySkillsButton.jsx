import { useRef } from "react";
import * as P from "./parts";
import { useEffect } from "react";
import { skillsButtonLoadAnimation } from "../../animations/skillsButtonLoadAnimation";
import { useContext } from "react";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { BackgroundContext } from "../Landing/Landing";

const MySkillsButton = () => {
  const { setColor } = useContext(BackgroundContext);

  const skillsButton = useRef(null);
  useEffect(() => {
    const button = skillsButton.current;
    skillsButtonLoadAnimation(button);
  }, []);

  return (
    <>
      <P.Button
        ref={skillsButton}
        onMouseEnter={() =>
          buttonAnimation(
            skillsButton,
            setColor,
            { color: "orange" },
            "rgba(0,0,0,0.9)"
          )
        }
        onMouseLeave={() =>
          buttonAnimation(skillsButton, setColor, { color: "white" }, "")
        }
      >
        aboutMySkills
      </P.Button>
    </>
  );
};
export default MySkillsButton;
