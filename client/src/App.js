import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';
import LoggedInUserWelcomeScreen from './components/LoggedInUserWelcomeScreen';
import MyProfileScreen from './components/MyProfileScreen';
import AddStudentForm from './components/AddStudentForm';
import AddBusForm from './components/AddBusForm';
import LogBusRouteScreen from './components/LogBusRouteScreen';
import TrackStudentBus from './components/TrackStudentBus';
import EditStudentForm from './components/EditStudentForm';

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
    
    if(hours > 12) {
      hours = hours - 12
    }
    else if(hours === 0) {
      hours = 12;
    }

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
        <Routes>
          <Route exact path = "/register" element={<RegistrationScreen updateFormData={updateFormData} />} />
          
          <Route exact path = "/MyProfile" element = {<MyProfileScreen user = {user} students = {students} setStudents = {setStudents} busStops = {busStops} />} />
          
          <Route exact path = "/AddStudentForm" element = {<AddStudentForm user = {user} students = {students} setStudents = {setStudents} schools = {schools} busRoutes = {busRoutes} busStops = {busStops} updateFormData = {updateFormData} />} />

          <Route exact path = "/EditStudentForm/:studentId" element={<EditStudentForm students = {students} setStudents = {setStudents} schools = {schools} busRoutes = {busRoutes} busStops = {busStops} updateFormData = {updateFormData} />}/>

          <Route exact path = "/AddBusForm" element={<AddBusForm user = {user} setUser = {setUser} buses = {buses} updateFormData = {updateFormData} />} />
            
          <Route exact path = "/LogBusRoute" element={ <LogBusRouteScreen user = {user} setUser = {setUser} busRoutes = {busRoutes} currentDate = {currentDate} getDateTime = {getDateTime} displayTime = {displayTime} updateFormData = {updateFormData} />} />

          <Route exact path = "/TrackStudentBus" element={<TrackStudentBus students = {students} busRoutes = {busRoutes} currentDate = {currentDate} updateFormData = {updateFormData} busStops = {busStops} getDateTime = {getDateTime} displayTime = {displayTime} />} />
          
          {!user['adult_contact'] ?
            <Route exact path = "/" element={<HomeScreen setUser = {setUser} updateFormData={updateFormData} />} /> : 
            <Route exact path = "/" element={<LoggedInUserWelcomeScreen user = {user} setUser = {setUser} students = {students} busRoutes = {busRoutes} />} />}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
