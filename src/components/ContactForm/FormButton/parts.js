import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: 10%;
  color: ${({ theme }) => theme.darkGray};
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  align-self: flex-start;
  padding: 5px;

  &:hover {
    color: #b9134f;
  }
`;
