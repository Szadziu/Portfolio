import { useEffect, useRef } from "react";
import * as P from "./parts";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { useContext } from "react";
import { BackgroundContext } from "../App/App";
import { projectsButtonLoadAnimation } from "../../animations/projectsButtonLoadAnimation";
import { THEME } from "../../constants";

const ProjectsButton = () => {
  const projectsButton = useRef(null);
  const { setColor } = useContext(BackgroundContext);

  useEffect(() => projectsButtonLoadAnimation(projectsButton), []);

  return (
    <P.Button
      ref={projectsButton}
      onMouseEnter={() =>
        buttonAnimation(projectsButton, setColor, {}, THEME.darkenedBackground)
      }
      onMouseLeave={() => buttonAnimation(projectsButton, setColor, {}, "")}
    >
      myProjects
    </P.Button>
  );
};

export default ProjectsButton;
