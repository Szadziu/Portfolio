import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${(props) => props.theme.fontColor};

    }

    body {
        background: ${(props) => `linear-gradient${props.theme.mainGradient}`};
        font-family: 'Source Code Pro', monospace;
        /* font-family: Arial, Helvetica, sans-serif; */
    }

    ul, ol {
        list-style: none;
    }

    button {
        background: none;
        border: none;
        &:focus, &:active {
            outline: none;
        }
    }
`;

export default GlobalStyle;
