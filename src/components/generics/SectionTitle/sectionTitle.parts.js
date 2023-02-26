import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Title = styled.h2`
    grid-area: 1/1/2/13;
    width: 60%;
    max-width: 400px;

    border-width: 1.5px 0;
    border-style: solid;
    border-color: ${({ color }) => color};
    margin: ${({ theme }) => theme.margin.xxl} auto;
    padding: ${({ theme }) => theme.padding.s} 0;

    color: ${({ color }) => color};

    font-size: ${({ theme }) => theme.fontSize.m};
    letter-spacing: ${({ theme }) => theme.letterSpacing.s};
    text-align: center;
    text-transform: uppercase;

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media ${device.desktop} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
