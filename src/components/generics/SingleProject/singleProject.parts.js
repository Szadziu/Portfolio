import styled from 'styled-components';

import { device } from '../../../constants/devices';

export const Project = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .ch-item {
        width: 30vw;
        max-width: 120px;
        height: 30vw;
        max-height: 120px;
        border-radius: 50%;
        position: relative;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        cursor: pointer;

        @media ${device.desktop} {
            max-width: 180px;
            max-height: 180px;
        }
    }

    & .ch-info-wrap {
        position: absolute;
        width: 30vw;
        max-width: 120px;
        height: 30vw;
        max-height: 120px;
        border-radius: 50%;
        perspective: 800px;
        transition: all 0.4s ease-in-out;
        top: 0;
        left: 0;
        /* background: #f9f9f9 center / contain no-repeat
            url(${({ thumbnail }) => thumbnail}); */
        background-color: white;
        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.2),
            inset 0 0 3px rgba(115, 114, 23, 0.8);

        @media ${device.desktop} {
            max-width: 180px;
            max-height: 180px;
        }
    }

    & .ch-info {
        position: absolute;
        width: 30vw;
        max-width: 120px;
        height: 30vw;
        max-height: 120px;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        transform-style: preserve-3d;

        @media ${device.desktop} {
            max-width: 180px;
            max-height: 180px;
        }
    }

    & .ch-info > div {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-position: center center;
        backface-visibility: hidden;
    }

    & .ch-info .ch-info-back {
        display: flex;
        justify-content: center;
        align-items: center;
        transform: rotate3d(0, 1, 0, 180deg);
        background: #000;
    }

    & .ch-img-1 {
        background: center / contain no-repeat
            url(${({ thumbnail }) => thumbnail});
    }

    & .ch-info h3 {
        color: #fff;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 10px;
        margin: 0 15px;
        padding-bottom: 5px;
        font-family: 'Montserrat', Arial, sans-serif;
        font-weight: 300;
        text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);

        border-bottom: 1px solid white;

        @media ${device.desktop} {
            font-size: 14px;
        }
    }
    @media ${device.desktop} {
        & .ch-item:hover .ch-info-wrap {
            box-shadow: 0 0 0 0 rgba(220, 220, 220, 0.8),
                inset 0 0 3px rgba(115, 114, 23, 0.8);
        }

        & .ch-item:hover .ch-info {
            transform: rotate3d(0, 1, 0, -180deg);
        }
    }
`;

export const TitleOfProject = styled.h3`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
    box-shadow: 0 0 0.5px 0.5px ${({ theme }) => theme.black};
    padding: 0.3rem;
    margin-top: 10px;

    background-color: ${({ theme }) => theme.white};
    color: black;

    font-size: 0.6rem;
    font-weight: 300;
    font-family: 'Lato', 'sans-serif';

    @media ${device.mobileM} {
        font-size: 0.7rem;
    }
    @media ${device.desktop} {
        display: none;
    }
`;
