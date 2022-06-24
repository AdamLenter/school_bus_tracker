import '../App.css';
import React from 'react';
import DailyBusStopLog from './DailyBusStopLog';

function StudentDailyBusInfo({ student, busRoute, dailyBusRoute, busStops, getDateTime, displayTime }) {
    
    const busStopsToDisplay = busStops.filter((busStop)=>busStop.bus_route_id === busRoute.id);

    return (
        <div>
            <h2>Student</h2>
            <p>
                <strong>Student: </strong>{student.first_name} {student.last_name}
                <br />
                <strong>School: </strong>{busRoute.school.name}
                <br />
                <strong>Bus Number: </strong>{busRoute.bus.number}
            </p>
            <br />
            <DailyBusStopLog dailyRouteId = {dailyBusRoute.id} busStops = {busStopsToDisplay} getDateTime = {getDateTime} displayTime = {displayTime} mode = "student" />
        </div>
    );
}

export default StudentDailyBusInfo;
