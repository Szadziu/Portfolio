import * as P from './parts';

const Label = ({ htmlFor, children }) => {
  return <P.Label htmlFor={htmlFor}>{children}</P.Label>;
};

export default Label;
