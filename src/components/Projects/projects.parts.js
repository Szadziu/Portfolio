import styled from 'styled-components';
import {device} from '../../constants/devices';
import {SectionTitle} from '../../styles/Mixins';

export const ProjectsSectionTitle = styled.h2`
    ${SectionTitle(({color}) => color)};
    padding-top: ${({theme}) => theme.padding.xl};
    margin-top: 0;
`;

export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    grid-area: 2/2/12/12;
    min-height: 400px;
    max-height: 800px;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    
    justify-items: center;
    align-items: center;
    
    box-shadow: 0 0 4px 2px ${({theme}) => theme.gray_200};

    @media ${device.mobileL} {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        max-width: 800px;
    }
    
    @media (orientation: landscape) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(4, 1fr);
        min-height: 200px;
    }
    
    @media ${device.desktop} {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        min-height: 500px;
        max-width: 1000px;
    }
`;
