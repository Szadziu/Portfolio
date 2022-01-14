import { Field, useFormikContext } from 'formik';
import Comment from '../../generics/Comment';
import * as P from './parts';

const TextArea = ({ name, id, placeholder }) => {
  const { errors, touched } = useFormikContext();
  console.log(errors);

  return (
    <>
      <Field
        as={P.TextAreaField}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      <Comment error>{touched[name] ? errors[name] : ''}</Comment>
    </>
  );
};

export default TextArea;
