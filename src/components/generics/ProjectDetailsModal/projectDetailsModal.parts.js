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
        max-height: 600px;
        max-width: 800px;
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
    box-shadow: inset 0px -1px 0px ${({theme}) => theme.gray_200};
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
    width: 20px;
    height: 20px;
    background: center / contain url(${close});

    &:hover {
        cursor: pointer;
    }

    @media ${device.mobileM} {
        width: 25px;
        height: 25px;
    }

    @media ${device.mobileL} {
        width: 30px;
        height: 30px;
    }
`;

export const ProjectPreviewSection = styled.section`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const Icon = styled.a`
    display: inline-block;
    width: 50px;
    height: 50px;
    background: center / contain url(${({icon}) => icon}) no-repeat;

    @media ${device.mobileM} {
        width: 60px;
        height: 60px;
    }

    @media ${device.mobileL} {
        width: 80px;
        height: 80px;
    }

    @media ${device.desktop} {
        transition: 0.3s;

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
        width: 10px;
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
    gap: 10px;
    width: 100%;
`;

export const UCBadge = styled.img`
    position: absolute;

    width: 80px;
    bottom: 0px;
    right: 40px;
    transform: translate(0, -40px) rotate(-30deg);

    @media ${device.desktop} {
        width: 120px;
    }
`;
