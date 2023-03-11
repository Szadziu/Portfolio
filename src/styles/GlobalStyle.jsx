import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        height: 100%;
    }

    #floating-button {
        position: relative;
        max-width: 160rem;
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
