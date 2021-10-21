import styled from "styled-components";

export const ProjectDesc = styled.p`
  color: white;
  width: 40%;
  height: 60%;
`;

export const PhotoOfProject = styled.img`
  height: 50%;
  border: 3px solid white;
`;

export const CloseButton = styled.button`
  font-size: 2rem;
  position: absolute;
  right: 10px;
  top: 10px;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  width: 80%;
  height: 10%;
  color: white;
  font-size: 2rem;
  border-bottom: white solid 2px;
`;

export const ProjectModal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background-image: ${({ theme }) => theme.redBlueGradient};
  border: 5px solid white;
  width: 50%;
  height: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const OverlayWrapper = styled.div`
  background-color: black;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
`;
