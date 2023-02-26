import styled from 'styled-components';
import {motion} from 'framer-motion';
import {device} from '../../../constants/devices';
import slideArrow from '../../../assets/fast-forward.png';
import {Flex} from '../../../styles/Mixins';

export const SkillLabel = styled.div`
    position: absolute;
    top: 0;
    left: 0;

    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.mint_300};
    color: ${({theme}) => theme.white};

    font-size: ${({theme}) => theme.fontSize.xl};
    line-height: 45px;
    text-transform: uppercase;
    letter-spacing: ${({theme}) => theme.letterSpacing.xxl};
    writing-mode: vertical-lr;

    cursor: pointer;
    user-select: none;

    &::before {
        content: '';

        display: block;
        position: absolute;
        top: 0;
        margin: ${({theme}) => theme.margin.m} 0;
        transform: rotateY(${({isSideMenuOpen}) => (isSideMenuOpen ? '0' : '180deg')});
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

export const SkillsContainer = styled(motion.div)`
    position: absolute;
    top: 50px;
    right: 0;
    padding: ${({theme}) => theme.padding.xl};
    ${Flex('space-around')}
    flex-direction: column;

    width: 300px;
    height: calc(100% - 166px);
    min-height: 500px;
    border-radius: ${({theme}) => `${theme.borderRadius.m} 0 0 ${theme.borderRadius.m}`};
    box-shadow: 0 0 5px 3px ${({theme}) => theme.mint_400};

    background-color: ${({theme}) => theme.white};

    transition: 1s;
    transform: translateX(${({isSideMenuOpen}) => (isSideMenuOpen ? 0 : '85%')});
    user-select: none;

    @media ${device.mobileL} {
        position: static;
        transform: translateX(0);
        grid-area: 2/7/12/13;
        width: 100%;
        height: 100%;
    }

    @media ${device.desktop} {
        width: 80%;
        justify-self: end;
    }

    @media ${device.desktopHD} {
        width: 70%;
    }
`;
