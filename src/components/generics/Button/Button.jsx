import { forwardRef } from "react";
import * as P from "./parts";

const Button = forwardRef(({ text, size, position = {} }, ref) => {
  return (
    <P.Button size={size} ref={ref} position={position}>
      {text}
    </P.Button>
  );
});

export default Button;
