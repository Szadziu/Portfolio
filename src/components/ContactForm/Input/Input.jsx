import { useFormikContext } from 'formik';
import Comment from '../../generics/Comment';
import Label from '../../generics/Label';
import * as P from './input.parts';

const Input = ({ label, name, id, placeholder, ...props }) => {
    const { errors, touched } = useFormikContext();

    return (
        <P.InputWrapper>
            <Label htmlFor={id}>{label}</Label>
            <P.Input
                error={touched[name] && errors[name]}
                name={name}
                id={id}
                placeholder={placeholder}
                autoComplete="off"
                {...props}
            />
            <Comment error>{touched[name] ? errors[name] : ''}</Comment>
        </P.InputWrapper>
    );
};

export default Input;
