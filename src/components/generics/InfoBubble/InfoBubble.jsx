import * as P from './parts';

const InfoBubble = ({ description, id }) => {
  return <P.InfoModal id={id}>{description}</P.InfoModal>;
};

export default InfoBubble;
