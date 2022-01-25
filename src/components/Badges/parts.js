import styled from 'styled-components';

export const BadgesList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  grid-area: 11/11/13/13;
`;

export const Item = styled.li`
  width: 100%;
  height: 30%;
`;

export const Badge = styled.a`
  display: inline-block;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 5px 3px ${({ theme }) => theme.mint};
  border-radius: 20px 0 0 20px;

  background: center/contain no-repeat url(${({ image }) => image});
  background-color: ${({ theme }) => theme.white};
`;
