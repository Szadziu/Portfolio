import styled from 'styled-components';
import SectionWrapper from '../generics/SectionWrapper';
import {Flex} from '../../styles/Mixins';
import {device} from '../../constants/devices';

export const LandingPageView = styled(SectionWrapper)`
    position: relative;

    & .lines {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;

        width: 90vw;
        height: 100%;
        margin: auto;
    }

    & .line {
        position: absolute;
        top: 0;
        left: 60%;

        width: .1rem;
        height: 100%;

        background-color: ${({theme}) => theme.white_10};
        overflow: hidden;
        filter: blur(.2rem);

        &::after {
            content: '';
            position: absolute;
            top: -50%;
            left: 0;

            display: block;
            height: 15vh;
            width: 100%;

            background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, #000 75%, #000 100%);

            animation: drop 7s 0s infinite;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
        }

        &:nth-child(1) {
            margin-left: -25%;
            &::after {
                animation-delay: 2s;
            }
        }

        &:nth-child(3) {
            margin-left: 25%;
            &::after {
                animation-delay: 2.5s;
            }
        }
    }

    @keyframes drop {
        0% {
            top: -50%;
        }
        100% {
            top: 110%;
        }
    }
`;

export const NavWrapper = styled.div`
    ${Flex('flex-end', 'flex-start')};
    flex-wrap: wrap;
    grid-area: 1/13/13/5;

    @media ${device.desktopFHD} {
        grid-area: 1/13/13/7;
    }
`;

export const NavButtonsWrapper = styled.div`
    position: relative;
    z-index: 2;
    ${Flex()};
    flex-direction: column;
    gap: 2rem;
    margin: 0 3rem;

    width: 100%;
    height: 40rem;
`;

export const PositionTitle = styled.h1`
    font-size: 2.6rem;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    position: relative;
    text-align: right;
    padding: 1rem 2rem 0 0;

    @media ${device.mobileM} {
        font-size: 3rem;
    }

    @media ${device.mobileL} {
        font-size: 3.6rem;
    }

    & .name {
        display: block;
        animation: shimmer 5s linear infinite;
    }

    & .title {
        display: inline-block;
        font-weight: normal;
        color: ${({theme}) => theme.mint_300};
        margin-left: 1rem;
    }

    @keyframes shimmer {
        0% {
            color: ${({theme}) => theme.black};
        }
        50% {
            color: ${({theme}) => theme.black_50};
        }
        100% {
            color: ${({theme}) => theme.black};
        }
    }
`;

export const BackgroundPhoto = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 1rem;
    background-position: -10rem bottom;
    background-size: contain;
    background-image: url(${({image}) => image});
    background-repeat: no-repeat;

    @media ${device.mobileM} {
        background-position: -18rem bottom;
    }
`;
