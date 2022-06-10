import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';
import LoggedInUserWelcomeScreen from './components/LoggedInUserWelcomeScreen';
import MyProfileScreen from './components/MyProfileScreen';
import AddStudentForm from './components/AddStudentForm';

function App() {

  const [schools, setSchools] = useState([]);
  const [defaultSchoolId, setDefaultSchoolId] = useState(null);
  const [busRoutes, setBusRoutes] = useState([]);
  const [busStops, setBusStops] = useState([]);
  const [user, setUser] = useState({});

  function updateFormData(formData, event) {
    let updatedFormData = {...formData};
    
    if(event.target.type.includes("select")) {
      updatedFormData[event.target.name] = Number(event.target.value);
    }
    else {
      updatedFormData[event.target.name] = event.target.value;
    }
    
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
      .then((schoolList) => {
        setSchools(schoolList);
        setDefaultSchoolId(schoolList[0].id)
      })
    }, [])

  useEffect(()=> {
    fetch("/bus_stops")
      .then((r)=>r.json())
      .then((busStopList) => setBusStops(busStopList))
      }, [])

  useEffect(()=> {
    fetch("/bus_routes")
      .then((r)=>r.json())
      .then((busRouteList) => setBusRoutes(busRouteList))
      }, [])
  console.log(busStops);
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/register">
          <RegistrationScreen updateFormData={updateFormData} />
        </Route>
        
        <Route exact path = "/MyProfile">
          <MyProfileScreen user = {user} />
        </Route>
        
        <Route exact path = "/AddStudentForm">
          <AddStudentForm user = {user} schools = {schools} busRoutes = {busRoutes} busStops = {busStops} defaultSchoolId = {defaultSchoolId} updateFormData = {updateFormData} />
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
