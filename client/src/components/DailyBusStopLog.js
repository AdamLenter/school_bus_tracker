import '../App.css';
import React, { useState, useEffect } from 'react';
import BusStopForLog from './BusStopForLog';

function DailyBusStopLog({ dailyRouteId, busStops }) {

    const [completedStops, setCompletedStops] = useState([]);

    useEffect(()=> {
        fetch(`/daily_route_stop_times/${dailyRouteId}`)
        .then((r)=>r.json())
        .then((completedStopList)=>setCompletedStops(completedStopList))
    }, [])

    let busStopsWithCompleted = [...busStops];
    if(completedStops.length > 0 && busStops.length > 0){
        for(let i = 0; i < busStops.length; i++){
            const completedStop = completedStops.find((busStop)=>busStop.bus_stop_id === busStops(i).id);

            if(completedStop) {
                busStops(i).pick_up_or_drop_off_time = completedStop.pick_up_or_drop_off_time;
            }
        }
    }
    if(busStopsWithCompleted.length > 0) {
        return (
            <div>
                {
                busStopsWithCompleted.map((busStop)=><BusStopForLog key = {busStop.id} busStop = {busStop} />)
                }
            </div>
        );
    }
    else {
        return(<h1>Loading...</h1>);
    }
}

export default DailyBusStopLog;
