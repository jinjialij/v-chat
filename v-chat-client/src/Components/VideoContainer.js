import React, { useEffect, useRef, useState } from 'react';

const VideoConatiner = (props) => {
    const userVideo = useRef();
    const [showVideo, setShowVideo] = useState(false);
    const [showAudio, setShowAudio] = useState(false);

    const [volume, setVolume] = useState(userVideo?.current?.volume);

    useEffect(() => {
        if (props.stream) {
            if (userVideo.current) {
                userVideo.current.srcObject = props.stream;
                console.log(userVideo.current.volume)
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
    let volumeIcon;
    switch (userVideo?.current?.volume) {
        case 0:
            volumeIcon = (<i className="bi bi-volume-mute-fill" style={{ fontSize: 30 }}></i>);
            break;
        case 0.25:
            volumeIcon = (<i className="bi bi-volume-off-fill" style={{ fontSize: 30 }}></i>);
            break;
        case 0.5:
            volumeIcon = (<i className="bi bi-volume-down-fill" style={{ fontSize: 30 }}></i>);
            break;
        case 0.75:
        case 1:
            volumeIcon = (<i className="bi bi-volume-up-fill" style={{ fontSize: 30 }}></i>);
            break;
        default:
            volumeIcon = (<i className="bi bi-volume-up-fill" style={{ fontSize: 30 }}></i>);
    }

    const volumeHandler = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        console.log(userVideo.current.volume);
        setVolume(e.target.value);
        userVideo.current.volume = e.target.value;
    }

    const micOnComponent = (<button type="button" className="btn btn btn-outline-dark mx-3" onClick={micHandler}><i className="bi bi-mic-fill" style={{ fontSize: 20 }}></i></button>);
    const micOffComponent = (<button type="button" className="btn btn btn-outline-danger mx-3" onClick={micHandler}><i className="bi bi-mic-mute-fill" style={{ fontSize: 20 }}></i></button>);
    const videoOnComponent = (<button type="button" className="btn btn btn-outline-dark mx-3" onClick={videoHandler}><i className="bi bi-camera-video-fill" style={{ fontSize: 20 }}></i></button>);
    const videoOffComponent = (<button type="button" className="btn btn btn-outline-danger mx-3" onClick={videoHandler}><i className="bi bi-camera-video-off-fill" style={{ fontSize: 20 }}></i></button>);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                </div>
                <div className="col">
                    <div className="card mt-3 border-0 bg-transparent border-0">
                        <video className='video-style' playsInline ref={userVideo} autoPlay />
                        <div className="card-body">
                            <h5 className="card-title h5">Your Name: </h5>
                            <p className="card-text">{props.username}</p>
                        </div>
                        <div className="d-flex justify-content-center border-0 my-3">
                            {!showAudio && micOnComponent}
                            {showAudio && micOffComponent}
                            {!showVideo && videoOnComponent}
                            {showVideo && videoOffComponent}
                            {userVideo.current && (<div className='d-flex justify-content-center border border-dark rounded-3 pe-3 ms-3' >
                                <label htmlFor='volumeRange' className="form-label mx-3 mt-2">{volumeIcon}</label>
                                <input type="range" className="form-range mt-3" min="0" max="1" step="0.25" id="volumeRange" value={volume} onChange={volumeHandler} />
                            </div>)}

                        </div>

                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        </div >
    )
}

export default VideoConatiner;