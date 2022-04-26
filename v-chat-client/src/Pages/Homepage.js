import React, { useState, useEffect, useRef } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Header from "../Components/Header";
import NewCall from "./NewCall";
import JoinCall from "./JoinCall";
import TestMedia from "./TestMedia";

import './Homepage.scss';

const Homepage = (props) => {

    return (
        <div className="homepage-body">
            <Header userInfo={props.userInfo} />
            <div>
                <ul>
                    <li><Link to="/new-call">Create a call</Link></li>
                    <li><Link to="/join-call">Join a call</Link></li>
                    <li><Link to="/test">Test your Mic and Camera</Link></li>
                </ul>

            </div>
        </div >


    )
}

export default Homepage;