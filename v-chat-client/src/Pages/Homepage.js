import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import SetUpName from './SetUpName';
import Header from "../Components/Header";

import './Homepage.scss';

const Homepage = (props) => {
    const userInfo = props.userInfo;
    let body;

    if (userInfo.username) {
        body = (<div className="homepage-body">
            <Header className userInfo={userInfo} />
            <ul class="nav flex-column">
                <li class="nav-item">
                    <Link to="/newCall" className="links">Create a call</Link>
                </li>
                <li class="nav-item">
                    <Link to="/joinCall" className="links">Join a call</Link>
                </li>
                <li class="nav-item">
                    <Link to="/testMedia" className="links">Test your Mic and Camera</Link>
                </li>
            </ul>
        </div >);
    } else {
        body = (<SetUpName onUpdateName={props.onUpdateName} />);
    }

    return (body);
}

export default Homepage;