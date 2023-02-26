import styled, { css } from 'styled-components';
import { device } from '../../../constants/devices';

const infoComment = css`
    text-transform: uppercase;
`;

export const Comment = styled.p`
    position: absolute;
    left: ${({ info }) => (info ? '20px' : "0")};
    bottom: ${({ info }) => (info ? '30px' : "-20px")};
    width: 100%;
    height: 24px;
    line-height: 20px;
    z-index: -1;
    padding-top: ${({ theme }) => theme.padding.s};

    color: ${({ error, theme }) => (error ? theme.pink_300 : theme.green_300)};

    ${({ info }) => (info ? infoComment : null)};

    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({info}) => (info ? 600 : 300)};
    
    @media ${device.mobileL} {
        font-size: ${({ theme }) => theme.fontSize.m};
    }
`;
