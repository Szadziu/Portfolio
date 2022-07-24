import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const Title = styled.h1`
    justify-self: center;
    align-self: center;
    width: 100%;

    border-width: 1.5px 0;
    border-style: solid;
    border-color: ${({ color }) => color};
    margin: 20px 0 15px;
    padding: 5px 0;

    font-size: 1.2rem;
    font-weight: 300;
    text-align: center;
    text-transform: uppercase;

    color: ${({ color }) => color};
`;
