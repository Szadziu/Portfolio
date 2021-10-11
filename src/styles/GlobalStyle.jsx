import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${(props) => props.theme.fontColor};
    }

    body {
        /* @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;500;700&display=swap'); */
        /* chwilowo nie działa */
        /* font-family: 'Source Code Pro', monospace; */
        background: ${(props) => `linear-gradient${props.theme.mainGradient}`};
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
