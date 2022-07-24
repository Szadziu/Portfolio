import styled from 'styled-components';
import { device } from '../../constants/devices';

export const FooterSectionTitle = styled.h1`
    grid-area: 1/1/2/13;
    width: 60%;

    border-width: 1.5px 0;
    border-style: solid;
    border-color: ${({ color }) => color};
    margin: 20px auto;
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
