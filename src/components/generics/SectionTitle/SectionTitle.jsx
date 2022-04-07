import * as P from './sectionTitle.parts';

const SectionTitle = ({ children, color }) => {
  return <P.Title color={color}>{children}</P.Title>;
};

export default SectionTitle;
