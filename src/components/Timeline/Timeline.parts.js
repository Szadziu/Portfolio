import styled from 'styled-components';
import {device} from '../../constants/devices';
import {Flex} from '../../styles/Mixins';
import {motion} from 'framer-motion';

export const Timeline = styled(motion.ul)`
    display: none;

    @media (${device.desktop}) {
        display: ${({currentScreenHeight}) => (currentScreenHeight >= 800 ? 'block' : 'none')};
        grid-area: 2/2/4/12;
        position: relative;
        width: 100%;
        height: 2rem;
        list-style: none;
        text-align: justify;
        margin: 8rem auto 10rem;
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
            width: 1.5rem;
            height: 1.5rem;
            position: absolute;
            top: calc(50% - .75rem);
            left: 100%;
            clip-path: polygon(0 0, 0% 100%, 100% 50%);
            background-color: ${({theme}) => theme.mint_300};
        }
    }
`;

export const TimelineItem = styled.li`
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-color: ${({theme}) => theme.pink_300};
    box-shadow: 0 0 0 .5rem ${({theme}) => theme.gray_300};
    text-align: center;
    line-height: 1.2;
    position: relative;
    border-radius: 50%;
    left: ${({value}) => value}%;
    border: solid .1rem white;
    color: white;

    &:before {
        ${Flex()};
        content: ${({text}) => `"${text}"`};
        font-size: 1.4rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 5.5rem;
        width: 15rem;
        border-left: .1rem solid white;
        border-right: .1rem solid white;
        padding: 0 1rem;
    }

    &:after {
        ${Flex()};
        content: ${({date}) => `"${date}"`};
        font-size: 1.4rem;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        height: 4rem;
        width: 12rem;
    }

    &:nth-child(odd):before {
        top: -6.5rem;
    }

    &:nth-child(even):before {
        bottom: -6.5rem;
    }

    &:nth-child(odd):after {
        bottom: 0;
        margin-bottom: -1rem;
        transform: translate(-50%, 100%);
    }
    &:nth-child(even):after {
        top: 0;
        margin-top: -1rem;
        transform: translate(-50%, -100%);
    }
`;
