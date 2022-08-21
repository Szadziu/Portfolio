import * as P from './infoBubble.parts';

const InfoBubble = ({ skill: { name, desc, id } }) => {
    return (
        <P.InfoModal id={id}>
            <P.ModalWrapper>
                <p>{name}</p>
                <p>{desc}</p>
            </P.ModalWrapper>
        </P.InfoModal>
    );
};

export default InfoBubble;
