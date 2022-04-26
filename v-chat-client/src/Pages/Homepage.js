import React, { useState, useEffect, useRef } from "react";
import Header from "../Components/Header";

const Homepage = (props) => {

    return (
        <>
            <Header userInfo={props.userInfo} />
            <div>
                <ul>
                    <li>Create a call</li>
                    <li>Join a call</li>
                    <li>Test your Mic and Camera</li>
                </ul>
            </div>
        </>


    )
}

export default Homepage;