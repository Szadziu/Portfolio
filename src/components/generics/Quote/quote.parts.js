import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const QuoteParam = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: 12/2/13/12;
    opacity: 0;
    padding: 20px 0;

    color: ${({ theme }) => theme.pink};

    font-style: italic;
    font-size: 16px;

    @media ${device.mobileM} {
        font-size: 18px;
    }

    @media ${device.desktop} {
        font-size: 20px;
    }
`;
