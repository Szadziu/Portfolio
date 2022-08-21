import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const ModalWrapper = styled.div`
    height: 95%;
    padding-right: ${({ theme }) => theme.padding.m};
    overflow-y: auto;

    & :first-child {
        padding-bottom: ${({ theme }) => theme.padding.m};

        font-weight: 400;
    }

    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.gray_200};
    }

    &::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.gray_300};
    }

    &::-webkit-scrollbar-thumb:hover {
        background: ${({ theme }) => theme.gray_400};
    }
`;

export const InfoModal = styled.div`
    position: absolute;
    top: 100%;
    right: 0;
    z-index: 1;

    overflow: auto;

    width: 95vw;
    max-width: 250px;
    height: 500%;
    padding: ${({ theme }) => `${theme.padding.xl} ${theme.padding.m}`};
    box-shadow: 2px 2px 5px 0 ${({ theme }) => theme.black};

    background-color: ${({ theme }) => theme.gray_500};
    color: ${({ theme }) => theme.white};

    font-size: ${({ theme }) => theme.fontSize.m};
    hyphens: auto;

    @media ${device.mobileL} {
        top: -25px;
        left: -380px;
        max-width: 320px;
    }

    @media ${device.desktop} {
        height: 250px;
    }

    @media ${device.desktopFHD} {
        font-size: ${({ theme }) => theme.padding.xl};
        max-width: 650px;
        left: -125%;
    }
`;
