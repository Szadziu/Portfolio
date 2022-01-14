import styled from 'styled-components';

export const BadgesList = styled.ul``;

export const Badge = styled.li`
  width: 150px;
  height: 30px;
  margin: 10px;
  background-image: url(${({ link }) => link});
  background-size: contain;
  background-repeat: no-repeat;
`;
