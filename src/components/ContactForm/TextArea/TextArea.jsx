import * as P from './parts';
import { Comment } from '../parts';
import { Field } from 'formik';

const TextArea = ({ errors, name, id, placeholder }) => {
  return (
    <>
      <Field as='textarea' name={name} id={id} placeholder={placeholder} />
      <Comment>{errors}</Comment>
    </>
  );
};

export default TextArea;
