import * as P from './button.parts';

const Button = ({ text, link, style, onClick }) => (
    <P.Button to={link} spy={true} smooth={true} style={style} onClick={onClick}>
        {text}
    </P.Button>
);
export default Button;
