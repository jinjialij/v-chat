import './App.scss';
import React, { useState } from "react";
import Homepage from './Pages/Homepage';
import SetUpName from './Pages/SetUpName';


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
    </div>
  );
}

export default App;
