import React, { useEffect, useRef, useState } from 'react';
import { FaMicrophone, FaMicrophoneSlash, FaVideo, FaVideoSlash } from "react-icons/fa";

const VideoConatiner = (props) => {
    const userVideo = useRef();
    const [showVideo, setShowVideo] = useState(false);
    const [showAudio, setShowAudio] = useState(false);

    useEffect(() => {
        if (props.stream) {
            if (userVideo.current) {
                userVideo.current.srcObject = props.stream;
            }
        }
    }, [props.stream]);

    const micHandler = () => {
        const audioTrack = props.stream.getTracks().find(track => track.kind === 'audio');
        if (audioTrack.enabled) {
            // show camera
            audioTrack.enabled = false;
            setShowAudio(true);
        } else {
            audioTrack.enabled = true;
            // hide camera
            setShowAudio(false);
        }
    }

    const videoHandler = () => {
        const videoTrack = props.stream.getTracks().find(track => track.kind === 'video');
        if (videoTrack.enabled) {
            // show camera
            videoTrack.enabled = false;
            setShowVideo(true);
        } else {
            videoTrack.enabled = true;
            // hide camera
            setShowVideo(false);
        }
    }

    const micOnComponent = (<button type="button" onClick={micHandler}><FaMicrophone /></button>);
    const micOffComponent = (<button type="button" onClick={micHandler}><FaMicrophoneSlash /></button>);
    const videoOnComponent = (<button type="button" onClick={videoHandler}><FaVideo /></button>);
    const videoOffComponent = (<button type="button" onClick={videoHandler}><FaVideoSlash /></button>);

    return (
        <div className="col col-md">
            <div className="card mt-3">
                <video className='video-style' playsInline muted ref={userVideo} autoPlay />
                <div className="card-body">
                    <h5 className="card-title h5">Your Name: </h5>
                    <p className="card-text">{props.username}</p>
                </div>
                <div className="card-footer d-flex justify-content-center">
                    {!showAudio && micOnComponent}
                    {showAudio && micOffComponent}
                    {!showVideo && videoOnComponent}
                    {showVideo && videoOffComponent}
                </div>
            </div>
        </div>
    )
}

export default VideoConatiner;