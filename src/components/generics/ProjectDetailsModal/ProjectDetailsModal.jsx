import React, {useContext, useRef} from 'react';
import {ProjectsContext} from '../../../contexts/ProjectsContext';
import gsap from 'gsap';
import {motion, AnimatePresence} from 'framer-motion';
import githubIcon from '../../../assets/github.png';
import liveIcon from '../../../assets/live.png';
import underConstructionIcon from '../../../assets/projectsIcons/underConstruction.png';
import * as P from './projectDetailsModal.parts';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import TechnologyTag from '../TechnologyTag';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';

const ProjectDetailsModal = () => {
    const {isModalOpen, setIsModalOpen, currentProject} = useContext(ProjectsContext);
    const modalRef = useRef();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const isDesktop = useMediaQuery({minWidth: 1024})

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    const closeModal = async () => {
        await gsap.to(modalRef.current, {
            duration: 0.3,
            // scale: 0,
            // opacity: 0.5,
            x: '-100vw',
            // y: '50vh',
        });
        setIsModalOpen(false);
        document.querySelector('body').style.overflow = 'auto';
    };

    const renderTechnologyTags = () => currentProject.techTags.map((tag) => <TechnologyTag key={tag}>{tag}</TechnologyTag>);

    return (
        <AnimatePresence>
            {isModalOpen && (
                <>
                    <P.Overlay key={0} onClick={closeModal}></P.Overlay>
                    <P.Modal
                        key={1}
                        as={motion.div}
                        ref={modalRef}
                        initial={{opacity: 0, left: '-100vw'}}
                        transition={{duration: 0.3}}
                        animate={{opacity: 1, left: isDesktop && windowWidth >= 1024 ? '50%' : 0, behavior: 'ease-out-in'}}
                        exit={{opacity: 0, left: '-100vw'}}
                        >
                        <P.ProjectHeader>
                            <P.ProjectTitle className="title">{currentProject.name}</P.ProjectTitle>
                            <P.CloseButton onClick={closeModal} />
                        </P.ProjectHeader>
                        {currentProject.demo && <VideoPlayer src={currentProject.demo} />}
                        <P.ProjectPreviewSection>
                            {currentProject.link !== '#' && (
                                <P.Icon icon={liveIcon} alt="live project link" target="_blank" href={currentProject.link} />
                            )}
                            {currentProject.ghLink !== '#' && (
                                <P.Icon icon={githubIcon} alt="github link" target="_blank" href={currentProject.ghLink} />
                            )}
                            {!currentProject.done && <P.UCBadge src={underConstructionIcon} />}
                        </P.ProjectPreviewSection>
                        <P.ProjectDescription>{currentProject.desc}</P.ProjectDescription>
                        <P.TechnologyTagsContainer>{renderTechnologyTags()}</P.TechnologyTagsContainer>
                    </P.Modal>
                </>
            )}
        </AnimatePresence>
    );
};

export default ProjectDetailsModal;
