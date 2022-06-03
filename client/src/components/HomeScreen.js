import logo from '../bus_image.jpeg';
import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function HomeScreen({updateFormData}) {
  const blankLoginFormData = {
    username: "", 
    password: ""
  }
  const [loginFormData, setLoginFormData] = useState(blankLoginFormData);

  function updateLoginFormData(event) {
    setLoginFormData(updateFormData(loginFormData, event));
  }

  return (
    <div className="App">
      <h1>School Bus Tracker</h1>
      <img src={logo} alt = "cartoon school bus" />
      <h2>Returning User?</h2>
      <form>
        <label>Username: </label>
        <input name = "username" value = {setLoginFormData.username} onChange = {updateLoginFormData} />
        <br />
        <br />
        <label>Password: </label>
        <input name = "password" type = "password" value = {setLoginFormData.password} onChange = {updateLoginFormData} />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>Click <Link to="/register">here</Link> to create a new account</p>
    </div>
  );
}

export default HomeScreen;
