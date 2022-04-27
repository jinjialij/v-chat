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
            <Header userInfo={props.userInfo} />
            <div>
                <ul>
                    <li><Link to="/newCall">Create a call</Link></li>
                    <li><Link to="/joinCall">Join a call</Link></li>
                    <li><Link to="/testMedia">Test your Mic and Camera</Link></li>
                </ul>
            </div>
        </div >);
    } else {
        body = (<SetUpName onUpdateName={props.onUpdateName} />);
    }

    return (body);
}

export default Homepage;