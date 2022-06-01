import logo from './bus_image.jpeg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const blankLoginFormData = {
    username: "", 
    password: ""
  }
  const [loginFormData, setLoginFormData] = useState(blankLoginFormData);

  return (
    <div className="App">
      <h1>School Bus Tracker</h1>
      <img src={logo} />
      <h2>Returning User?</h2>
      <form>
        <label>Username: </label>
        <input value = {setLoginFormData.username} />
        <br />
        <br />
        <label>Password: </label>
        <input type = "password" value = {setLoginFormData.password} />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>Click here to create a new account</p>
    </div>
  );
}

export default App;
