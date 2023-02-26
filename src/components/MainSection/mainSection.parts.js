import styled from 'styled-components';
import {device} from '../../constants/devices';
import { SectionTitle } from '../../styles/Mixins';

export const AboutMeDescWrapper = styled.div`
    grid-area: 2/2/12/11;

    @media ${device.mobileL} {
        grid-area: 2/1/12/7;
    }

    @media ${device.desktop} {
        grid-area: 2/1/12/8;
    }

    @media ${device.desktopHD} {
        grid-area: 2/1/12/9;
        padding-right: ${({theme}) => theme.padding.xl3};
    }
`;

export const AboutMeSectionTitle = styled.h2`
${SectionTitle(({color}) => color)};
`
