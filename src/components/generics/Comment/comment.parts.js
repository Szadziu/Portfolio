import styled, { css } from 'styled-components';
import { device } from '../../../constants/devices';

const infoComment = css`
    width: 90%;

    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 300;
    text-transform: uppercase;
`;

export const Comment = styled.p`
    width: 100%;
    height: 24px;
    line-height: 20px;
    padding-top: ${({ theme }) => theme.padding.s};

    color: ${({ error, theme }) => (error ? theme.pink_300 : theme.green_300)};
    ${({ info }) => (info ? infoComment : null)};

    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 300;

    @media ${device.mobileL} {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;
