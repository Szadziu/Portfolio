import styled from 'styled-components';
import {Flex} from '../../../styles/Mixins';
import {device} from '../../../constants/devices';

export const SkillBarContainer = styled.div`
    /* position: relative; */

    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    /* padding-right: ${({theme}) => theme.padding.xl}; */
    align-self: flex-end;
    width: 80%;
    /* height: 45px; */
    /* padding-bottom: ${({theme}) => theme.padding.s}; */
    /* margin-right: ${({theme}) => theme.margin.m}; */
    /* margin: ${({theme}) => `${theme.margin.l} ${theme.margin.s} ${theme.margin.l} 0`}; */
    /* padding-bottom: 4px; */
    border-bottom: 1px solid ${({theme}) => theme.gray_400};

    /* border: 1px solid black; */

    @media ${device.mobileL} {
        width: 100%;
    }
`;

export const SkillChartElementsContainer = styled.div`
    ${Flex('flex-end', 'flex-end')};
    gap: 4px;
    width: 100%;
    height: 100%;
    padding-right: ${({theme}) => theme.padding.s};

    padding-bottom: ${({theme}) => theme.padding.s};

    /* border: 1px solid ${({theme}) => theme.gray_400}; */

    @media ${device.mobileL} {
        gap: 6px;
    }
`;

export const SkillChartElement = styled.div`
    width: 16px;
    height: ${({height}) => height + 'px'};
    transform: scale(0);
    /* box-shadow: 0 0 0 0.5px ${({theme}) => theme.black}; */

    background-color: ${({color}) => color};

    @media ${device.mobileM} {
        width: 18px;
        height: ${({height}) => height + 5 + 'px'};
    }

    @media ${device.mobileL} {
        width: 30px;
        height: ${({height}) => height + 10 + 'px'};
    }

    @media ${device.desktopFHD} {
        width: 36px;
    }
`;

export const SkillDetailsContainer = styled.div`
    position: relative;
    ${Flex('space-between')};
    flex-wrap: wrap;
    width: 100%;
    height: 100%;

    font-size: ${({theme}) => theme.fontSize.xxs};
    color: ${({theme}) => theme.gray_400};

    & p:first-child {
        align-self: flex-start;
    }

    ${device.mobileM} {
        font-size: ${({theme}) => theme.fontSize.xs};
    }

    ${device.desktop} {
        font-size: ${({theme}) => theme.fontSize.m};
    }
`;

export const SkillPercentage = styled.p`
    padding-bottom: 4px;
    font-weight: 600;
`;

export const SkillTitle = styled.p`
    width: 100%;

    text-transform: uppercase;
    text-align: left;
    font-weight: 600;
`;

export const SkillDetailsIcon = styled.button`
    /* display: none;
    pointer-events: none; */

    @media ${device.mobileM} {
        /* display: block;
        pointer-events: auto; */
        color: ${({theme}) => theme.blue_400};
        font-size: ${({theme}) => theme.fontSize.m};
        cursor: pointer;
        font-size: ${({theme}) => theme.fontSize.l};
    }

    @media ${device.desktop} {
        font-size: ${({theme}) => theme.fontSize.xl};

        transition: 0.2s;

        &:hover {
            transform: rotate(90deg);

            color: ${({theme}) => theme.blue_300};
        }
    }
`;
