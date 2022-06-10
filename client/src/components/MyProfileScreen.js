import '../App.css';
import React from 'react';
import ProfileChildSection from './ProfileChildSection';
import { Link } from 'react-router-dom';

function MyProfileScreen({ user } ) {
    console.log(user);
    if(user.adult_contact) {
        return (
            <div>
                <h1>My Profile</h1>
                
                <h2>Basic Information</h2>
                <p>
                    <strong>First name: </strong>{user.adult_contact.first_name}
                    <br />
                    <strong>Last name: </strong>{user.adult_contact.last_name}
                </p>

                {user.adult_contact.parent ? <ProfileChildSection students = {user.students} /> : null}

                <br />

                <p>Click <Link to = "/">here</Link> to return to the home screen</p>
        
            </div>
        );
    }
    else {
        return (
        <h1>Loading...</h1>
        )
    }
}

export default MyProfileScreen;
