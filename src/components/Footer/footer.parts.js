import styled from 'styled-components';
import { device } from '../../constants/devices';
import { SectionTitle } from '../../styles/Mixins';

export const FooterSectionTitle = styled.h1`
    ${SectionTitle(({ color }) => color)};
`;

export const IconsLink = styled.a`
    all: unset;

    position: absolute;
    bottom: 0;
    left: 0;

    padding: ${({ theme }) => theme.padding.m};
    font-size: 8px;

    cursor: pointer;

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.xxs};
    }
`;
