import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  bottom: 20px;
  color: ${({ theme }) => theme.pink};
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  align-self: flex-start;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  &:hover {
    color: ${({ theme }) => theme.brighterPink};
  }
`;
