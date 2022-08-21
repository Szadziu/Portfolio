import styled from 'styled-components';

export const Spinner = styled.div`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    border: 1px solid;
    border-color: #fff #fff transparent transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;

    &::after,
    &::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: 1px solid;
        border-color: transparent transparent
            ${({ theme }) => `${theme.mint_300} ${theme.mint_300}`};
        width: 20px;
        height: 20px;
        border-radius: 50%;
        box-sizing: border-box;
        animation: rotationBack 0.5s linear infinite;
        transform-origin: center center;
    }

    &::before {
        width: 16px;
        height: 16px;
        border-color: ${({ theme }) => `${theme.pink_300} ${theme.pink_300}`}
            transparent transparent;
        animation: rotation 1.5s linear infinite;
    }

    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes rotationBack {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
`;
