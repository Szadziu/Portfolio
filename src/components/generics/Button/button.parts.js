import styled from 'styled-components';
import { Link } from 'react-scroll';
import { device } from '../../../constants/devices';
import { Flex } from '../../../styles/Mixins';

export const Button = styled(Link)`
    position: relative;

    ${Flex()};

    width: 100%;
    max-width: 300px;
    height: 70px;

    border-radius: ${({ theme }) => theme.borderRadius.s};
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.black_20};

    background-color: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.black};

    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 300;

    cursor: pointer;
    user-select: none;

    &::before {
        position: absolute;
        top: 0;
        left: 0;

        width: 5px;
        height: 100%;

        border-radius: 1px;
        box-shadow: 0 0 1px 1px ${({ theme }) => theme.black};

        background-color: ${({ theme }) => theme.mint_300};

        transition: 0.5s;
        content: '';
    }

    @media ${device.mobileM} {
        font-size: ${({ theme }) => theme.fontSize.xl};
    }

    @media ${device.mobileL} {
        height: 20%;
    }

    @media ${device.desktop} {
        &:hover {
            background-color: ${({ theme }) => theme.beige_20};
            &::before {
                top: calc(50% - 5px);
                left: calc(100% - 30px);

                width: 10px;
                height: 10px;
                transform: rotate(1.125turn);
            }
        }
    }
`;
