import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';
import LoggedInUserWelcomeScreen from './components/LoggedInUserWelcomeScreen';
import MyProfileScreen from './components/MyProfileScreen';
import AddStudentForm from './components/AddStudentForm';
import AddBusForm from './components/AddBusForm';
import LogBusRouteScreen from './components/LogBusRouteScreen';

function App() {

  const [schools, setSchools] = useState([]);
  const [busRoutes, setBusRoutes] = useState([]);
  const [busStops, setBusStops] = useState([]);
  const [buses, setBuses] = useState([]);
  const [user, setUser] = useState({});

  const currentDate = new Date().toISOString().split('T')[0];

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
      }).then(()=> {
          fetch("/bus_stops")
          .then((r)=>r.json())
          .then((busStopList) => setBusStops(busStopList))
          }).then(()=> {
              fetch("/bus_routes")
              .then((r)=>r.json())
              .then((busRouteList) => setBusRoutes(busRouteList))
            }).then(()=> {
              fetch("/buses")
              .then((r)=>r.json())
              .then((busList) => setBuses(busList))
            })
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
        
        <Route exact path = "/AddStudentForm">
          <AddStudentForm user = {user} setUser = {setUser} schools = {schools} busRoutes = {busRoutes} busStops = {busStops} updateFormData = {updateFormData} />
        </Route>

        <Route exact path = "/AddBusForm">
          <AddBusForm user = {user} setUser = {setUser} buses = {buses} updateFormData = {updateFormData} />
        </Route>

        <Route exact path = "/LogBusRoute">
          <LogBusRouteScreen user = {user} setUser = {setUser} busRoutes = {busRoutes} currentDate = {currentDate} updateFormData = {updateFormData} />
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
