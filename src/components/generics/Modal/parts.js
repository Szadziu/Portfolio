import styled from 'styled-components';

export const ProjectDesc = styled.p`
  color: ${({ theme }) => theme.white};
  width: 60%;
  height: 60%;
  margin-left: 5%;
  font-size: 0.9rem;
  line-height: 1.5rem;
  overflow: scroll;
  overflow-x: hidden;
  text-align: justify;
  padding-right: 15px;

  &::-webkit-scrollbar {
    width: 1em;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    outline: 1px solid slategrey;
  }
`;

export const PhotoOfProject = styled.img`
  height: 100%;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-bottom: 3px solid transparent;
  transition: 0.5s;
  padding-bottom: 10px;
  cursor: pointer;
  &:hover {
    border-color: gold;
  }
`;

export const ProjectLink = styled.a`
  margin-left: 5%;
  height: 60%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 2rem;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const Title = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  width: 80%;
  height: 10%;
  color: white;
  font-size: 2rem;
  border-bottom: ${({ theme }) => theme.white} solid 2px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectModal = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: ${({ theme }) => theme.darkGray};
  border: 5px solid white;
  border-radius: 20px;
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
