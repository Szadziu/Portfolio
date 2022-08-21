import * as P from './label.parts';

const Label = ({ htmlFor, children }) => {
    return <P.Label htmlFor={htmlFor}>{children}</P.Label>;
};

export default Label;
