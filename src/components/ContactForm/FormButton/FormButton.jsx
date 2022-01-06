import * as P from "./parts";
import { forwardRef } from "react";

const FormButton = forwardRef(({ children, isSubmitted }, ref) => {
  return (
    <>
      <P.Button ref={ref}>{children}</P.Button>
      {isSubmitted && <P.Comment>Wysłano</P.Comment>}
    </>
  );
});

export default FormButton;
