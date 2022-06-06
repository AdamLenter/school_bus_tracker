import '../App.css';
import React from 'react';

function LoggedInUserWelcomeScreen({ user }) {
    console.log(user);

    return (
        <div>
            <h1>Welcome, </h1>
        </div>
    );
}

export default LoggedInUserWelcomeScreen;
