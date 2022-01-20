import styled from 'styled-components';

export const Img = styled.img`
  margin-left: 10px;
  width: auto;
  height: 40px;
  transition: 0.4s;
  &:hover {
    cursor: pointer;
    transform: scale(1.7);
  }
`;

export const Banner = styled.div`
  position: absolute;
  bottom: 10vh;
  left: -60vw;
  width: 60vw;
  height: 10vh;
  background-color: skyblue;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SocialLink = styled.a``;
