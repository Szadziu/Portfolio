import * as P from './infoBubble.parts';

const InfoBubble = ({ skill: { name, desc, id } }) => {
  return (
    <P.InfoModal id={id}>
      <div style={{ height: '95%', overflowY: 'scroll' }}>
        <p style={{ fontWeight: 400, paddingBottom: '10px' }}>{name}</p>
        <p>{desc}</p>
      </div>
    </P.InfoModal>
  );
};

export default InfoBubble;
