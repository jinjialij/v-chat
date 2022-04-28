import React, { useState, useEffect, useRef } from "react";
import VideoConatiner from "../Components/VideoContainer";
import { useHistory } from "react-router-dom";

const TestMedia = (props) => {
    const userVideo = useRef();
    const [userStream, setUserStream] = useState();
    const histroy = useHistory();

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            setUserStream(stream);
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        })
    }, []);

    const closeHandler = (e) => {
        e.preventDefault();
        histroy.push('/');
    }

    return (
        <div>
            <VideoConatiner username={props.username} stream={userStream} />
            <button type="button" className="btn btn-primary btn-lg my-5" onClick={closeHandler} >Close</button>
        </div>
    )
}

export default TestMedia;