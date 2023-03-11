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
    min-height: 40rem;
    max-height: 80rem;
    width: 100%;
    max-width: 40rem;
    margin: 0 auto;
    
    justify-items: center;
    align-items: center;
    
    box-shadow: 0 0 .4rem .2rem ${({theme}) => theme.gray_200};

    @media ${device.mobileL} {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        max-width: 80rem;
    }
    
    @media (orientation: landscape) {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(4, 1fr);
        min-height: 20rem;
    }
    
    @media ${device.desktop} {
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        min-height: 50rem;
        max-width: 100rem;
    }
`;
