import '../App.css';
import React from 'react';
import ProfileChildSection from './ProfileChildSection';
import { Link } from 'react-router-dom';
import ProfileBusSection from './ProfileBusSection';

function MyProfileScreen({ user, students, setStudents, busStops } ) {    
    
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

                {user.adult_contact.parent ? <ProfileChildSection students = {students} setStudents = {setStudents} busStops = {busStops} /> : null}

                {user.adult_contact.driver ? <ProfileBusSection buses = {user.adult_contact.buses} /> : null}

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
