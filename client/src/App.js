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
  const [students, setStudents] = useState([]);

  const currentDate = new Date().toISOString().split('T')[0];

  function displayTime(rubyTime) {
    let hours = rubyTime.substring(11, 13);
    let minutes = rubyTime.substring(14,16);
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function getDateTime(date) {
    return (
      [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')
    );
  }

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
console.log(students);
  useEffect(()=> {
    fetch("/me")
    .then((r)=>r.json())
    .then((userInfo)=>{
      if(userInfo['username']) {
        setUser(userInfo);

        fetch(`/parent_students/${userInfo.adult_contact.id}`)
          .then((r)=>r.json())
          .then((studentList)=>{
            if(studentList.length > 0) {
              setStudents(studentList);
            }
         })
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
          <MyProfileScreen user = {user} students = {students} busStops = {busStops} />
        </Route>
        
        <Route exact path = "/AddStudentForm">
          <AddStudentForm user = {user} students = {students} setStudents = {setStudents} schools = {schools} busRoutes = {busRoutes} busStops = {busStops} updateFormData = {updateFormData} />
        </Route>

        <Route exact path = "/AddBusForm">
          <AddBusForm user = {user} setUser = {setUser} buses = {buses} updateFormData = {updateFormData} />
        </Route>

        <Route exact path = "/LogBusRoute">
          <LogBusRouteScreen user = {user} setUser = {setUser} busRoutes = {busRoutes} currentDate = {currentDate} getDateTime = {getDateTime} displayTime = {displayTime} updateFormData = {updateFormData} />
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
