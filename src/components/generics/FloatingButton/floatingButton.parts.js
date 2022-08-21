import styled from 'styled-components';
import { device } from '../../../constants/devices';
import floatingIcon from '../../../assets/upArrow.png';

export const Button = styled.button`
    position: fixed;
    z-index: 2;
    right: ${({ xOffset }) => xOffset}px;
    bottom: 10px;

    width: 48px;
    height: 48px;
    opacity: ${({ visible }) => visible || 0};
    border-radius: 50%;

    background: center / contain no-repeat url(${floatingIcon});

    transition: opacity 0.3s, transform 0.3s;
    cursor: ${({ visible }) => visible && 'pointer'};

    @media ${device.mobileM} {
        width: 64px;
        height: 64px;
    }
    @media ${device.desktop} {
        bottom: 20px;

        width: 80px;
        height: 80px;

        &:hover {
            transform: scale(1.2);
        }
    }
    @media ${device.desktopFHD} {
        bottom: 32px;

        width: 100px;
        height: 100px;
    }
`;
