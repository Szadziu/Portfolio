import styled from 'styled-components';
import { device } from '../../constants/devices';

export const ProjectsSectionTitle = styled.h1`
    grid-area: 1/1/2/13;
    width: 60%;

    border-width: 1.5px 0;
    border-style: solid;
    border-color: ${({ color }) => color};
    margin: 40px auto 0;
    padding: 5px 0;

    font-size: 16px;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;

    color: ${({ color }) => color};
    max-width: 400px;

    @media ${device.mobileM} {
        font-size: 18px;
    }
    @media ${device.mobileL} {
        font-size: 20px;
    }
    @media ${device.desktop} {
        font-size: 22px;
    }
`;

export const ProjectsWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(2, 1fr);

    justify-items: center;
    align-items: center;

    border: 1px solid black;

    grid-area: 3/2/12/12;

    @media ${device.mobileM} {
        grid-template-rows: repeat(2, 1fr);
        grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.desktop} {
        grid-area: 3/3/11/11;
    }
`;
