import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Label = styled.label`
    height: 20px;
    width: 100%;
    color: ${({ theme }) => theme.mint_300};
    font-size: ${({ theme }) => theme.fontSize.s};

    @media ${device.desktop} {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media ${device.desktopFHD} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;
