import { useRef, useEffect, useContext } from "react";
import * as P from "./parts";
import { buttonAnimation } from "../../animations/buttonAnimation";
import { THEME } from "../../constants";
import { BackgroundContext } from "../App/App";
import { homePageButtonLoadAnimation } from "../../animations/homePageButtonLoadAnimation";
import {
  startAnimationSetup,
  endAnimationSetup,
} from "../../styles/setupsAnimations";

const HomePageButton = () => {
  const { setColor } = useContext(BackgroundContext);
  const homePageButton = useRef(null);

  useEffect(() => {
    homePageButtonLoadAnimation(homePageButton);
  }, []);

  // homePageButton ma zastosowaną troszkę inną metodę używania animacji niż pozostałe trzy buttony, właściwie wyszło to przypadkiem, ale może któryś jest lepszy/gorszy to też zostawiam do oceny troszkę inną implementację.
  return (
    <P.Button
      onMouseEnter={() =>
        buttonAnimation(
          homePageButton,
          setColor,
          startAnimationSetup,
          THEME.darkenedBackground
        )
      }
      onMouseLeave={() => {
        buttonAnimation(
          homePageButton,
          setColor,
          endAnimationSetup,
          THEME.mainGradient
        );
      }}
      ref={homePageButton}
    >
      homePage
    </P.Button>
  );
};

export default HomePageButton;
