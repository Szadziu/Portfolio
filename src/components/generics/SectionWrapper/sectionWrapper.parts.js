import styled from 'styled-components';

export const Wrapper = styled.div`
    position: relative;

    display: grid;
    grid-template-rows: repeat(12, 1fr);
    grid-template-columns: repeat(12, 1fr);
    overflow: hidden;

    height: 100vh;
    /* min-height: ${({ minHeight }) => minHeight}px; */
    max-width: 1600px;

    box-shadow: 0 0 3px 1px ${({ theme }) => theme.black_20};
    margin: 0 auto;

    background-color: ${({ bgColor }) => bgColor};

    transition: 0.8s;
`;
