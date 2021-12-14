import { useRef } from "react";
import * as P from "./parts";
import { useEffect } from "react";
import { skillsButtonLoadAnimation } from "../../animations/skillsButtonLoadAnimation";
import { useContext } from "react";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { BackgroundContext } from "../App/App";
import { THEME } from "../../constants";

const MySkillsButton = () => {
  const { setColor } = useContext(BackgroundContext);

  const skillsButton = useRef(null);
  useEffect(() => {
    skillsButtonLoadAnimation(skillsButton);
  }, []);

  return (
    <>
      <P.Button
        ref={skillsButton}
        onMouseEnter={() =>
          buttonAnimation(
            skillsButton,
            setColor,
            { color: "white" },
            THEME.darkenedBackground
          )
        }
        onMouseLeave={() =>
          buttonAnimation(skillsButton, setColor, { color: "black" }, "")
        }
      >
        aboutMySkills
      </P.Button>
    </>
  );
};
export default MySkillsButton;
