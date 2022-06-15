import '../App.css';
import React, { useState } from 'react';
import BeginLoggingBusRouteForm from './BeginLoggingBusRouteForm';
import DailyBusStopLog from './DailyBusStopLog';

function LogBusRouteScreen({ user, busRoutes, currentDate, updateFormData }) {
    
    const [dailyRouteInfo, setDailyRouteInfo] = useState({});

    let busStopList = [];
    let displayedBusStopList = [];

    if(dailyRouteInfo.bus_route_id) {
        busStopList = busRoutes.find((busRoute)=>busRoute.id === dailyRouteInfo.bus_route_id).bus_stops;
    }

    if(busStopList.length > 0) {
        let sortBy;

        if(dailyRouteInfo.to_or_from_school === "to") {
            sortBy = "expected_pick_up_time";
            }
        else {
            sortBy = "expected_drop_off_time"
        }

        displayedBusStopList = busStopList.sort((a, b)=> {
            if(a[sortBy] < b[sortBy]){
              return -1;
              }
            else {
              return 1;
            }
        })
    }

    if(busRoutes.length > 1 && user) {
        return (
            <div>
                <h1>Log Bus Route</h1>
                {!dailyRouteInfo.id ? 
                    <BeginLoggingBusRouteForm user = {user} busRoutes = {busRoutes} currentDate = {currentDate} setDailyRouteInfo = {setDailyRouteInfo} updateFormData = {updateFormData} /> : 
                    displayedBusStopList.length > 0 ? <DailyBusStopLog dailyRouteId = {dailyRouteInfo.id} busStops = {displayedBusStopList} /> : null
                }
                
            </div>
        );
    }
    else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
}

export default LogBusRouteScreen;
