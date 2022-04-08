import * as P from './infoBubble.parts';

const InfoBubble = ({ skill: { name, desc, id } }) => {
  return (
    <P.InfoModal id={id}>
      <p style={{ fontWeight: 400 }}>{name}</p>
      <p>{desc}</p>
    </P.InfoModal>
  );
};

export default InfoBubble;
