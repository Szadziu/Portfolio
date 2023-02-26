import styled from 'styled-components';
import { device } from '../../../constants/devices';

// export const PlayButton = styled.button`
//     border-radius: 50%;
//     background-color: red;
//     width: 50px;
//     height: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

export const PlayButton = styled.a`
    display: inline-block;
    width: 110px;
    height: 110px;
    cursor: pointer;

    background: center / contain url(${({icon}) => icon});

    transition: 0.3s;

    @media ${device.desktop} {
        &:hover {
            transform: scale(1.2);
        }
    }
`;

export const PlayIcon = styled.i`
    font-size: 20px;
    color: #333;
`;

export const VideoPlayerContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: ${({isVisible}) => isVisible && '100%'};
    position: ${({isVisible}) => (isVisible ? 'absolute' : 'relative')};
    background-color: ${({theme, isVisible}) => isVisible && theme.black};
    pointer-events: all;
    `;

export const VideoPlayer = styled.video`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    height: 80%;
`;
