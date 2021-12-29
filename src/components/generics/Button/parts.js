import styled, { css } from "styled-components";

const fontSizes = {
  default: "1.5rem",
  small: "1rem",
  medium: "2rem",
  large: "3rem",
};

const buttonsCompositions = {
  mobile: "3/11/4/6",
  desktop: "2/10/4/7",
};

// const setButtonPosition = ({ position }) => {
//   return css`
//     font-size: ${fontSizes[size]};
//   `;
// };
// switch(size){
//   case 'small':
//     return fontSizes.small
//   case 'medium':
//     return fontSizes.medium
//   case 'large':
//     return fontSizes.large
//   default:
//     return fontSizes.default
// }

// switch (size) {
//   case "small":
//     return css`
//       font-size: 1rem;
//     `;
//   case "medium":
//     return css`
//       font-size: 2rem;
//     `;
//   case "large":
//     return css`
//       font-size: 3rem;
//     `;
//   default:
//     return "1.5rem";
// }
// const fontSize = {
//   small: "1rem"
// }
// fontSize.small
// return css`
// font-size: ${fontSize[size]};
// `
//};

export const Button = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 10%;
  border-radius: 10px;
  color: ${({ theme }) => theme.black};
  box-shadow: 0 0 13px 0 black;
  cursor: pointer;

  grid-area: ${buttonsCompositions.mobile};
  font-size: ${fontSizes[fontSizes.small]};

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px;
    transition: 0.8s;
    content: "";
    background-color: orange;
    width: 10px;
    margin-right: 15px;
    height: 100%;
    box-shadow: 0 0 15px 1px black;
  }

  &:hover {
    &::before {
      left: calc(100% - 10px);
      top: 50%;
      height: 5px;
    }
  }
`;
