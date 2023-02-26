import * as P from './button.parts';

const Button = ({text, link, style, href, target, onClick}) => {

    if (target === '_blank') {
        return (
            <P.LinkButton href={href} target={target} rel="noreferrer" style={style} onClick={onClick}>
                {text}
            </P.LinkButton>
        );
    }

    return (
        <P.StyledButton to={link} spy={true} smooth={true} style={style} onClick={onClick}>
            {text}
        </P.StyledButton>
    );
};

export default Button;
