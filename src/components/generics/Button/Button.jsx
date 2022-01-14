import * as P from './parts';

const Button = ({ text, link }) => {
  return (
    <P.Button to={link} spy={true} smooth={true}>
      {text}
    </P.Button>
  );
};

export default Button;
