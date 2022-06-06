import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';
import LoggedInUserWelcomeScreen from './components/LoggedInUserWelcomeScreen';

function App() {

  const [buses, setBuses] = useState([]);
  const [user, setUser] = useState({});

  function updateFormData(formData, event) {
    let updatedFormData = {...formData};
    updatedFormData[event.target.name] = event.target.value;
    return updatedFormData;
  }

  useEffect(()=> {
    fetch("/me")
    .then((r)=>r.json())
    .then((userInfo)=>{
      console.log(userInfo);
      if(userInfo['username']) {
        setUser(userInfo);
      }
  })
}, [])
  
  useEffect(()=> {
    fetch("/buses")
      .then((r)=>r.json())
      .then((busList) => setBuses(busList))
      }, [])
  
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/register">
          <RegistrationScreen updateFormData={updateFormData} />
        </Route>
        
        <Route exact path = "/">
          {!user['adult_contact'] ? 
            <HomeScreen setUser = {setUser} updateFormData={updateFormData} /> : 
            <LoggedInUserWelcomeScreen user = {user} setUser = {setUser} />
          }
        </Route>
      </BrowserRouter>
    </div>
  )
}

export default App;
