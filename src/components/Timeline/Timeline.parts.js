import styled from 'styled-components';
import { device } from '../../constants/devices';
import { Flex } from '../../styles/Mixins';
import { motion } from 'framer-motion';

export const Timeline = styled(motion.ul)`
    display: none;

    @media (${device.desktop}) {
        display: ${({ currentScreenHeight }) => (currentScreenHeight >= 800 ? 'block' : 'none')};
        grid-area: 2/2/4/12;
        position: relative;
        width: 100%;
        height: 20px;
        list-style: none;
        text-align: justify;
        margin: 80px auto 100px;
        background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0) 45%,
            rgba(98, 217, 199, 1) 51%,
            rgba(255, 255, 255, 0) 57%,
            rgba(255, 255, 255, 0) 100%
        );

        &::after {
            display: inline-block;
            content: '';
            width: 15px;
            height: 15px;
            position: absolute;
            top: calc(50% - 7.5px);
            left: 100%;
            clip-path: polygon(0 0, 0% 100%, 100% 50%);
            background-color: ${({ theme }) => theme.mint_300};
        }
    }
`;

export const TimelineItem = styled.li`
    display: inline-block;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.pink_300};
    box-shadow: 0 0 0 5px ${({ theme }) => theme.gray_300};
    text-align: center;
    line-height: 1.2;
    position: relative;
    border-radius: 50%;
    left: ${({ value }) => value}%;
    border: solid 1px white;
    color: white;

    &:before {
        ${Flex()};
        content: ${({ text }) => `"${text}"`};
        font-size: 14px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 55px;
        width: 150px;
        border-left: 1px solid white;
        border-right: 1px solid white;
        padding: 0 10px;
    }

    &:after {
        ${Flex()};
        content: ${({ date }) => `"${date}"`};
        font-size: 14px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 40px;
        width: 120px;
    }

    &:nth-child(odd):before {
        top: -65px;
    }

    &:nth-child(even):before {
        bottom: -65px;
    }

    &:nth-child(odd):after {
        bottom: 0;
        margin-bottom: -10px;
        transform: translate(-50%, 100%);
    }
    &:nth-child(even):after {
        top: 0;
        margin-top: -10px;
        transform: translate(-50%, -100%);
    }
`;
