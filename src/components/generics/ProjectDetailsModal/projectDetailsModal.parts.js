import styled from 'styled-components';
import {Flex} from '../../../styles/Mixins';
import close from '../../../assets/closeBtn.png';
import {motion} from 'framer-motion';
import {device} from '../../../constants/devices';

export const Modal = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    ${Flex('center', 'flex-start')};
    flex-wrap: wrap;
    width: 100%;
    height: 100%;
    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme.black};
    font-size: ${({theme}) => theme.fontSize.xl};
    text-align: center;
    overflow: hidden;
    padding: ${({theme}) => theme.padding.xxl};

    @media ${device.desktop} {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        max-height: 60rem;
        max-width: 80rem;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100vw;
    height: 100vh;

    background-color: ${({theme}) => theme.black_50};
`;

export const ProjectHeader = styled.header`
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-shadow: inset 0 -.1rem 0 ${({theme}) => theme.gray_200};
    font-size: ${({theme}) => theme.fontSize.m};

    @media ${device.mobileM} {
        font-size: ${({theme}) => theme.fontSize.xl};
    }

    @media ${device.mobileL} {
        font-size: ${({theme}) => theme.fontSize.xxl};
    }
`;

export const ProjectTitle = styled.p`
    font-weight: 700;
    padding-bottom: ${({theme}) => theme.padding.l};
`;

export const CloseButton = styled.button`
    width: 2rem;
    height: 2rem;
    background: center / contain url(${close});

    &:hover {
        cursor: pointer;
    }

    @media ${device.mobileM} {
        width: 2.5rem;
        height: 2.5rem;
    }

    @media ${device.mobileL} {
        width: 3rem;
        height: 3rem;
    }
`;

export const ProjectPreviewSection = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const Icon = styled.a`
    display: inline-block;
    width: 5rem;
    height: 5rem;
    background: center / contain url(${({icon}) => icon}) no-repeat;

    @media ${device.mobileM} {
        width: 6rem;
        height: 6rem;
    }

    @media ${device.mobileL} {
        width: 8rem;
        height: 8rem;
    }

    @media ${device.desktop} {
        transition: .3s;

        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const ProjectDescription = styled.section`
    width: 100%;
    min-height: 100px;
    height: 50%;
    padding-right: ${({theme}) => theme.padding.l};
    font-size: ${({theme}) => theme.fontSize.s};
    text-align: left;
    line-height: 1.6;
    hyphens: auto;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 1rem;
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
        font-size: ${({theme}) => theme.fontSize.m};
    }

    @media ${device.mobileL} {
        font-size: ${({theme}) => theme.fontSize.xl};
    }
`;

export const TechnologyTagsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
`;

export const UCBadge = styled.img`
    position: absolute;

    width: 8rem;
    bottom: 0px;
    right: 4rem;
    transform: translate(0, -4rem) rotate(-30deg);

    @media ${device.desktop} {
        width: 12rem;
    }
`;
