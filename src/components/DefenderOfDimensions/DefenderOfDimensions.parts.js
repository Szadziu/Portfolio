import styled from 'styled-components';
import { Flex } from '../../styles/Mixins';

export const Defender = styled.div`
    position: fixed;
    z-index: 100rem;

    ${Flex()};
    height: 100vh;
    width: 100vw;
    padding: 0 ${({ theme }) => theme.padding.xl};

    background-color: ${({ theme }) => theme.blue_300};
    color: ${({ theme }) => theme.white};

    font-size: ${({ theme }) => theme.fontSize.xl};
    text-align: center;
    text-transform: uppercase;
`;
