import styled from 'styled-components';
import { motion } from 'framer-motion';
import { device } from '../../../constants/devices';
import slideArrow from '../../../assets/fast-forward.png';
import { Flex } from '../../../styles/Mixins';

export const SkillLabel = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.mint_300};
    color: ${({ theme }) => theme.white};

    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 45px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: ${({ theme }) => theme.letterSpacing.xl};
    writing-mode: vertical-lr;

    cursor: pointer;
    user-select: none;

    &::before {
        content: '';

        display: block;
        margin: ${({ theme }) => theme.margin.m} 0;
        transform: rotateY(${({ isSideMenuOpen }) => (isSideMenuOpen ? '0' : '180deg')});
        z-index: 1;

        width: 30px;
        height: 30px;

        background: center / contain no-repeat url(${slideArrow});

        transition: 1s;
    }

    @media ${device.mobileL} {
        display: none;
    }
`;

export const SkillContainer = styled(motion.div)`
    position: absolute;
    top: 10%;
    right: 0;

    ${Flex('space-around')};
    flex-direction: column;

    width: 300px;
    min-height: 450px;
    border-radius: ${({ theme }) => `${theme.borderRadius.m} 0 0 ${theme.borderRadius.m}`};
    box-shadow: 0 0 5px 3px ${({ theme }) => theme.mint_400};

    background-color: ${({ theme }) => theme.white};

    transition: 1s;
    transform: translateX(${({ isSideMenuOpen }) => (isSideMenuOpen ? 0 : '85%')});
    user-select: none;

    @media ${device.mobileL} {
        position: static;
        transform: translateX(0);
        grid-area: 2/7/11/13;
        width: 100%;
        height: 100%;
    }

    @media ${device.desktop} {
        width: 80%;
        justify-self: end;
    }
`;

export const InfoIconLink = styled.button`
    align-self: flex-start;

    color: ${({ theme }) => theme.blue_400};

    font-size: ${({ theme }) => theme.fontSize.m};

    cursor: pointer;

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media ${device.desktop} {
        font-size: ${({ theme }) => theme.fontSize.xl};

        transition: 0.2s;

        &:hover {
            transform: rotate(90deg);

            color: ${({ theme }) => theme.blue_300};
        }
    }
`;

export const SkillTitle = styled.p`
    width: 100%;

    font-size: ${({ theme }) => theme.fontSize.s};
    text-transform: uppercase;
    text-align: left;
    font-weight: 600;
    color: ${({ theme }) => theme.gray_400};

    @media ${device.desktopFHD} {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;

export const SkillAdvancementInfo = styled.div`
    ${Flex('space-between')};
    width: 100%;

    color: ${({ theme }) => theme.gray_400};

    font-size: ${({ theme }) => theme.fontSize.s};

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media ${device.desktop} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media ${device.desktopFHD} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
