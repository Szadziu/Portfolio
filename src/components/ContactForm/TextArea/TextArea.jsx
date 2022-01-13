import { Field, useFormikContext } from 'formik';
import Comment from '../../generics/Comment';
import * as P from './parts';

const TextArea = ({ name, id, placeholder }) => {
  // const { errors, touched } = useFormikContext();
  // console.log(touched);

  return (
    <>
      <Field
        as={P.TextAreaField}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {/* <Comment error>{touched.body ? errors.body : ''}</Comment> */}
    </>
  );
};

export default TextArea;
