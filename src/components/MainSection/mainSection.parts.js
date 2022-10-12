import styled from 'styled-components';
import { device } from '../../constants/devices';
import { SectionTitle } from '../../styles/Mixins';

export const MainSectionTitle = styled.h1`
    ${SectionTitle(({ color }) => color)};
`;

export const AboutMeDescWrapper = styled.div`
    grid-area: 2/2/12/11;

    @media ${device.mobileL} {
        grid-area: 2/1/12/7;
    }

    @media ${device.desktop} {
        grid-area: 2/1/12/8;
    }
`;

export const TempTimeline = styled.div`
    position: relative;
    /* border: white 1px solid; */
    width: 100%;
    height: 50px;
    grid-area: 2/2/12/12;

    &::before {
        content: '';
        position: absolute;
        top: calc(50% - 2px);
        width: 100%;
        height: 4px;
        transition: cubic-bezier(0, 0.8, 1, 0.21);
        background-color: ${({ theme }) => theme.mint_300};
    }
`;

export const TempTimelineItem = styled.div`
    width: 100px;
    height: 50px;
    background-color: cyan;
    transform: translateX(${({ x }) => x}%) translateY(-50%);

    &::after {
        content: '';
        position: absolute;
        top: calc(50% - 12.5px);
        left: ${({ width }) => width}%;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: orangered;
    }
`;
