import '../App.css';
import React, { useState } from 'react';
import DisplayErrors from './DisplayErrors';
import { Link } from 'react-router-dom';

function AddStudentForm({ user, setUser, schools, busRoutes, busStops, updateFormData }) {
    const[addStudentErrors, setAddStudentErrors] = useState([]);
    const[studentAddSuccessful, setStudentAddSuccessful] = useState(false);

    const blankFormData = {
        firstName: "",
        lastName: "", 
        schoolId: null, 
        busRouteId: null, 
        busStopId: null
    };

    const [addStudentFormData, setAddStudentFormData] = useState(blankFormData);

    function handleSubmitAddStudentForm(event) {
        event.preventDefault();

        let newStudentInfo = {
            first_name: addStudentFormData.firstName, 
            last_name: addStudentFormData.lastName, 
            bus_stop_id: addStudentFormData.busStopId, 
            adult_contact_id: user.adult_contact.id
        }
        
        fetch("/students", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(newStudentInfo)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((createdStudent)=>{
                    let updatedUser = {...user};
                    let updatedStudents = [...user.students, createdStudent];

                    updatedUser.students = updatedStudents;
                    setUser(updatedUser);
                    setStudentAddSuccessful(true);
                    setAddStudentErrors(false);
                })
            } else {
              response.json().then((errorData) => setAddStudentErrors(errorData.errors));
            }
        })
    }

    function handleAddStudentFormChange(event) {
        const updatedAddStudentFormData = updateFormData(addStudentFormData, event);

        if(event.target.name === "schoolId") {
            updatedAddStudentFormData.busRouteId = updateDefaultBusRouteId(Number(event.target.value));
            updatedAddStudentFormData.busStopId = updateDefaultBusStopId(Number(updatedAddStudentFormData.busRouteId));
        }

        else if(event.target.name === "busRouteId") {
            updatedAddStudentFormData.busStopId = updateDefaultBusStopId(Number(updatedAddStudentFormData.busRouteId));
        }
        setAddStudentFormData(updatedAddStudentFormData);
    }


    function updateDefaultBusRouteId(selectedSchoolId) {
        return busRoutes.find((busRoute)=>busRoute.school_id === selectedSchoolId).id;
    }

    function updateDefaultBusStopId(selectedBusStopId) {
        return busStops.find((busStop)=>busStop.bus_route_id === selectedBusStopId).id;
    }

    function handleAddAdditionalUser() {
        setAddStudentFormData(blankFormData);
        setStudentAddSuccessful(false);
    }

    if(schools.length > 0 && busRoutes.length > 0 && busStops.length > 0 && !addStudentFormData.busStopId)
        {
        let updatedAddStudentFormData = {...addStudentFormData};

        updatedAddStudentFormData.schoolId = schools[0].id;

        updatedAddStudentFormData.busRouteId = updateDefaultBusRouteId(updatedAddStudentFormData.schoolId);

        updatedAddStudentFormData.busStopId = updateDefaultBusStopId(updatedAddStudentFormData.busRouteId);

        setAddStudentFormData(updatedAddStudentFormData);
        }

    if(!studentAddSuccessful) {
        return (
            <div>
                <h1>Add a Student</h1>
                {addStudentErrors.length > 0 ? <DisplayErrors errors = {addStudentErrors} /> : null}
                <form onSubmit={handleSubmitAddStudentForm}>
                    <label>First name: </label>
                    <input name = "firstName" value = {addStudentFormData.firstName} onChange = {handleAddStudentFormChange} />
                    <br />
                    <br />

                    <label>Last name: </label>
                    <input name = "lastName" value = {addStudentFormData.lastName} onChange = {handleAddStudentFormChange} />
                    <br />
                    <br />

                    <label>School: </label>
                    <select name = "schoolId" value = {addStudentFormData.schoolId} onChange = {handleAddStudentFormChange}>
                        {addStudentFormData.schoolId ? 
                            schools.map((school) => <option key = {school.id} value = {school.id}>{school.name}</option>) :
                            <option disabled>Loading...</option>}
                    </select>
                    <br />
                    <br />

                    <label>Bus Route: </label>
                    <select name = "busRouteId" value = {addStudentFormData.busRouteId} onChange = {handleAddStudentFormChange}>
                        {addStudentFormData.busRouteId ? 
                            busRoutes.map((busRoute) => {
                                if(busRoute.school_id === addStudentFormData.schoolId) {
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
                    <select name = "busStopId" value = {addStudentFormData.busStopId} onChange = {handleAddStudentFormChange}>
                        {addStudentFormData.busStopId ? 
                            busStops.map((busStop) => {
                                if(busStop.bus_route_id === addStudentFormData.busRouteId) {
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
                    <button type = "submit">Submit</button>
                </form>
                <br />
                <p>Click <Link to = "/MyProfile">here</Link> to return to your profile</p>
            </div>
        );
    }
    else {
        return(
            <div>
                <h1>Add a Student</h1>
                <p><strong>New student successfully added.</strong></p>
                <p>Click <Link to = "/MyProfile">here</Link> to return to your profile</p>
                <p>Click <Link to = "/AddStudentForm" onClick = {handleAddAdditionalUser}>here</Link> to add another student.</p>
            </div>
        )
    }
}

export default AddStudentForm;
