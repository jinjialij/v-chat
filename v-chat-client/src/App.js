import './App.scss';
import React, { useState } from "react";
import Homepage from './Pages/Homepage';
const userInfo = {};
function App() {
  const updateName = (data) => {
    userInfo.username = data;
  }
  return (
    <div className="App">
      <Homepage onUpdateName={updateName} userInfo={userInfo} />
    </div>
  );
}

export default App;
