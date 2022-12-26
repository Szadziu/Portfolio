import styled from 'styled-components';
import { Flex } from '../../../styles/Mixins';
import { device } from '../../../constants/devices';

export const QuoteParam = styled.p`
    ${Flex()};
    grid-area: 11/2/13/12;
    opacity: 0;
    padding: ${({ theme }) => theme.padding.xl};

    color: ${({ theme }) => theme.pink_300};

    font-style: italic;
    font-size: ${({ theme }) => theme.fontSize.m};

    @media ${device.desktop} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;
