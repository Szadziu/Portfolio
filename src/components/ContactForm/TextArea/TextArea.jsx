import { Field, useFormikContext } from "formik";
import Comment from "../../generics/Comment";
import { Label } from "../../generics/Label/label.parts";
import * as P from "./textArea.parts";

const TextArea = ({ name, id, placeholder, label }) => {
  const { errors, touched } = useFormikContext();
  return (
    <P.TextAreaWrapper>
      <Label htmlFor={id}>{label}</Label>
      <Field
        error={errors[name] && touched[name]}
        as={P.TextAreaField}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      <Comment error>{touched[name] ? errors[name] : ""}</Comment>
    </P.TextAreaWrapper>
  );
};

export default TextArea;
