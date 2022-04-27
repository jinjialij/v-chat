import './App.scss';
import React, { useState } from "react";

import Header from './Components/Header';
import SetUpName from './Pages/SetUpName';
import Homepage from './Pages/Homepage';
import NewCall from './Pages/NewCall';
import JoinCall from './Pages/JoinCall';
import TestMedia from "./Pages/TestMedia";

import { Switch, Route, Link } from "react-router-dom";

const userInfo = {};

function App() {
  const [username, setUsername] = useState("");

  const updateName = (username) => {
    setUsername(username);
    userInfo.username = username;
    console.log("userInfo", userInfo)
    console.log("username", username)
  }
  // let body;

  // if (userInfo.username) {
  //   body = (<div className="homepage-body">
  //     <Header userInfo={userInfo} />
  //     <div>
  //       <ul>
  //         <li><Link to="/newCall">Create a call</Link></li>
  //         <li><Link to="/joinCall">Join a call</Link></li>
  //         <li><Link to="/testMedia">Test your Mic and Camera</Link></li>
  //       </ul>
  //     </div>
  //   </div >);
  // } else {
  //   body = (<SetUpName onUpdateName={updateName} />);
  // }

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact={true}>
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
