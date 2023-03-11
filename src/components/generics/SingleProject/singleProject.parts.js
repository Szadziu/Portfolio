import styled from 'styled-components';
import {Flex} from '../../../styles/Mixins';
import {device} from '../../../constants/devices';

export const Project = styled.button`
    ${Flex()};
    flex-direction: column;

    & .ch-item {
        position: relative;

        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        box-shadow: 0 .1rem .2rem rgba(0, 0, 0, 0.1);

        cursor: pointer;

        @media ${device.mobileS} {
            width: 5.5rem;
            height: 5.5rem;
        }

        @media ${device.mobileL} {
            width: 12rem;
            height: 12rem;
        }

        @media (orientation: landscape) {
            width: 4.5rem;
            height: 4.5rem;
        }

        @media ${device.desktop} {
            width: 16rem;
            height: 16rem;
        }
    }

    & .ch-info-wrap {
        position: absolute;
        top: 0;
        left: 0;

        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;
        perspective: 80rem;
        box-shadow: 0 0 0 2rem rgba(255, 255, 255, 0.2), inset 0 0 .3rem rgba(115, 114, 23, 0.8);

        background-color: ${({theme}) => theme.white};

        transition: all .4s ease-in-out;

        @media ${device.mobileS} {
            width: 5.5rem;
            height: 5.5rem;
        }

        @media ${device.mobileL} {
            width: 12rem;
            height: 12rem;
        }

        @media (orientation: landscape) {
            width: 4.5rem;
            height: 4.5rem;
        }

        @media ${device.desktop} {
            width: 16rem;
            height: 16rem;
        }
    }

    & .ch-info {
        position: absolute;
        transform-style: preserve-3d;

        width: 4.5rem;
        height: 4.5rem;
        border-radius: 50%;

        transition: all .4s ease-in-out;

        @media ${device.mobileS} {
            width: 5.5rem;
            height: 5.5rem;
        }

        @media ${device.mobileL} {
            width: 12rem;
            height: 12rem;
        }

        @media (orientation: landscape) {
            width: 4.5rem;
            height: 4.5rem;
        }

        @media ${device.desktop} {
            width: 16rem;
            height: 16rem;
        }
    }

    & .ch-info > div {
        position: absolute;

        display: block;
        width: 100%;
        height: 100%;
        border-radius: 50%;

        background-position: center center;
        backface-visibility: hidden;
    }

    & .ch-info .ch-info-back {
        ${Flex()};
        transform: rotate3d(0, 1, 0, 180deg);

        background: ${({theme}) => theme.black};
    }

    & .ch-img-1 {
        background: center / contain no-repeat url(${({thumbnail}) => thumbnail});
    }

    & .ch-info h3 {
        margin: 0 ${({theme}) => theme.margin.l};
        padding-bottom: ${({theme}) => theme.padding.s};
        border-bottom: 1px solid ${({theme}) => theme.white};
        color: ${({theme}) => theme.white};
        font-size: ${({theme}) => theme.fontSize.xxs};
        text-transform: uppercase;
        letter-spacing: ${({theme}) => theme.letterSpacing.m};
        font-family: 'Montserrat', Arial, sans-serif;
        font-weight: 300;
        text-shadow: 0 0 1px #fff, 0 .1rem .2rem rgba(0, 0, 0, 0.3);

        @media ${device.desktop} {
            font-size: ${({theme}) => theme.fontSize.s};
        }
    }

    @media ${device.desktop} {
        & .ch-item:hover .ch-info-wrap {
            box-shadow: 0 0 0 0 rgba(220, 220, 220, 0.8), inset 0 0 .3rem rgba(115, 114, 23, 0.8);
        }

        & .ch-item:hover .ch-info {
            transform: rotate3d(0, 1, 0, -180deg);
        }
    }
`;

export const TitleOfProject = styled.h3`
    ${Flex()};
    width: 10rem;
    height: 3.5rem;
    box-shadow: 0 0 .05rem .05rem ${({theme}) => theme.black};
    padding: ${({theme}) => theme.padding.s};
    margin-top: ${({theme}) => theme.margin.m};
    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme.black};
    font-size: ${({theme}) => theme.fontSize.xs};
    font-weight: 300;
    font-family: 'Montserrat', Arial, sans-serif;

    @media ${device.mobileM} {
        font-size: ${({theme}) => theme.fontSize.s};
    }

    @media ${device.mobileL} {
        width: 12rem;
        height: 5rem;
        font-size: ${({theme}) => theme.fontSize.m};
    }

    @media (orientation: landscape) {
        font-size: ${({theme}) => theme.fontSize.xs};
        width: 10rem;
        height: 3rem;
    }

    @media ${device.mobileS} and (orientation: landscape) {
        height: 3.5rem;
    }

    @media ${device.mobileM} and (orientation: landscape) {
        width: 9rem;
    }

    @media ${device.mobileL} and (orientation: landscape) {
        width: 12rem;
        height: 5rem;
        font-size: ${({theme}) => theme.fontSize.m};
    }

    @media ${device.desktop} {
        display: none;
    }
`;
