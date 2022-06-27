import '../App.css';
import React from 'react';
import DailyBusStopLog from './DailyBusStopLog';

function StudentDailyBusInfo({ student, busRoute, dailyBusRoute, busStops, getDateTime, displayTime }) {
    
    const busStopsToDisplay = busStops.filter((busStop)=>busStop.bus_route_id === busRoute.id);
console.log(dailyBusRoute);

    return (
        <div>
            <h2>Student</h2>
            <p>
                <strong>Student: </strong>{student.first_name} {student.last_name}
                <br />
                <strong>School: </strong>{busRoute.school.name}
                <br />
                <strong>Bus Number: </strong>{busRoute.bus.number}
                <br />
                <br />
                <h2>Bus Status:</h2>
                <strong>Began Route: </strong>{dailyBusRoute.route_start_time ? displayTime(dailyBusRoute.route_start_time) : "N/A"}
            </p>
            <br />
            {dailyBusRoute.created_at ? 
                <div>
                    <strong>Stop Times:</strong>
                    <DailyBusStopLog dailyRouteId = {dailyBusRoute.id} busStops = {busStopsToDisplay} getDateTime = {getDateTime} displayTime = {displayTime} mode = "student" />
                </div> : null}
            
        </div>
    );
}

export default StudentDailyBusInfo;
