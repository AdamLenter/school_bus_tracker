import '../App.css';
import React, { useState } from 'react';

function BeginLoggingBusRouteForm({ user, busRoutes, updateFormData }) {

    const [logRouteFormData, setLogRouteFormData] = useState({
        busId: null, 
        busRouteId: null, 
        toOrFromSchool: "to"
    });


    let displayedBusRoutes = [];

    if(user && user.adult_contact  && user.adult_contact.buses[0] && busRoutes && !logRouteFormData.busId) {
        const busId = user.adult_contact.buses[0].id;
        let updatedFormData = {...logRouteFormData};
        updatedFormData.busId = busId;
        setLogRouteFormData(updatedFormData);
    }

    function handleFormChange(event) {
        const newFormData = updateFormData(logRouteFormData, event);
        setLogRouteFormData(newFormData);
    }

    function handleChangeToOrFromSchool(event) {
        let updatedFormData = {...logRouteFormData}
        updatedFormData.toOrFromSchool = event.target.value;
        setLogRouteFormData(updatedFormData);
    }
   
    if(logRouteFormData.busId) {
        displayedBusRoutes = busRoutes.filter((busRoute) => busRoute.bus_id === logRouteFormData.busId);
    }

    if(logRouteFormData.busId && displayedBusRoutes.length > 0 && (!logRouteFormData.busRouteId || !displayedBusRoutes.find((busRoute)=>busRoute.bus_id === logRouteFormData.busId))) {
        const busRouteId = displayedBusRoutes[0].id;
        let updatedFormData = {...logRouteFormData};
        updatedFormData.busRouteId = busRouteId;
        setLogRouteFormData(updatedFormData);
    }
    
    return (
        <form>
            <label>Bus: </label>
            <select name = "busId" value = {logRouteFormData.busId} onChange = {handleFormChange}>
                {
                user.adult_contact.buses.map((bus) => <option key = {bus.id} value = {bus.id}>{bus.number}</option>)
                }
            </select>
            <br />
            <br />

            <label>Bus route: </label>

            {logRouteFormData.busRouteId ? (
                <select name = "busRouteId" value = {logRouteFormData.busRouteId} onChange = {handleFormChange}>
                    {displayedBusRoutes ? displayedBusRoutes.map((busRoute)=><option key = {busRoute.id} value = {busRoute.id}>{busRoute.school.name} - {busRoute.name}</option>) : null}
                </select>
            ) : <option disabled>No bus routes available</option>}
            <br />
            <br />

            <label>To/from school: </label>
            <select name = "toOrFromSchool" value = {logRouteFormData.toOrFromSchool} onChange = {handleChangeToOrFromSchool}>
                <option value = "to">To</option>
                <option value = "from">From</option>
            </select>
            <br />
            <br />

            <button>BEGIN</button>
        </form>
    );
}

export default BeginLoggingBusRouteForm;
