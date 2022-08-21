import styled from 'styled-components';
import { device } from '../../constants/devices';
import { SectionTitle } from '../../styles/Mixins';

export const ProjectsSectionTitle = styled.h1`
    ${SectionTitle(({ color }) => color)};
`;

export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-area: 3/2/12/12;

    justify-items: center;
    align-items: center;

    border: 1px solid ${({ theme }) => theme.black};

    @media ${device.mobileM} {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.desktop} {
        grid-area: 3/3/11/11;
    }
`;
