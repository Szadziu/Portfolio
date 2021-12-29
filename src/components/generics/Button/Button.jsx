import { forwardRef } from "react";
import { Link } from "react-scroll";
import * as P from "./parts";

const Button = forwardRef(({ text, size, position = {}, link }, ref) => {
  return (
    <P.Button size={size} ref={ref} position={position}>
      <Link to={link} spy={true} smooth={true}>
        {text}
      </Link>
    </P.Button>
  );
});

export default Button;
