import * as P from './button.parts';

const Button = ({ children, link, style }) => {
  return (
    <P.Button to={link} spy={true} smooth={true} style={style}>
      {children}
    </P.Button>
  );
};

export default Button;
