import { Field, useFormikContext } from 'formik';
import Comment from '../../generics/Comment';
import { Label } from '../../generics/Label/parts';
import * as P from './parts';

const TextArea = ({ name, id, placeholder, label }) => {
  const { errors, touched } = useFormikContext();
  return (
    <P.TextAreaWrapper>
      <Comment error>{touched[name] ? errors[name] : ''}</Comment>
      <Label htmlFor={name}>
        {label}
        <Field
          as={P.TextAreaField}
          name={name}
          id={id}
          placeholder={placeholder}
        />
      </Label>
    </P.TextAreaWrapper>
  );
};

export default TextArea;
