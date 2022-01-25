import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  height: 100vh;
  max-width: 2500px;
  box-shadow: 0 0 12px 0 ${({ theme }) => theme.black};
  overflow: hidden;
  margin: 0 auto;

  background-color: ${({ bgColor }) => bgColor};

  transition: 0.8s;
`;
