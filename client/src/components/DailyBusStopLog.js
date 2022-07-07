import '../App.css';
import React from 'react';
import DailyBusStopTime from './DailyBusStopTime';

function DailyBusStopLog({ dailyRouteId, busStops, getDateTime, completedBusStops, getCompletedBusStops, setCompletedBusStops, displayTime, mode }) {
    if(busStops.length > 0) {
        return (
            <div>
                {
                busStops.map((busStop)=><DailyBusStopTime key = {busStop.id} dailyRouteId = {dailyRouteId} busStop = {busStop} getDateTime = {getDateTime} displayTime = {displayTime} completedBusStops = {completedBusStops} getCompletedBusStops = {getCompletedBusStops} setCompletedBusStops = {setCompletedBusStops} mode = {mode} />)
                }
            </div>
        );
    }
    else {
        return(<h1>Loading...</h1>);
    }
}

export default DailyBusStopLog;
