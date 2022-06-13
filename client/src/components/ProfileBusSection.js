import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function ProfileBusSection({ buses }) {
    
    return (
        <div>
            <br />
            <h2>My Buses</h2>
            {buses.length > 0 ? 
                buses.map((bus)=>(
                    <div key = {bus.id} >
                        <strong>Bus #: </strong>
                        {bus.number}
                        <br />
                    </div>)) : 
                <p>(No buses to display)</p>}

            <br />
            Click <Link to = "/AddBusForm">here</Link> to add a bus
            <br />
            <br />
        </div>
    );
}

export default ProfileBusSection;
