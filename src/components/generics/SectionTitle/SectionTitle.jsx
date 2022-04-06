import * as P from './sectionTitle.parts';

const SectionTitle = ({ children, color }) => {
  return (
    <div style={{ gridArea: '1/1/5/12' }}>
      <P.Title color={color}>{children}</P.Title>
    </div>
  );
};

export default SectionTitle;
