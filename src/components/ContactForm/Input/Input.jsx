import Comment from '../../generics/Comment';
import { useFormikContext } from 'formik';
import * as P from './parts';

const Input = ({ name, id, placeholder }) => {
  const { errors, touched } = useFormikContext();
  return (
    <>
      <P.Input name={name} id={id} placeholder={placeholder} />
      <Comment error>{touched[name] ? errors[name] : ''}</Comment>
    </>
  );
};

export default Input;
