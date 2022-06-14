import '../App.css';
import React, { useState } from 'react';
import BeginLoggingBusRouteForm from './BeginLoggingBusRouteForm';

function LogBusRouteScreen({ user, busRoutes, updateFormData }) {
    
    const [dailyRouteInfo, setDailyRouteInfo] = useState({});

    if(busRoutes.length > 1 && user) {
        return (
            <div>
                <h1>Log Bus Route</h1>
                {dailyRouteInfo ? 
                    <BeginLoggingBusRouteForm user = {user} busRoutes = {busRoutes} updateFormData = {updateFormData} setDailyRouteInfo = {setDailyRouteInfo} /> : 
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
