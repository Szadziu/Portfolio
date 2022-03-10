import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
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
            background-color: ${({ theme }) => theme.darkerGray};
        }
    }
`;

export default GlobalStyle;
