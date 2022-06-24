import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function LoggedInUserWelcomeScreen({ user, setUser }) {
    
    function handleLogout() {
        fetch("/logout", {
            method: "DELETE"})
            .then (()=>setUser({}))
            .then (()=>console.log(user))
        }

    return (
        <div>
            <h1>Welcome, {user['adult_contact']['first_name']}</h1>
            <p>
                <Link to="/MyProfile">View my profile</Link>
            </p>
                
                {user['adult_contact']['parent'] ? 
                    <p><Link to="/trackStudentBus">Track a bus</Link></p> : null}


                {user['adult_contact']['driver'] ? 
                    <p>
                        <Link to="/logBusRoute">Log bus route</Link> 
                    </p>: null}

            <button onClick = {handleLogout}>logout</button>
        </div>
    );
}

export default LoggedInUserWelcomeScreen;
