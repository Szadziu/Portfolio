import { motion} from 'framer-motion';
import * as P from './skillDescriptionDialog.parts';

const SkillDescriptionDialog = ({currIndex, closeModal, skill: {name, desc, id}}) => {
    const oneOfTheLast = currIndex > 4;

    return (
        <P.InfoModal
            id={id}
            initial={{opacity: 0, x: -200}}
            animate={{
                opacity: 1,
                x: 0,
            }}
            onClick={(e) => e.stopPropagation()}
            as={motion.div}
            layout="position"
            oneOfTheLast={oneOfTheLast}>
            <P.ModalWrapper>
                <P.ModalTitle>{name}</P.ModalTitle>
                <P.ModalDescription>{desc}</P.ModalDescription>
            </P.ModalWrapper>
            <P.CloseButton onClick={closeModal}>zamknij</P.CloseButton>
        </P.InfoModal>
    );
};

export default SkillDescriptionDialog;
