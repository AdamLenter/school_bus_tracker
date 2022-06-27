import '../App.css';
import React from 'react';
import DailyBusStopLog from './DailyBusStopLog';

function LogBusRouteDetails({ busRouteDetails, dailyRouteInfo, busStops, getDateTime, displayTime }) {
console.log(dailyRouteInfo);
    if(Object.keys(busRouteDetails).length > 0) {
        return (
            <div>
                <strong>School: </strong>{busRouteDetails.school.name}
                <br />
                <strong>Bus Number: </strong>{busRouteDetails.bus.number}
                <br />
                <strong>Route: </strong>{busRouteDetails.name}
                <br />
                <strong>To/From School: </strong>{dailyRouteInfo.to_or_from_school === "to" ? "To" : "From"}
                <br />
                <br />
                <DailyBusStopLog dailyRouteId = {dailyRouteInfo.id} busStops = {busStops} getDateTime = {getDateTime} displayTime = {displayTime} mode = "driver" />
            </div>
        );
    }
    else {
        return(<h1>Loading...</h1>);
    }
}

export default LogBusRouteDetails;
