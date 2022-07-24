import styled from 'styled-components';
import SectionWrapper from '../generics/SectionWrapper';

export const LandingPageView = styled(SectionWrapper)`
    & .lines {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100%;
        margin: auto;
        width: 90vw;
    }

    & .line {
        position: absolute;
        width: 1px;
        height: 100%;
        top: 0;
        left: 50%;
        background: rgba(255, 255, 255, 0.1);
        overflow: hidden;
        filter: blur(2px);

        &::after {
            content: '';
            display: block;
            position: absolute;
            height: 15vh;
            width: 100%;
            top: -50%;
            left: 0;
            background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0) 0%,
                #000 75%,
                #000 100%
            );
            animation: drop 7s 0s infinite;
            animation-fill-mode: forwards;
            animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
        }

        &:nth-child(1) {
            margin-left: -25%;
            &::after {
                animation-delay: 2s;
            }
        }

        &:nth-child(3) {
            margin-left: 25%;
            &::after {
                animation-delay: 2.5s;
            }
        }
    }

    @keyframes drop {
        0% {
            top: -50%;
        }
        100% {
            top: 110%;
        }
    }
`;

export const NavWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-end;
    grid-area: 1/13/13/6;
`;

export const NavButtonsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    width: 100%;
    height: 310px;
`;

export const PositionTitle = styled.span`
    display: block;

    width: 120px;
    height: 90px;
    padding: 20px 5px;
    border-left: 1px solid ${({ theme }) => theme.black};
    border-bottom: 2px solid ${({ theme }) => theme.black};

    line-height: 18px;
    text-align: right;
    text-transform: uppercase;

    color: ${({ theme }) => theme.black};
`;
export const BackgroundPhoto = styled.div`
    position: absolute;

    width: 100%;
    height: 100%;

    background-image: url(${({ image }) => image});
    background-repeat: no-repeat;
    background-size: 112.5vh 150vh;
    background-position: -56.25vh 0;
`;
