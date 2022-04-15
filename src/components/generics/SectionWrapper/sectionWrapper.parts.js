import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(12, 1fr);
  overflow: hidden;

  height: 100vh;
  max-width: 1600px;

  box-shadow: 0 0 3px 1px ${({ theme }) => theme.dimBackground};
  margin: 0 auto;

  background-color: ${({ bgColor }) => bgColor};
  background-image: url(${({ image }) => image});
  background-repeat: no-repeat;
  background-size: 112.5vh 150vh;
  background-position: -56.25vh 0;

  transition: 0.8s;
`;
