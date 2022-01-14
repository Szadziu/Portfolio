import styled from 'styled-components';
import floatingIcon from '../../assets/upArrow.png';

export const Button = styled.button`
  position: fixed;
  opacity: ${({ visible }) => visible || 0};
  bottom: 2vw;
  right: 2vw;
  background-image: url(${floatingIcon});
  background-size: contain;
  background-repeat: no-repeat;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  cursor: ${({ visible }) => visible && 'pointer'};
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;
