import styled, {css} from 'styled-components';
import {Link} from 'react-scroll';
import {device} from '../../../constants/devices';
import {Flex} from '../../../styles/Mixins';

const ButtonStyles = css`
    position: relative;

    ${Flex()};

    min-width: 160px;
    width: 100%;
    max-width: 300px;
    height: 12%;

    border-radius: ${({theme}) => theme.borderRadius.s};
    box-shadow: 0 0 1px 1px ${({theme}) => theme.black_20};

    background-color: ${({theme}) => theme.white};
    color: ${({theme}) => theme.black};

    font-size: ${({theme}) => theme.fontSize.xs};
    letter-spacing: 2px;
    text-transform: uppercase;

    cursor: pointer;
    user-select: none;

    &::before {
        position: absolute;
        top: 0;
        left: 0;

        width: 5px;
        height: 100%;

        border-radius: 1px;
        box-shadow: 0 0 1px 1px ${({theme}) => theme.black};

        background-color: ${({theme}) => theme.mint_300};

        transition: 0.5s;
        content: '';
    }

    @media ${device.mobileM} {
        height: 20%;
        font-size: ${({theme}) => theme.fontSize.m};
    }

    @media ${device.desktop} {
        font-size: ${({theme}) => theme.fontSize.l};

        &:hover {
            background-color: ${({theme}) => theme.beige_20};
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

export const StyledButton = styled(Link)`
    ${ButtonStyles}
`;

export const LinkButton = styled.a`
    ${ButtonStyles}
    text-decoration: none;
`;
