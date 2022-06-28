import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function ProfileBusSection({ buses }) {
    
    let displayedBuses = [];

    if(buses.length > 0) {
        
        displayedBuses = buses.sort((a, b)=> {
        if(a.number < b.number){
          return -1;
          }
        else {
          return 1;
        }
      })
    }
      
    return (
        <div>
            <br />
            <h2>My Buses</h2>
            {displayedBuses.length > 0 ? 
                displayedBuses.map((bus)=>(
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
