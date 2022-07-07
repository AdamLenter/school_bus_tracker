import '../App.css';
import React from 'react';
import DailyBusStopLog from './DailyBusStopLog';
import DailyRouteMessage from './DailyRouteMessage';

function StudentDailyBusInfo({ student, busRoute, dailyBusRoute, busStops, completedBusStops, getCompletedBusStops, getDateTime, displayTime }) {
    
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
                <br />
            </p>
            <h2>Bus Status:</h2>
            <p>
                <strong>Began Route: </strong>{dailyBusRoute.route_start_time ? displayTime(dailyBusRoute.route_start_time) : "N/A"}
            </p>
            <br />
            {dailyBusRoute.route_start_time ? 
                <div>
                    <strong>Stop Times:</strong>
                    <DailyBusStopLog dailyRouteId = {dailyBusRoute.id} busStops = {busStopsToDisplay} completedBusStops = {completedBusStops} getCompletedBusStops = {getCompletedBusStops} getDateTime = {getDateTime} displayTime = {displayTime} mode = "student" />
                </div> : null}

            <h2>Driver Messages</h2>
            {dailyBusRoute.daily_route_messages && dailyBusRoute.daily_route_messages.length > 0 ? dailyBusRoute.daily_route_messages.map((dailyRouteMessage)=><DailyRouteMessage key = {dailyRouteMessage.id} messageInfo = {dailyRouteMessage} displayTime = {displayTime} />) : "(no messages to display)"}
        </div>
    );
}

export default StudentDailyBusInfo;
