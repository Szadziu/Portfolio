import { forwardRef } from 'react';
import * as P from './formButton.parts';

const FormButton = forwardRef(({ children, type }, ref) => {
    return (
        <>
            <P.Button type={type} ref={ref}>
                {children}
            </P.Button>
        </>
    );
});

export default FormButton;
