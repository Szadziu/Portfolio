import React, {useContext, useRef} from 'react';
import {ProjectsContext} from '../../../contexts/ProjectsContext';
import gsap from 'gsap';
import {motion, AnimatePresence} from 'framer-motion';
import githubIcon from '../../../assets/github.png';
import liveIcon from '../../../assets/live.png';
import underConstructionIcon from '../../../assets/projectsIcons/underConstruction.png';
import * as P from './projectDetailsModal.parts';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const ProjectDetailsModal = () => {
    const {isModalOpen, setIsModalOpen, currentProject} = useContext(ProjectsContext);
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
            <P.Overlay key={0} onClick={closeModal}></P.Overlay>
            {isModalOpen && (
                <P.Modal
                    key={1}
                    as={motion.div}
                    ref={modalRef}
                    initial={{opacity: 0}}
                    transition={{duration: 0.3}}
                    animate={{opacity: 1, left: '50%'}}
                    exit={{opacity: 0}}>
                    <P.ProjectTitle className="title">{currentProject.name}</P.ProjectTitle>
                    <P.CloseButton onClick={closeModal} />
                    {currentProject.demo && <VideoPlayer src={currentProject.demo} />}
                    {currentProject.link !== '#' && <P.Icon icon={liveIcon} alt="live project link" target="_blank" href={currentProject.link} />}
                    {currentProject.ghLink !== '#' && <P.Icon icon={githubIcon} alt="github link" target="_blank" href={currentProject.ghLink} />}
                    {!currentProject.done && <P.UCBadge src={underConstructionIcon} />}
                    <P.ProjectDescription>{currentProject.desc}</P.ProjectDescription>
                </P.Modal>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailsModal;
