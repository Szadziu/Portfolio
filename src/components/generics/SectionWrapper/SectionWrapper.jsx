import * as P from "./parts";

const SectionWrapper = ({ children, gradient, bgColor }) => {
  return (
    <P.Wrapper gradient={gradient} bgColor={bgColor}>
      {children}
    </P.Wrapper>
  );
};

export default SectionWrapper;
