import './App.scss';
import './Components/Header.scss';

import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";

import Homepage from './Pages/Homepage';
import NewCall from './Pages/NewCall';
import JoinCall from './Pages/JoinCall';
import TestMedia from "./Pages/TestMedia";



const userInfo = {};

function App() {
  const [username, setUsername] = useState("");

  const updateName = (username) => {
    setUsername(username);
    userInfo.username = username;
  }

  return (
    <div className="container-fluid App" >
      <Switch>
        <Route path="/" exact>
          <Homepage userInfo={userInfo} onUpdateName={updateName} />
        </Route>
        <Route path="/newCall">
          <NewCall />
        </Route>
        <Route path="/joinCall">
          <JoinCall />
        </Route>
        <Route path="/testMedia">
          <TestMedia username={userInfo.username} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
