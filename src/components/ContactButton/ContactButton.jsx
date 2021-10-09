import gsap from "gsap/all";
import { useEffect, useRef } from "react";
import * as P from "./parts";

const tl = gsap.timeline();
const ContactButton = () => {
  const button = useRef(null);

  useEffect(() => {
    const contactButton = button.current;

    tl.from(contactButton, 4, { top: "-50vh", transform: "rotateY(180deg)" });
  }, []);

  return <P.Button ref={button}>contactToMe</P.Button>;
};

export default ContactButton;
