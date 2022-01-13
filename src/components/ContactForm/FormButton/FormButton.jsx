import { forwardRef } from 'react';
import Comment from '../../generics/Comment';
import * as P from './parts';

const FormButton = forwardRef(({ children, isSubmitted }, ref) => {
  return (
    <>
      <P.Button ref={ref}>{children}</P.Button>
      {isSubmitted && <Comment info>Wysłano</Comment>}
    </>
  );
});

export default FormButton;
