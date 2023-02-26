import styled from 'styled-components';
import {device} from '../../../constants/devices';

export const Container = styled.div`
    overflow: auto;
    height: 90%;
    padding: 0 ${({theme}) => theme.padding.m};

    font-size: ${({theme}) => theme.fontSize.s};
    letter-spacing: ${({theme}) => theme.letterSpacing.s};
    hyphens: auto;

    &::-webkit-scrollbar {
        width: 6px;
    }

    &::-webkit-scrollbar-track {
        background: ${({theme}) => theme.gray_200};
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.gray_400};
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({theme}) => theme.gray_500};
    }

    @media ${device.mobileM} {
        font-size: ${({theme}) => theme.fontSize.l};
    }

    @media ${device.mobileL} {
        margin: 0 ${({theme}) => theme.margin.xl};
    }

    @media ${device.desktop} {
        height: ${({currentScreenHeight}) => (currentScreenHeight >= 800 ? '60%' : '90%')};
        font-size: ${({theme}) => theme.fontSize.xl};
    }
`;

export const Line = styled.span`
    position: relative;

    display: none;
    overflow: hidden;

    color: ${({theme}) => theme.white};

    line-height: 1.8;

    &::after {
        position: absolute;
        top: 0;
        right: 0;

        width: 100%;
        height: 100%;
        transform: translateX(-101%);

        background: ${({theme}) => theme.white};

        animation: a-ltr-after 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        content: '';
    }
    &::before {
        position: absolute;
        top: 0;
        right: 0;

        width: 100%;
        height: 100%;
        transform: translateX(0);

        background: ${({theme}) => theme.gray_300};

        animation: a-ltr-before 2s cubic-bezier(0.77, 0, 0.18, 1) forwards;
        content: '';
    }
    &:nth-of-type(1)::before,
    &:nth-of-type(1)::after {
        animation-delay: 1s;
    }

    &:nth-of-type(2)::before,
    &:nth-of-type(2)::after {
        animation-delay: 2s;
    }

    &:nth-of-type(3)::before,
    &:nth-of-type(3)::after {
        animation-delay: 3s;
    }

    &:nth-of-type(4)::before,
    &:nth-of-type(4)::after {
        animation-delay: 4s;
    }

    &:nth-of-type(5)::before,
    &:nth-of-type(5)::after {
        animation-delay: 5s;
    }

    &:nth-of-type(6)::before,
    &:nth-of-type(6)::after {
        animation-delay: 6s;
    }
    @keyframes a-ltr-after {
        0% {
            transform: translateX(-100%);
        }
        100% {
            transform: translateX(101%);
        }
    }

    @keyframes a-ltr-before {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(200%);
        }
    }
`;
