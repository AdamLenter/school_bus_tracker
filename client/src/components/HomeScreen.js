import logo from '../bus_image.jpeg';
import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DisplayErrors from './DisplayErrors';


function HomeScreen({ setUser, updateFormData}) {
  const blankLoginFormData = {
    username: "", 
    password: ""
  }
  const [loginFormData, setLoginFormData] = useState(blankLoginFormData);

  const [loginErrors, setLoginErrors] = useState([]);

  function updateLoginFormData(event) {
    setLoginFormData(updateFormData(loginFormData, event));
  }

  function handleLoginSubmit(event) {
    event.preventDefault();
   
    fetch("/login", {
      method: "POST", 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(loginFormData)
      })
      .then((response) => {
          if (response.ok) {
            response.json().then((userInfo)=>setUser(userInfo));
          } else {
            response.json().then((errorData) => setLoginErrors(errorData.errors));
          }
      })
    }
    
  return (
    <div className="App">
      <h1>School Bus Tracker</h1>
      <img src={logo} alt = "cartoon school bus" />
      <h2>Returning User?</h2>
      <form onSubmit = {handleLoginSubmit}>
        {loginErrors.length > 0 ? <DisplayErrors errors = {loginErrors} /> : null}
        <label>Username: </label>
        <input name = "username" value = {loginFormData.username} onChange = {updateLoginFormData} />
        <br />
        <br />
        <label>Password: </label>
        <input name = "password" type = "password" value = {loginFormData.password} onChange = {updateLoginFormData} />
        <br />
        <br />
        <button>Submit</button>
      </form>
      <p>Click <Link to="/register">here</Link> to create a new account</p>
    </div>
  );
}

export default HomeScreen;
