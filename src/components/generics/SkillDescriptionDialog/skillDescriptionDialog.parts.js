import {motion} from 'framer-motion';
import styled from 'styled-components';
import {device} from '../../../constants/devices';

export const ModalWrapper = styled.div`
    height: 90%;
    padding-right: ${({theme}) => theme.padding.m};
    overflow-y: auto;
    letter-spacing: ${({theme}) => theme.letterSpacing.s};
    font-size: ${({theme}) => theme.fontSize.xs};

    & :first-child {
        padding-bottom: ${({theme}) => theme.padding.m};

        font-weight: 400;
    }

    & p:last-child {
        line-height: 1.6;
    }

    &::-webkit-scrollbar {
        width: 1rem;
    }

    &::-webkit-scrollbar-track {
        background: ${({theme}) => theme.gray_200};
    }

    &::-webkit-scrollbar-thumb {
        background: ${({theme}) => theme.gray_300};
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({theme}) => theme.gray_400};
    }
`;

export const InfoModal = styled(motion.div)`
    position: absolute;
    z-index: 999;

    top: ${({oneOfTheLast}) => (oneOfTheLast ? '-21.2rem' : '4rem')};
    left: -2.5rem;
    width: 24rem;
    height: 20rem;

    padding: ${({theme}) => `${theme.padding.xl} ${theme.padding.m}`};
    box-shadow: .2rem .2rem .5rem 0 ${({theme}) => theme.black};

    background-color: ${({theme}) => theme.gray_500};
    color: ${({theme}) => theme.white};

    hyphens: auto;

    &::after {
        content: '';
        z-index: -1;
        position: absolute;
        top: ${({oneOfTheLast}) => (oneOfTheLast ? '19rem' : '-1rem')};
        left: 2.1rem;
        width: 2rem;
        height: 2rem;
        background-color: ${({theme}) => theme.gray_500};
        transform: rotate(45deg);
    }

    @media ${device.mobileM} {
        left: -24rem;
        width: 30rem;

        &:after {
            left: 23.9rem;
        }
    }

    @media ${device.mobileL} {
        top: ${({oneOfTheLast}) => (oneOfTheLast ? '-14rem' : 0)};
        left: -31.5rem;

        &:after {
            top: ${({oneOfTheLast}) => (oneOfTheLast ? '16.5rem' : '3rem')};
            left: 29rem;
        }
    }
`;

export const CloseButton = styled.button`
    color: ${({theme}) => theme.pink_300};
    font-family: 'Montserrat', sans-serif;
    padding: ${({theme}) => theme.padding.m} 0;
    cursor: pointer;
`;

export const ModalTitle = styled.p`
    position: absolute;
    top: 1rem;
    width: 21rem;
    background-color: ${({theme}) => theme.gray_500};
    color: ${({theme}) => theme.mint_300};
    font-size: ${({theme}) => theme.fontSize.s};


    @media ${device.mobileM} {
        width: 27rem;
     }
`;

export const ModalDescription = styled.p`
    margin-top: 3rem;
`;
