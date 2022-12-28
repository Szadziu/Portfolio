import * as P from './skillTooltip.parts';

const SkillTooltip = ({ skill: { name, desc, id } }) => {
    return (
        <P.InfoModal id={id}>
            <P.ModalWrapper>
                <p>{name}</p>
                <p>{desc}</p>
            </P.ModalWrapper>
        </P.InfoModal>
    );
};

export default SkillTooltip;
