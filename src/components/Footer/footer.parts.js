import styled from 'styled-components';
import { device } from '../../constants/devices';
import { SectionTitle } from '../../styles/Mixins';

export const FooterSectionTitle = styled.h2`
    ${SectionTitle(({ color }) => color)};
`;

export const IconsLink = styled.a`
    all: unset;

    position: absolute;
    bottom: 0;
    left: 0;

    padding: ${({ theme }) => theme.padding.m};
    font-size: .8rem;

    cursor: pointer;

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.xxs};
    }
`;
