import '../App.css';
import React from 'react';

function DisplayBusStopToLog({ busStop }) {
    
    return (
        <div>
            {busStop.location_description}
            <br />
            <button>Completed</button>
            <br />
            <br />
        </div>
    );
}

export default DisplayBusStopToLog;
