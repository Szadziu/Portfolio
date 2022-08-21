import styled from 'styled-components';
import { device } from '../../../constants/devices';
import { Flex } from '../../../styles/Mixins';

export const Button = styled.button`
    ${Flex()};
    gap: 5px;

    height: 40px;
    min-width: 100px;
    align-self: flex-end;
    padding: ${({ theme }) => `${theme.padding.s} ${theme.padding.m}`};

    background-color: ${({ theme }) => theme.black_20};
    color: ${({ theme }) => theme.pink_300};

    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.xs};
    font-family: 'Montserrat', 'sans-serif';
    letter-spacing: ${({ theme }) => theme.letterSpacing.s};
    text-transform: uppercase;

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.m};
    }

    @media ${device.desktop} {
        &:hover {
            color: ${({ theme }) => theme.pink_200};
            cursor: pointer;
        }
    }
    @media ${device.desktopFHD} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }
`;
