import styled from 'styled-components';
import { Flex } from '../../../styles/Mixins';
import { device } from '../../../constants/devices';

export const Bar = styled.div`
    position: relative;

    display: flex;
    flex-wrap: wrap;
    align-self: flex-end;
    width: 80%;
    height: 40px;
    margin-right: ${({ theme }) => theme.margin.m};
    border-bottom: 2px solid ${({ theme }) => theme.black};

    @media ${device.mobileL} {
        width: 90%;
    }

    @media ${device.desktop} {
        height: 20%;
    }
`;

export const Boxes = styled.div`
    ${Flex('flex-end', 'flex-end')};
    gap: 5px;
    width: 60%;
    height: 100%;
    padding-bottom: ${({ theme }) => theme.padding.s};

    @media ${device.mobileL} {
        gap: 10px;
    }
`;

export const BoxOfSkill = styled.div`
    width: 10px;
    height: ${({ height }) => height + 'px'};
    transform: scale(0);
    box-shadow: 0 0 0 0.5px ${({ theme }) => theme.black};

    background-color: ${({ color }) => color};

    @media ${device.mobileM} {
        width: 12px;
        height: ${({ height }) => height + 10 + 'px'};
    }

    @media ${device.mobileL} {
        width: 16px;
        height: ${({ height }) => height + 15 + 'px'};
    }

    @media ${device.desktopFHD} {
        width: 24px;
        height: ${({ height }) => height + 30 + 'px'};
    }
`;

export const InfoOfSkill = styled.div`
    ${Flex('flex-start')};
    flex-wrap: wrap;
    width: 40%;
    height: 100%;

    color: ${({ theme }) => theme.black};
`;
