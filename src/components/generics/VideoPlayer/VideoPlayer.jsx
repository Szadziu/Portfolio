import React, {useState} from 'react';
import {useRef} from 'react';
import * as P from './videoPlayer.parts';
import playDemoIcon from '../../../assets/playDemo.png';


const VideoPlayer = ({src}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef(null);

    const handleClick = (e) => {
        if (videoRef.current && !videoRef.current.contains(e.target)) {
            setIsVisible(false);
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };
    return (
        <P.VideoPlayerContainer isVisible={isVisible} onClick={handleClick}>
            {!isVisible && (
                <P.PlayButton
                    onClick={() => {
                        setIsPlaying(true);
                        setIsVisible(true);
                    }}
                    icon={playDemoIcon}
                    >
                    <P.PlayIcon className="fa fa-play"></P.PlayIcon>
                </P.PlayButton>
            )}
            {isVisible && (
                <P.VideoPlayer
                    ref={videoRef}
                    src={src}
                    onEnded={() => {
                        setIsPlaying(false);
                        setIsVisible(false);
                    }}
                    controls={isPlaying}
                    width="200"
                    autoPlay
                />
            )}
        </P.VideoPlayerContainer>
    );
};

export default VideoPlayer;
