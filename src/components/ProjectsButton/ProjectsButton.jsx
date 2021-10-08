import { useEffect, useRef } from "react";
import * as P from "./parts";
import gsap from "gsap";

const ProjectsButton = () => {
  const projectsButton = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const button = projectsButton.current;

    tl.from(button, 4, { bottom: "-30vh", ease: "back", color: "transparent" })
      .to(button, 1, { color: "grey" })
      .to(button, { color: "whitesmoke" });
  }, []);

  return <P.Button ref={projectsButton}>myProjects</P.Button>;
};

export default ProjectsButton;
