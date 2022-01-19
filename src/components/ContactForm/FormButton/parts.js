import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 100px;
  color: ${({ theme }) => theme.pink};
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
