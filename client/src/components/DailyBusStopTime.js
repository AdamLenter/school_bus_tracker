import '../App.css';
import React from 'react';

function DailyBusStopTime({ dailyRouteId, busStop, completedBusStops, setCompletedBusStops, getDateTime, displayTime, mode  }) {

    function handleStopCompleted(event) {
        const updatedCompletedStops = {
            daily_route_id: dailyRouteId, 
            bus_stop_id: busStop.id, 
            pick_up_or_drop_off_time: getDateTime(new Date())
        }

        fetch("/daily_route_stop_times", {
            method: "post",  
            headers: {"content-type": "application/json"},
            body: JSON.stringify(updatedCompletedStops)
            }
        )
        .then((res)=>res.json())
        .then((dailyStopInfo)=> {
            const completedStopsToUpdate = [...completedBusStops, dailyStopInfo];
            setCompletedBusStops(completedStopsToUpdate);
        })
    }

    const completedBusStop = completedBusStops.find((completedBusStop)=>completedBusStop.bus_stop_id === busStop.id);
    return (
        <div>
            {busStop.location_description}
            <br />
            {completedBusStop ? 
                <strong>{displayTime(completedBusStop.pick_up_or_drop_off_time)}</strong> : 
                mode === "driver" ? 
                    <button value = {busStop.id} onClick = {handleStopCompleted}>Complete</button> :
                    <strong>Has not arrived</strong>}
            <br />
            <br />
        </div>
    );
}

export default DailyBusStopTime;
