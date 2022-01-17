import Comment from '../../generics/Comment';
import Label from '../../generics/Label';
import { useFormikContext } from 'formik';
import * as P from './parts';

const Input = ({ label, name, id, placeholder }) => {
  const { errors, touched } = useFormikContext();
  return (
    <P.InputWrapper>
      <Comment error>{touched[name] ? errors[name] : ''}</Comment>
      <Label>
        {label}
        <P.Input name={name} id={id} placeholder={placeholder} />
      </Label>
    </P.InputWrapper>
  );
};

export default Input;
