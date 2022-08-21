import styled from 'styled-components';
import { Flex } from '../../../styles/Mixins';
import closeBtn from '../../../assets/closeBtn.png';
import { motion } from 'framer-motion';
import { device } from '../../../constants/devices';

export const Modal = styled(motion.div)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    ${Flex('center', 'flex-start')};
    flex-wrap: wrap;
    width: 80%;
    max-width: 380px;
    height: 70%;
    max-height: 500px;

    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};

    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    overflow: hidden;

    @media ${device.desktopFHD} {
        max-width: 550px;
    }
`;

export const ProjectTitle = styled.p`
    width: 80%;
    margin-top: ${({ theme }) => theme.margin.l};
    margin-bottom: ${({ theme }) => theme.margin.m};
    border-bottom: 1px solid ${({ theme }) => theme.black};
    padding-bottom: ${({ theme }) => theme.padding.m};

    @media ${device.desktopFHD} {
        width: 90%;
    }
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    width: 100vw;
    height: 100vh;

    background-color: ${({ theme }) => theme.black_50};
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;

    width: 15px;
    height: 15px;

    background: center / contain url(${closeBtn});

    &:hover {
        cursor: pointer;
    }
`;

export const Icon = styled.a`
    display: inline-block;
    width: 80px;
    height: 80px;
    margin: 0 auto ${({ theme }) => theme.margin.m};

    background: center / contain url(${({ icon }) => icon});

    transition: 0.3s;

    @media ${device.desktop} {
        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const ProjectDescription = styled.section`
    width: 100%;
    height: 50%;
    padding: 0 ${({ theme }) => theme.padding.xl};

    font-size: ${({ theme }) => theme.fontSize.m};
    text-align: justify;
    hyphens: auto;
    overflow: auto;

    @media ${device.desktopFHD} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.gray_200};
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.gray_400};
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.gray_500};
    }
`;

export const UCBadge = styled.img`
    position: absolute;

    width: 120px;
    bottom: 0px;
    right: 40px;
    transform: translate(0, -40px) rotate(-30deg);
`;
