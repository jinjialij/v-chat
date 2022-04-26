import React, { useState, } from "react";
import './SetUpNme.scss';

const SetUpName = (props) => {
    const [username, setUsername] = useState("");

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
        <form onSubmit={submitHandler}>
            <label htmlFor="username" className="name-label">Set a Name</label>
            <input type="text" name="username" value={username} onChange={usernameHandler} />
            <button type="submit">Start</button>
        </form>)
}

export default SetUpName