import * as P from './infoBubble.parts';

const InfoBubble = ({ skill: { name, desc, id } }) => {
  return (
    <P.InfoModal id={id}>
      <P.ModalWrapper
        style={{ height: '95%', overflowY: 'auto', paddingRight: '10px' }}
      >
        <p style={{ fontWeight: 400, paddingBottom: '10px' }}>{name}</p>
        <p>{desc}</p>
      </P.ModalWrapper>
    </P.InfoModal>
  );
};

export default InfoBubble;
