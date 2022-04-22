import React, { useState, useEffect, useRef } from "react";
import VideoConatiner from "../Components/VideoContainer";

const Homepage = (props) => {
    const userInfo = props.userInfo;
    const userVideo = useRef();
    const [userStream, setUserStream] = useState();
    const [username, setUsername] = useState("");

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
            setUserStream(stream);
            if (userVideo.current) {
                userVideo.current.srcObject = stream;
            }
        })
    }, []);

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (username === "") {
            return false;
        }
        props.onUpdateName(username);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Set a Name</label>
                <input type="text" name="username" value={username} onChange={usernameHandler} />
                <button type="submit">Start</button>
            </form>
            <div>
                <VideoConatiner username={username} stream={userStream} />
            </div>
            <div>
                <ul>
                    <li>Create a call</li>
                    <li>Join a call</li>
                    <li>Call others</li>
                </ul>
            </div>
        </>

    )
}

export default Homepage;