import React from "react";
import { Link } from "react-router-dom";

import './Header.scss';

const Header = (props) => {
    return (
        <>
            {/* <nav>
                <ul className="header-ul">
                    <li className="header-li"><Link className="header-a" to="/newCall">Create a call</Link></li>
                    <li className="header-li"><Link className="header-a" to="/joinCall">Join a call</Link></li>
                    <li className="header-li"><Link className="header-a" to="/testMedia">Test your Mic and Camera</Link></li>
                </ul>
            </nav> */}
            <h1 className="header-h1">Hi, {props.userInfo.username}</h1>
        </>
    )
}

export default Header