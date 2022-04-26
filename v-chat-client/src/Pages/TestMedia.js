import React, { useState, useEffect, useRef } from "react";
import VideoConatiner from "../Components/VideoContainer";

const TestMedia = () => {
    const userVideo = useRef();
    const [userStream, setUserStream] = useState();

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
    }

    return (
        <div>
            <VideoConatiner username={username} stream={userStream} />
            <button type="button" onClick={closeHandler} >Close</button>
        </div>
    )
}

export default TestMedia;