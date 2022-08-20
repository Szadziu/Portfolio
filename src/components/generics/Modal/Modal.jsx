import React, { useContext, useRef, forwardRef } from 'react';
import * as P from './modal.parts';
import { ProjectsContext } from '../../../contexts/ProjectsContext';
import gsap from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';
import githubIcon from '../../../assets/github.png';
import liveIcon from '../../../assets/live.png';
import underConstructionIcon from '../../../assets/projectsIcons/underConstruction.png';

const Modal = () => {
    const { isModalOpen, setIsModalOpen, currentProject } =
        useContext(ProjectsContext);
    const modalRef = useRef();

    const closeModal = async () => {
        await gsap.to(modalRef.current, {
            duration: 0.5,
            scale: 0,
            opacity: 0.5,
            x: '50vw',
            y: '50vh',
        });
        setIsModalOpen(false);
        document.querySelector('body').style.overflow = 'auto';
    };

    return (
        <AnimatePresence>
            <P.Overlay onClick={closeModal}></P.Overlay>
            {isModalOpen && (
                <P.Modal
                    as={motion.div}
                    ref={modalRef}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    animate={{ opacity: 1, left: '50%' }}
                    exit={{ opacity: 0 }}
                >
                    <P.ProjectTitle className="title">
                        {currentProject.name}
                    </P.ProjectTitle>
                    <P.CloseButton onClick={closeModal} />
                    {currentProject.link !== '#' && (
                        <P.Icon
                            icon={liveIcon}
                            alt="live project link"
                            target="_blank"
                            href={currentProject.link}
                        />
                    )}
                    {currentProject.ghLink !== '#' && (
                        <P.Icon
                            icon={githubIcon}
                            alt="github link"
                            target="_blank"
                            href={currentProject.ghLink}
                        />
                    )}
                    {!currentProject.done && (
                        <P.UCBadge src={underConstructionIcon} />
                    )}
                    <P.ProjectDescription>
                        {currentProject.desc}
                    </P.ProjectDescription>
                </P.Modal>
            )}
        </AnimatePresence>
    );
};

export default Modal;
