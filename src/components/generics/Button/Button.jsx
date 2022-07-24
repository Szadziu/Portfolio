import * as P from './button.parts';

const Button = ({ text, link, style }) => {
    return (
        <P.Button to={link} spy={true} smooth={true} style={style}>
            {text}
        </P.Button>
    );
};

export default Button;
