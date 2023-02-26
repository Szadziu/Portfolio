import styled from 'styled-components';
import { device } from '../../../constants/devices';

export const TextAreaField = styled.textarea`
    width: 100%;
    flex-grow: 1;
    border: none;
    border-bottom: ${({ error, theme }) =>
        error ? `1px solid ${theme.pink_300}` : `1px solid ${theme.gray_400}`};

    background: none;
    color: ${({ theme }) => theme.gray_200};

    font-size: ${({ theme }) => theme.fontSize.s};
    letter-spacing: ${({ theme }) => theme.letterSpacing.s};
    outline: none;
    padding-top: ${({ theme }) => theme.padding.s};
    font-family: inherit;

    transition: 0.4s;
    resize: none;

    &::placeholder {
        color: ${({ theme }) => theme.gray_400};
    }

    &:focus {
        border-bottom-color: ${({ theme }) => theme.gray_200};
    }

    @media ${device.desktop} {
        font-size: ${({ theme }) => theme.fontSize.l};
    }
`;

export const TextAreaWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;

    /* border: 1px solid blue; */

    width: 100%;
    height: 40%;
    max-height: 200px;
`;
