import { useEffect, useRef } from "react";
import * as P from "./parts";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { useContext } from "react";
import { BackgroundContext } from "../App/App";

const ProjectsButton = () => {
  const projectsButton = useRef(null);
  const { setColor } = useContext(BackgroundContext);

  useEffect(() => {
    const button = projectsButton.current;
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(button, { transformPerspective: 500 });

    gsap.to(button, {
      x: 0,
      left: "70vw",
      rotateY: 720,
      rotateX: 0,
      autoAlpha: 1,
      duration: 3.5,
      ease: "power2.out",
      delay: 0.5,
    });

    // ScrollTrigger.create({
    //   trigger: document.querySelector("#root"),
    //   start: "bottom bottom",
    //   end: "top top",
    //   animation: imganim2,
    //   toggleActions: "play reverse play reverse",
    // });
  }, []);

  return (
    <P.Button
      ref={projectsButton}
      onMouseEnter={() =>
        buttonAnimation(projectsButton, setColor, {}, "rgba(0,0,0,0.9)")
      }
      onMouseLeave={() => buttonAnimation(projectsButton, setColor, {}, "")}
    >
      myProjects
    </P.Button>
  );
};

export default ProjectsButton;
