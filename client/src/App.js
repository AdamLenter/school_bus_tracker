import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import HomeScreen from './components/HomeScreen';
import RegistrationScreen from './components/RegistrationScreen';

function App() {

  function updateFormData(formData, event) {
    let updatedFormData = {...formData};
    updatedFormData[event.target.name] = event.target.value;
    return updatedFormData;
  }
  
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path = "/register">
          <RegistrationScreen />
        </Route>
        <Route exact path = "/">
          
          <HomeScreen updateFormData={updateFormData} />
        </Route>
      </BrowserRouter>
      
    </div>
  )
}

export default App;
