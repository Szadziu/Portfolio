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

    @media ${device.desktopHD} {
        body{
            background-position: -45vw -20vh;
            background-size: 90%;
        }
    }

    @media ${device.laptop15} {
        body{
            background-position: -50vw -30vh;
            background-size: 100%;
        }
    }

    @media ${device.laptop13} {
        body{
            background-position: -40vw -15vh;
            background-size: 80%;
        }
    }

    @media ${device.tabletL} {
        body{
            background-position: -60vw 20vh;
            background-size: 120%;
        }
    }

    @media ${device.tabletL} and (orientation: landscape){
        body{
            background-position: -65vw -20vh;
            background-size: 130%;
        }
    }

    @media ${device.tabletM}{
        body{
            background-position: -75vw 0vh;
            background-size: 150%;
        }
    }

    @media ${device.tabletM} and (orientation: landscape){
        body{
            background-position: -60vw -20vh;
            background-size: 120%;
        }
    }

    @media ${device.tabletS}{
        body{
            background-position: -60vw -20vh;
            background-size: 120%;
        }
    }


    @media ${device.mobileL}{
        body{
            background-position: -80vw 20vh;
            background-size: 160%;
        }
    }

    @media ${device.mobileM}{
        body{
            background-position: -80vw 20vh;
            background-size: 160%;
        }
    }


    @media ${device.mobileS}{
        body{
            background-position: -75vw 30vh;
            background-size: 150%;
        }
    }
`;

export default GlobalStyle;
