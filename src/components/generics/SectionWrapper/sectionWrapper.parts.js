import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(12, 1fr);
    overflow: hidden;

    height: 100vh;
    min-height: ${({minHeight}) => minHeight}px;
    max-height: ${({maxHeight}) => maxHeight}px;
    min-width: 33rem;
    max-width: 160rem;

    box-shadow: 0 0 .3rem .1rem ${({theme}) => theme.black_20};
    margin: 0 auto;

    background-color: ${({bgColor}) => bgColor};

    transition: 0.8s;
`;
