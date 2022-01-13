import Comment from '../../generics/Comment';
import * as P from './parts';

const Input = ({ errors, name, id, placeholder }) => {
  return (
    <>
      <P.Input name={name} id={id} placeholder={placeholder} />
      <Comment error>{errors}</Comment>
    </>
  );
};

export default Input;
