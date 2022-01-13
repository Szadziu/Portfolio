import * as P from './parts';
import { Comment } from '../parts';

const Input = ({ errors, name, id, placeholder }) => {
  return (
    <>
      <P.Input name={name} id={id} placeholder={placeholder}></P.Input>
      <Comment>{errors}</Comment>
    </>
  );
};

export default Input;
