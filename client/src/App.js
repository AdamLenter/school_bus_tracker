import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';

function App() {

  const [buses, setBuses] = useState([]);

  function updateFormData(formData, event) {
    let updatedFormData = {...formData};
    updatedFormData[event.target.name] = event.target.value;
    return updatedFormData;
  }

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
          
          <HomeScreen updateFormData={updateFormData} />
        </Route>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
