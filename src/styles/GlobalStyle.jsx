import { device } from "../constants/devices";
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

    @media ${device.mobileS}{
        body{
            background-position: -75vw 30vh;
            background-size: 150%;
        }
    }

    @media ${device.mobileSL} and (orientation:landscape){
        body{
            background-position: -45vw -20vh;
            background-size: 90%;
        }
    }

    @media ${device.tabletS}{
        body{
            background-position: -50vw -10vh;
            background-size: 100%;
        }
    }

    @media ${device.tabletSP} and (orientation: portrait){
        body{
            background-position: -100vw -10vh;
            background-size: 190%;
        }
    }

    @media ${device.laptop13} {
        body{
            background-position: -40vw -15vh;
            background-size: 80%;
        }
    }

    @media ${device.laptop15} {
        body{
            background-position: -50vw -30vh;
            background-size: 100%;
        }
    }
    
    @media ${device.desktopHD} {
        body{
            background-position: -45vw -20vh;
            background-size: 90%;
        }
    } 
    
`;

export default GlobalStyle;
