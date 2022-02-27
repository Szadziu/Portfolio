import { forwardRef } from "react";
import Comment from "../../generics/Comment";
import * as P from "./parts";

const FormButton = forwardRef(({ children, isSubmitted, type }, ref) => {
  return (
    <>
      <P.Button type={type} ref={ref}>
        {children}
      </P.Button>
      {isSubmitted && <Comment info>Wysłano</Comment>}
    </>
  );
});

export default FormButton;
