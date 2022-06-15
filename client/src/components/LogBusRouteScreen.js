import '../App.css';
import React, { useState } from 'react';
import BeginLoggingBusRouteForm from './BeginLoggingBusRouteForm';

function LogBusRouteScreen({ user, busRoutes, currentDate, updateFormData }) {
    
    const [dailyRouteInfo, setDailyRouteInfo] = useState({});
    console.log(dailyRouteInfo);
    if(busRoutes.length > 1 && user) {
        return (
            <div>
                <h1>Log Bus Route</h1>
                {!dailyRouteInfo.id ? 
                    <BeginLoggingBusRouteForm user = {user} busRoutes = {busRoutes} currentDate = {currentDate} setDailyRouteInfo = {setDailyRouteInfo} updateFormData = {updateFormData} /> : 
                    null
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
