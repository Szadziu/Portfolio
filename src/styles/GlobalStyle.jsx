import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: rgb(26, 26, 26);
    }

    body {
        background-color: #000000;
background-image: linear-gradient(326deg, #000000 0%, #ce203c 74%);

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
