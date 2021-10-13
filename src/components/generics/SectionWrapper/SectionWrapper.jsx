import * as P from "./parts";

const SectionWrapper = ({ children, bgColor }) => {
  return <P.Wrapper bgColor={bgColor}>{children}</P.Wrapper>;
};

export default SectionWrapper;
