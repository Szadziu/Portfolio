import styled from 'styled-components';

export const PlayButton = styled.button`
    border-radius: 50%;
    background-color: #fff;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const PlayIcon = styled.i`
    font-size: 20px;
    color: #333;
`;

export const VideoPlayerContainer = styled.div`
    width: 100%;
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
