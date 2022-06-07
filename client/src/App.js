import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';
import LoggedInUserWelcomeScreen from './components/LoggedInUserWelcomeScreen';
import MyProfileScreen from './components/MyProfileScreen';

function App() {

  const [schools, setSchools] = useState([]);
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
      if(userInfo['username']) {
        setUser(userInfo);
      }
  })
}, [])
  
  useEffect(()=> {
    fetch("/schools")
      .then((r)=>r.json())
      .then((schoolList) => setSchools(schoolList))
      }, [])

      console.log(schools);

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
        
        <Route exact path = "/MyProfile">
          <MyProfileScreen user = {user} />
        </Route>
        
        <Route exact path = "/MyProfile">
          <MyProfileScreen user = {user} />
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
