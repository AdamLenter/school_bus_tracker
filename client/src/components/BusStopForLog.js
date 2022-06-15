import '../App.css';
import React, { useState, useEffect } from 'react';

function BusStopForLog({ busStop }) {

   
    return (
        <div>
            {busStop.location_description}
            <br />
            {busStop.pick_up_or_drop_off_time ? busStop.pick_up_or_drop_off_time : <button>Complete</button>}
            <br />
            <br />
        </div>
    );
}

export default BusStopForLog;
