import { css } from 'styled-components';
import { device } from '../constants/devices';

export const Flex = (justify = 'center', align = 'center') => css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
`;

export const SectionTitle = (color) => css`
    grid-area: 1/1/2/13;
    width: 60%;
    max-width: 400px;

    border-width: 1.5px 0;
    border-style: solid;
    border-color: ${color};
    margin: ${({ theme }) => theme.margin.xxl} auto;
    padding: ${({ theme }) => theme.padding.s} 0;

    color: ${color};

    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }

    @media ${device.desktop} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
