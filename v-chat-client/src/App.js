import './App.scss';
import React, { useState } from "react";
import Homepage from './Pages/Homepage';
import SetUpName from './Pages/SetUpName';
import NewCall from './Pages/NewCall';
import JoinCall from './Pages/JoinCall';
import TestMedia from "./Pages/TestMedia";

import { Switch, Route } from "react-router-dom";

const userInfo = {};

function App() {
  const [username, setUsername] = useState("");

  const updateName = (username) => {
    setUsername(username);
    userInfo.username = username;
    console.log("userInfo", userInfo)
    console.log("username", username)
  }

  let body;
  if (username === "") {
    body = (<SetUpName onUpdateName={updateName} />)
  } else {
    body = <Homepage userInfo={userInfo} />
  }

  return (
    <div className="App">
      {body}
      <Switch>
        <Route path="/">
          {body}
        </Route>
        <Route path="/new-call">
          <NewCall />
        </Route>
        <Route path="/join-call">
          <JoinCall />
        </Route>
        <Route path="/test">
          <TestMedia username={userInfo.username} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
