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
        width: 10px;
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

    top: ${({oneOfTheLast}) => (oneOfTheLast ? '-212px' : '40px')};
    left: -25px;
    width: 240px;
    height: 200px;

    padding: ${({theme}) => `${theme.padding.xl} ${theme.padding.m}`};
    box-shadow: 2px 2px 5px 0 ${({theme}) => theme.black};

    background-color: ${({theme}) => theme.gray_500};
    color: ${({theme}) => theme.white};

    hyphens: auto;

    &::after {
        content: '';
        z-index: -1;
        position: absolute;
        top: ${({oneOfTheLast}) => (oneOfTheLast ? '190px' : '-10px')};
        left: 21px;
        width: 20px;
        height: 20px;
        background-color: ${({theme}) => theme.gray_500};
        transform: rotate(45deg);
    }

    @media ${device.mobileM} {
        left: -240px;
        width: 300px;

        &:after {
            left: 239px;
        }
    }

    @media ${device.mobileL} {
        top: ${({oneOfTheLast}) => (oneOfTheLast ? '-140px' : 0)};
        left: -315px;

        &:after {
            top: ${({oneOfTheLast}) => (oneOfTheLast ? '165px' : '30px')};
            left: 290px;
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
    top: 10px;
    width: 210px;
    background-color: ${({theme}) => theme.gray_500};
    color: ${({theme}) => theme.mint_300};
    font-size: ${({theme}) => theme.fontSize.s};


    @media ${device.mobileM} {
        width: 270px;
     }
`;

export const ModalDescription = styled.p`
    margin-top: 30px;
`;
