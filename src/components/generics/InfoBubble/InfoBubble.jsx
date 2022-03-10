import * as P from "./infoBubble.parts";

const InfoBubble = ({ description, id }) => {
  return <P.InfoModal id={id}>{description}</P.InfoModal>;
};

export default InfoBubble;
