import React from "react";
import './Header.scss';

const Header = (props) => {
    return (<h1>Hi, {props.userInfo.username
    }</h1>)
}

export default Header