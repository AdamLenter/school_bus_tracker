import '../App.css';
import React, { useState } from 'react';
import DisplayErrors from './DisplayErrors';
import { Link, useParams } from 'react-router-dom';

function AddEditStudentForm({ defaultStudentFormData, studentFormData, setStudentFormData, schools, busRoutes, busStops, updateFormData }) {

    function updateDefaultBusRouteId(selectedSchoolId) {
        return busRoutes.find((busRoute)=>busRoute.school_id === selectedSchoolId).id;
    }

    function updateDefaultBusStopId(selectedBusStopId) {
        return busStops.find((busStop)=>busStop.bus_route_id === selectedBusStopId).id;
    }

    function handleStudentFormChange(event) {
        let updatedStudentFormData = updateFormData(studentFormData, event);

        if(event.target.name === "schoolId") {
            updatedStudentFormData.busRouteId = updateDefaultBusRouteId(Number(event.target.value));
            updatedStudentFormData.busStopId = updateDefaultBusStopId(Number(updatedStudentFormData.busRouteId));
        }

        else if(event.target.name === "busRouteId") {
            updatedStudentFormData.busStopId = updateDefaultBusStopId(Number(updatedStudentFormData.busRouteId));
        }
        setStudentFormData(updatedStudentFormData);
    }
    
    if(Object.keys(defaultStudentFormData).length > 0 && Object.keys(studentFormData).length === 0) {
        setStudentFormData(defaultStudentFormData);
    }

    if(studentFormData.schoolId && studentFormData.busRouteId && studentFormData.busStopId) {
        return (
            <div>
                <label>First name: </label>
                <input name = "firstName" value = {studentFormData.firstName} onChange = {handleStudentFormChange} />
                <br />
                <br />

                <label>Last name: </label>
                <input name = "lastName" value = {studentFormData.lastName} onChange = {handleStudentFormChange} />
                <br />
                <br />

                <label>School: </label>
                <select name = "schoolId" value = {studentFormData.schoolId} onChange = {handleStudentFormChange}>
                    {studentFormData.schoolId ? 
                        schools.map((school) => <option key = {school.id} value = {school.id}>{school.name}</option>) :
                        <option disabled>Loading...</option>}
                </select>
                <br />
                <br />

                <label>Bus Route: </label>
                <select name = "busRouteId" value = {studentFormData.busRouteId} onChange = {handleStudentFormChange}>
                    {studentFormData.busRouteId ? 
                        busRoutes.map((busRoute) => {
                            if(busRoute.school_id === studentFormData.schoolId) {
                                return <option key = {busRoute.id} value = {busRoute.id}>{busRoute.name}</option>
                            }
                            else {
                                return null;
                            }
                        }) :
                        <option disabled>Loading...</option>}
                </select>
                <br />
                <br />

                <label>Bus Stop: </label>
                <select name = "busStopId" value = {studentFormData.busStopId} onChange = {handleStudentFormChange}>
                    {studentFormData.busStopId ? 
                        busStops.map((busStop) => {
                            if(busStop.bus_route_id === studentFormData.busRouteId) {
                                return <option key = {busStop.id} value = {busStop.id}>{busStop.location_description}</option>
                            }
                            else {
                                return null;
                            }
                        }) :
                        <option disabled>Loading...</option>}
                </select>
                <br />
                <br />
            </div>
        );
    }
    else {
        return(
            <h1>Loading...</h1>
        )
    }

}

export default AddEditStudentForm;
