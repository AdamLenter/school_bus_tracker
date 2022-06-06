import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

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
            <p>
                <Link to="/myProfile">View my profile</Link>
            </p>
                
                {user['adult_contact']['parent'] ? 
                    <p><Link to="/trackABus">Track a bus</Link></p> : null}


                {user['adult_contact']['driver'] ? 
                    <p>
                        <Link to="/logBusRoute">Log bus route</Link> 
                    </p>: null}

            <button onClick = {handleLogout}>logout</button>
        </div>
    );
}

export default LoggedInUserWelcomeScreen;
