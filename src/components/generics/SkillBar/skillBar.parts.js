import styled from 'styled-components';
import {Flex} from '../../../styles/Mixins';
import {device} from '../../../constants/devices';

export const SkillBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    width: 80%;
    border-bottom: .1rem solid ${({theme}) => theme.gray_400};

    @media ${device.mobileL} {
        width: 100%;
    }
`;

export const SkillChartElementsContainer = styled.div`
    ${Flex('flex-end', 'flex-end')};
    gap: .4rem;
    width: 100%;
    height: 100%;

    padding-right: ${({theme}) => theme.padding.s};
    padding-bottom: ${({theme}) => theme.padding.s};

    @media ${device.mobileL} {
        gap: .6rem;
    }
`;

export const SkillChartElement = styled.div`
    width: 1.6rem;
    height: ${({height}) => height + 'px'};
    transform: scale(0);
    background-color: ${({color}) => color};

    @media ${device.mobileM} {
        width: 1.8rem;
        height: ${({height}) => height + 5 + 'px'};
    }

    @media ${device.mobileL} {
        width: 3rem;
        height: ${({height}) => height + 10 + 'px'};
    }

    @media ${device.desktopFHD} {
        width: 3.6rem;
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
    padding-bottom: .4rem;
    font-weight: 600;
`;

export const SkillTitle = styled.p`
    width: 100%;

    text-transform: uppercase;
    text-align: left;
    font-weight: 600;
`;

export const SkillDetailsIcon = styled.button`
    @media ${device.mobileM} {
        color: ${({theme}) => theme.blue_400};
        font-size: ${({theme}) => theme.fontSize.m};
        cursor: pointer;
        font-size: ${({theme}) => theme.fontSize.l};
    }

    @media ${device.desktop} {
        font-size: ${({theme}) => theme.fontSize.xl};

        transition: .2s;

        &:hover {
            transform: rotate(90deg);

            color: ${({theme}) => theme.blue_300};
        }
    }
`;
