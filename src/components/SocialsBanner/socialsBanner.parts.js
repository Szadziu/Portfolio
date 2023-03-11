import styled from 'styled-components';
import { device } from '../../constants/devices';
import { Flex } from '../../styles/Mixins';

export const Img = styled.img`
    width: auto;
    height: 4rem;
    margin-left: ${({ theme }) => theme.margin.m};

    transition: .4s;

    @media ${device.mobileM} {
        height: 4.8rem;
    }

    @media ${device.desktop} {
        &:hover {
            transform: scale(1.4);

            cursor: pointer;
        }
    }

    @media ${device.desktopFHD} {
        height: 5.5rem;
    }
`;

export const Banner = styled.div`
    grid-area: 11/2/-1/-2;
    ${Flex('space-around')};
    padding-bottom: ${({ theme }) => theme.padding.m};

    @media ${device.desktop} {
        grid-area: 11/3/-1/-3;
    }
`;

export const SocialLink = styled.a`
    cursor: pointer;
`;
