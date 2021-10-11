import { THEME } from "../constants";

export const colorOfSkillAdvancement = (level) => {
  switch (level) {
    case 1:
    case 2:
    case 3:
      return THEME.darkOrange;
    case 4:
    case 5:
    case 6:
    case 7:
      return THEME.yellow;
    case 8:
    case 9:
    case 10:
      return THEME.green;
    default:
      console.log("Value is not valid");
  }
};
