import * as P from "./sectionWrapper.parts";

const SectionWrapper = ({ children, bgColor, ...restProps }) => {
  return (
    <P.Wrapper bgColor={bgColor} {...restProps}>
      {children}
    </P.Wrapper>
  );
};

export default SectionWrapper;
