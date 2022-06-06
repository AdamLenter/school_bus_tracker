import '../App.css';
import React, { useState } from 'react';
import DisplayErrors from './DisplayErrors';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function RegistrationScreen({ updateFormData }) {

    const [registrationFormData, setRegistrationFormData] = useState({
        first_name: "",
        last_name: "", 
        parent: true,
        driver: false,  
        username: "", 
        password: "",
        password_confirmation: ""
    }) 

    const [userCreated, setUserCreated] = useState(false);
    const [registrationErrors, setRegistrationErrors] = useState([]);

    function updateRegistrationFormData(event) {
        const updatedFormData = updateFormData(registrationFormData, event);
        setRegistrationFormData(updatedFormData);
    }

    function handleSubmit(event) {
        event.preventDefault();
       
        fetch("/users", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(registrationFormData)
        })
        .then((response) => {
            if (response.ok) {
              setUserCreated(true);
            } else {
              response.json().then((errorData) => setRegistrationErrors(errorData.errors));
            }
        })
    }
console.log(userCreated)
    if(!userCreated) {
        return (
            <div>
            <h1>Create Account</h1>
            {registrationErrors.length > 0 ? <DisplayErrors errors = {registrationErrors} /> : null}
            <form onSubmit={handleSubmit}>
                <label>I am a parent: </label>
                <select name = "parent" value = {registrationFormData.parent} onChange = {updateRegistrationFormData}>
                    <option value = {true}>Yes</option>
                    <option value = {false}>No</option>
                </select>
                <br />
                <br />

                <label>I am a driver: </label>
                <select name = "driver" value = {registrationFormData.driver} onChange = {updateRegistrationFormData}>
                    <option value = {true}>Yes</option>
                    <option value = {false}>No</option>
                </select>
                <br />
                <br />

                <label>First name: </label>
                <input name = "first_name" value = {registrationFormData.first_name} onChange = {updateRegistrationFormData} />
                <br />
                <br />

                <label>Last name: </label>
                <input name = "last_name" value = {registrationFormData.last_name}  onChange = {updateRegistrationFormData} />
                <br />
                <br />

                <label>Username: </label>
                <input name = "username" value = {registrationFormData.username}  onChange = {updateRegistrationFormData} />
                <br />
                <br />
                
                <label>Password: </label>
                <input type = "password" name = "password" value = {registrationFormData.password}  onChange = {updateRegistrationFormData} />
                <br />
                <br />

                <label>Confirm password: </label>
                <input type = "password" name = "password_confirmation" value = {registrationFormData.password_confirmation}  onChange = {updateRegistrationFormData} />
                <br />
                <br />

                <button>Submit</button>
            </form>

            <form></form>
            </div>
        );
    }
    else {
        return (
            <div>
                <h2>Account successfully created</h2>
                <p>Click <Link to="/">here</Link> to login</p>
            </div>
        )
    }
}

export default RegistrationScreen;
