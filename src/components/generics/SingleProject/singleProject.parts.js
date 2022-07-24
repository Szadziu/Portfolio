import styled from 'styled-components';

import { device } from '../../../constants/devices';

export const Project = styled.button`
    /* position: relative;
    display: flex;
    width: 30vw;
    max-width: 120px;
    height: 30vw;
    max-height: 120px;
    border: 4px solid ${({ theme }) => theme.black};
    border-radius: 50%;

    background: center / contain no-repeat url(${({ thumbnail }) => thumbnail});
    color: ${({ theme }) => theme.white};

    letter-spacing: 1px;
    text-transform: uppercase;

    transition: 0.5s; */

    display: flex;
    flex-wrap: wrap;
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
        background: #f9f9f9 center / contain no-repeat
            url(${({ thumbnail }) => thumbnail});
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
        /* height: 60px; */
        font-family: 'Montserrat', Arial, sans-serif;
        font-weight: 300;
        text-shadow: 0 0 1px #fff, 0 1px 2px rgba(0, 0, 0, 0.3);

        border-bottom: 1px solid white;

        @media ${device.desktop} {
            /* height: 90px; */
            font-size: 14px;
            /* padding: 40px 0 0 0; */
        }
    }
    /* & .ch-info p {
        color: #fff;
        padding: 10px 5px;
        font-style: italic;
        margin: 0 30px;
        font-size: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.5);
    }

    & .ch-info p a {
        display: block;
        color: rgba(255, 255, 255, 0.7);
        font-style: normal;
        font-weight: 300;
        text-transform: uppercase;
        font-size: 9px;
        letter-spacing: 1px;
        padding-top: 4px;
        font-family: 'Montserrat', sans-serif;
    } */
    @media ${device.desktop} {
        & .ch-info p a:hover {
            color: rgba(255, 242, 34, 0.8);
        }

        & .ch-item:hover .ch-info-wrap {
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.8),
                inset 0 0 3px rgba(115, 114, 23, 0.8);
        }

        & .ch-item:hover .ch-info {
            transform: rotate3d(0, 1, 0, -180deg);
        }
    }

    /* @media ${device.mobileL} {
        cursor: pointer;
        max-width: 150px;
        max-height: 150px;
    } */
    /*
    @media ${device.desktop} {
        filter: grayscale(100%);
         -webkit-text-stroke: 1px ${({ theme }) => theme.white};

        &:hover {
            z-index: 1;

            transform: scale(1.4) rotate(1turn);
            box-shadow: 0 0 0 1px ${({ theme }) => theme.mint},
                0 0 0 2px ${({ theme }) => theme.black},
                0 0 1px 2px ${({ theme }) => theme.black};

            filter: grayscale(0);

            h3 {
                font-size: 12px;
                font-weight: 300;
            }

            &::before {
                position: absolute;
                z-index: -1;

                text-align: center;

                width: 100%;
                height: 50px;
                border-radius: 50%;

                background-color: ${({ theme }) => theme.darkenedBackground};

                opacity: 0.4;

                content: '';
            }
        }
    }
    */
    /* @media ${device.desktopFHD} {
        max-width: 200px;
        max-height: 200px;
        &:hover {
            box-shadow: 0 0 0 3px ${({ theme }) => theme.mint},
                0 0 0 5px ${({ theme }) => theme.black},
                0 0 2px 3px ${({ theme }) => theme.black};

            h3 {
                font-size: 1rem;
            }
        }
    } */
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

export const UCBadge = styled.img`
    width: 75%;
    transform: translate(-10%, 50%) rotate(-30deg);

    @media ${device.desktop} {
        transform: translate(-50%, -50%) rotate(-30deg);
        width: 60%;
    }
`;
