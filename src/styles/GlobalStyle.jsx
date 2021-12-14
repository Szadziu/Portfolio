import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.fontColor};

    }

    body {
        background: url(${({ theme }) => theme.landingSectionBackground}); 
        background-repeat: no-repeat;
        /* background-position: 700% 20%; */
        background-position: -25vw 0vh;
        background-size: 55%;
        font-family: 'Source Code Pro', monospace;
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
