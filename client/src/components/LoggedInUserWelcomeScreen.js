import '../App.css';
import React from 'react';

function LoggedInUserWelcomeScreen({ user, setUser }) {
    console.log(user);

    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"})
            .then (()=>setUser({}))
        }

    return (
        <div>
            <h1>Welcome, {user['adult_contact']['first_name']}</h1>
            <button onClick = {handleLogout}>logout</button>
        </div>
    );
}

export default LoggedInUserWelcomeScreen;
