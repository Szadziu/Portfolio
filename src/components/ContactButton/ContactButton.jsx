import gsap from "gsap";
import { useContext, useEffect, useRef } from "react";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { BackgroundContext } from "../App/App";
import * as P from "./parts";

const ContactButton = () => {
  const button = useRef(null);

  const { setColor } = useContext(BackgroundContext);
  useEffect(() => {
    const contactButton = button.current;
    gsap.to(contactButton, {
      duration: 2,
      right: "5vw",
      ease: "elastic",
      delay: 4.5,
    });
  }, []);

  return (
    <P.Button
      onMouseEnter={() =>
        buttonAnimation(button, setColor, {}, "rgba(0,0,0,0.9)")
      }
      onMouseLeave={() => buttonAnimation(button, setColor, {}, "")}
      ref={button}
    >
      contactToMe
    </P.Button>
  );
};

export default ContactButton;
