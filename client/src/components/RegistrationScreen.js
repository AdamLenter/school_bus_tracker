import '../App.css';
import React, { useState } from 'react';

function RegistrationScreen({ updateFormData }) {

    const [registrationFormData, setRegistrationFormData] = useState({
        first_name: "",
        last_name: "", 
        user_type: "Parent", 
        username: "", 
        password_digest: "",
        confirm_password: ""
    }) 

    function updateRegistrationFormData(event) {
        const updatedFormData = updateFormData(registrationFormData, event);
        setRegistrationFormData(updatedFormData);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(registrationFormData);
    }

    return (
        <div>
        <h1>Create Account</h1>
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
            <input type = "password" name = "password_digest" value = {registrationFormData.password_digest}  onChange = {updateRegistrationFormData} />
            <br />
            <br />

            <label>Confirm password: </label>
            <input type = "password" name = "confirm_password" value = {registrationFormData.confirm_password}  onChange = {updateRegistrationFormData} />
            <br />
            <br />

            <button>Submit</button>
        </form>

        <form></form>
        </div>
    );
}

export default RegistrationScreen;
