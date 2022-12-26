import styled from 'styled-components';
import SectionWrapper from '../generics/SectionWrapper';
import { Flex } from '../../styles/Mixins';
import { device } from '../../constants/devices';

export const LandingPageView = styled(SectionWrapper)`
    position: relative;

    & .lines {
        position: absolute;
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

        width: 1px;
        height: 100%;

        background-color: ${({ theme }) => theme.white_10};
        overflow: hidden;
        filter: blur(2px);

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
`;

export const NavButtonsWrapper = styled.div`
    ${Flex()};
    flex-direction: column;
    gap: 20px;
    margin: 0 30px;

    width: 100%;
    height: 310px;

    @media ${device.desktop} {
        height: 400px;
    }
`;

export const PositionTitle = styled.h1`
    font-size: 36px;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    position: relative;
    text-align: right;
    padding: 10px 20px 0 0;

    & .name {
        display: block;
        animation: shimmer 5s linear infinite;
    }

    & .title {
        display: inline-block;
        font-weight: normal;
        color: ${({ theme }) => theme.mint_300};
        margin-left: 10px;
    }

    @keyframes shimmer {
        0% {
            color: #333;
        }
        50% {
            color: #999;
        }
        100% {
            color: #333;
        }
    }
    /* position: relative;
    z-index: 1;

    ${Flex()}
    flex-direction: column;
    row-gap: 10px;

    width: 220px;
    height: 90px;
    padding: ${({ theme }) => `${theme.padding.xl} ${theme.padding.s}`};
    border-left: 1px solid ${({ theme }) => theme.mint_300};
    border-bottom: 2px solid ${({ theme }) => theme.mint_300};

    line-height: 18px;
    text-align: right;
    text-transform: uppercase;

    color: ${({ theme }) => theme.black};

    & :first-child {
        font-weight: 400;
        border-bottom: 1px solid ${({ theme }) => theme.mint_300};
        padding-bottom: 5px;
    }

    & :last-child {
        font-size: ${({ theme }) => theme.fontSize.xs};
    } */
`;

export const BackgroundPhoto = styled.div`
    background-size: 112.5vh 150vh;
    /* background-position: -56.25vh
        ${({ currentScreenHeight }) => (currentScreenHeight > 650 ? '-5vh' : '0vh')}; */

    background-position: -56.25vh 0;

    position: absolute;

    width: 100%;
    height: 100%;

    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    /* background-size: 112.5vh 150vh;
    background-position: -56.25vh -5vh;
    background-attachment: fixed; */
`;
