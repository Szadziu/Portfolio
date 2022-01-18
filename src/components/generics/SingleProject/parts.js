import styled from 'styled-components';

export const Project = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  width: 26%;
  height: 26%;
  text-align: center;
  color: ${({ theme }) => theme.white};
  letter-spacing: 2px;
  -webkit-text-stroke: 2px ${({ theme }) => theme.white};
  text-decoration: none;
  text-transform: uppercase;
  background-image: url(${({ thumbnail }) => thumbnail});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  transition: 0.5s;
  filter: grayscale(100%);

  &:hover {
    cursor: pointer;
    border: 4px solid black;
    box-shadow: 0 0 0 10px ${({ theme }) => theme.mint}, 0 0 0 14px black,
      0 0 10rem 100px black;
    border-radius: 50%;
    transform: scale(1.5) rotate(1turn);
    z-index: 10;
    filter: grayscale(0);
    font-size: 1rem;
    &::before {
      position: absolute;
      z-index: -1;
      content: '';
      width: 95%;
      height: 30%;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 30px;
    }
  }
`;
