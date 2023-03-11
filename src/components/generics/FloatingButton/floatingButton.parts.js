import styled from 'styled-components';
import { device } from '../../../constants/devices';
import floatingIcon from '../../../assets/upArrow.png';

export const Button = styled.button`
    position: fixed;
    z-index: 2;
    right: ${({ xOffset }) => xOffset}px;
    bottom: 1rem;

    width: 4.8rem;
    height: 4.8rem;
    opacity: ${({ visible }) => visible || 0};
    border-radius: 50%;

    background: center / contain no-repeat url(${floatingIcon});

    transition: opacity 0.3s, transform 0.3s;
    cursor: ${({ visible }) => visible && 'pointer'};

    @media ${device.mobileM} {
        width: 6.4rem;
        height: 6.4rem;
    }
    @media ${device.desktop} {
        bottom: 2rem;

        width: 8rem;
        height: 8rem;

        &:hover {
            transform: scale(1.2);
        }
    }
    @media ${device.desktopFHD} {
        bottom: 3.2rem;

        width: 10rem;
        height: 10rem;
    }
`;
