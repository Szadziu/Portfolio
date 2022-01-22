import styled from 'styled-components';

export const SkillContainer = styled.div`
  grid-area: 2/13/11/9;
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 0 10px 3px ${({ theme }) => theme.mint};
`;

export const InfoIconLink = styled.button`
  cursor: pointer;
  color: ${({ theme }) => theme.blue};
  margin-right: 5px;
`;

export const SkillTitle = styled.p`
  width: 100%;
  font-size: 0.8rem;
  /* margin-bottom: 10px; */
`;

export const SkillAdvancementInfo = styled.p`
  width: 80%;
  display: flex;
  justify-content: space-around;
  margin-right: 10px;
  font-size: 0.8rem;
`;

// export const SkillsList = styled.div`
//   position: relative;
/* background-color: red; */
// `;
