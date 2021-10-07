import * as P from "./parts";

const SectionWrapper = ({ children, bgColor = "rgb(200, 200, 200)" }) => {
  return <P.Wrapper bgColor={bgColor}>{children}</P.Wrapper>;
};

export default SectionWrapper;
