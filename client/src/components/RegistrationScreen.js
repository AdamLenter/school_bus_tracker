import '../App.css';
import React, { useState } from 'react';
import DisplayErrors from './DisplayErrors';

function RegistrationScreen({ updateFormData }) {

    const [registrationFormData, setRegistrationFormData] = useState({
        first_name: "",
        last_name: "", 
        user_type: "Parent", 
        username: "", 
        password: "",
        password_confirmation: ""
    }) 

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
              response.json().then(() => console.log("Created"));
            } else {
              response.json().then((errorData) => setRegistrationErrors(errorData.errors));
            }
        })
    }
console.log(registrationErrors);


    return (
        <div>
        <h1>Create Account</h1>
        {registrationErrors.length > 0 ? <DisplayErrors errors = {registrationErrors} /> : null}
        <form onSubmit={handleSubmit}>
            <label>I am a: </label>
            <select name = "user_type" value = {registrationFormData.user_type} onChange = {updateRegistrationFormData}>
                <option value = "Parent">Parent</option>
                <option value = "Driver">Driver</option>
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

export default RegistrationScreen;
