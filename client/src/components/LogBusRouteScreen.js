import '../App.css';
import React, { useState } from 'react';

function LogBusRouteScreen({ user, busRoutes }) {
    
    const [busId, setBusId] = useState(null);
    const [busRouteId, setBusRouteId] = useState(null);

    let displayedBusRoutes = [];

    if(user && user.adult_contact  && user.adult_contact.buses[0] && busRoutes && !busId) {
        setBusId(user.adult_contact.buses[0].id);
    }

    function selectBus(event) {
        const selectedBusId = Number(event.target.value);
        setBusId(selectedBusId);
    }

    function selectBusRoute(event) {
        const selectedBusRouteId = Number(event.target.value);
        setBusRouteId(selectedBusRouteId);
    }

    if(busId) {
        displayedBusRoutes = busRoutes.filter((busRoute) => busRoute.bus_id === busId);
    }

    if(busId && displayedBusRoutes.length > 0 && (!busRouteId || !displayedBusRoutes.find((busRoute)=>busRoute.bus_id === busId))) {
        setBusRouteId(displayedBusRoutes[0].id);
    }

    console.log(busId);
    console.log(busRouteId);
    if(busId) {
        return (
            <div>
                <h1>Log Bus Route</h1>
                
                <form>
                    <label>Bus: </label>
                    <select name = "busId" value = {busId} onChange = {selectBus}>
                        {
                        user.adult_contact.buses.map((bus) => <option key = {bus.id} value = {bus.id}>{bus.number}</option>)
                        }
                    </select>
                    <br />
                    <br />

                    <label>Bus route: </label>

                    {busRouteId ? (
                        <select name = "busRouteId" value = {busRouteId} onChange = {selectBusRoute}>
                            {displayedBusRoutes ? displayedBusRoutes.map((busRoute)=><option key = {busRoute.id} value = {busRoute.id}>{busRoute.school.name} - {busRoute.name}</option>) : null}
                        </select>
                    ) : <option disabled>No bus routes available</option>}
                    <br />
                    <br />

                    <button>BEGIN</button>
                </form>

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
