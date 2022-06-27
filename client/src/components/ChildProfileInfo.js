import '../App.css';
import React from 'react';

function ChildProfileInfo({ student, busStops }) {
    

    let busStopInfo
    if(student.bus_stop_id && busStops.length > 0) {
        busStopInfo = busStops.find((busStop)=>busStop.id === student.bus_stop_id);
    }

    return (
        <div>
            <strong>First name: </strong>{student.first_name}
            <br />

            <strong>Last name: </strong>{student.last_name}
            <br />
            
            <strong>School: </strong>
            {busStopInfo ? busStopInfo.bus_route.school.name : "(not set)"}
            <br />

            <strong>Bus Number: </strong>
            {busStopInfo ? busStopInfo.bus_route.bus.number : "(not set)"}
            <br />

            <strong>Bus stop: </strong>
            {busStopInfo ? busStopInfo.location_description : "(not set)"}
        </div>
    );
}

export default ChildProfileInfo;
