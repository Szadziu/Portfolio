import { useContext, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { contactButtonLoadAnimation } from "../../animations/contactButtonLoadAnimation";
import { THEME } from "../../constants";
import { BackgroundContext } from "../App/App";
import * as P from "./parts";

const ContactButton = () => {
  const contactButton = useRef(null);

  const { setColor } = useContext(BackgroundContext);

  useEffect(() => contactButtonLoadAnimation(contactButton), []);

  return (
    <Link to="contact" spy={true} smooth={true}>
      <P.Button
        onMouseEnter={() =>
          buttonAnimation(contactButton, setColor, {}, THEME.darkenedBackground)
        }
        onMouseLeave={() => buttonAnimation(contactButton, setColor, {}, "")}
        ref={contactButton}
      >
        contactToMe
      </P.Button>
    </Link>
  );
};

export default ContactButton;
