import { forwardRef } from "react";
import * as P from "./parts";

const Button = forwardRef(({ text, size, position = {}, link }, ref) => {
  return (
    <P.Button
      size={size}
      ref={ref}
      position={position}
      to={link}
      spy={true}
      smooth={true}
    >
      {text}
    </P.Button>
  );
});

export default Button;
