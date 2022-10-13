import styled from 'styled-components';
import { device } from '../../constants/devices';
import { SectionTitle } from '../../styles/Mixins';

export const MainSectionTitle = styled.h1`
    ${SectionTitle(({ color }) => color)};
`;

export const AboutMeDescWrapper = styled.div`
    grid-area: 2/2/12/11;

    @media ${device.mobileL} {
        grid-area: 2/1/12/7;
    }

    @media ${device.desktop} {
        grid-area: 2/1/12/8;
    }
`;
