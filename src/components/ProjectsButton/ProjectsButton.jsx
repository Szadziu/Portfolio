import { useEffect, useRef } from "react";
import * as P from "./parts";
import gsap from "gsap";

const ProjectsButton = () => {
  const projectsButton = useRef(null);
  const innerText = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    const button = projectsButton.current;
    const text = innerText.current;

    tl.to(button, 4, { bottom: "20vh", display: "flex" })
      .to(
        button,
        {
          width: "220px",
          height: "220px",
        },
        4
      )
      .to(text, { y: "50px" })
      .to(text, { x: "50px" })
      .to(text, { y: "0px" })
      .to(text, { x: "0px" });
  }, []);

  return (
    <P.Button ref={projectsButton}>
      <P.innerText ref={innerText}>myProjects</P.innerText>
    </P.Button>
  );
};

export default ProjectsButton;
