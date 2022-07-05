import '../App.css';
import React, { useState } from 'react';
import DisplayErrors from './DisplayErrors';
import { Link } from 'react-router-dom';
import AddEditStudentForm from './AddEditStudentForm';

function AddStudentForm({ user, students, setStudents, schools, busRoutes, busStops, updateFormData }) {
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
                    let updatedStudents = [...students, createdStudent];

                    setStudents(updatedStudents);
                    setStudentAddSuccessful(true);
                    setAddStudentErrors(false);
                })
            } else {
              response.json().then((errorData) => setAddStudentErrors(errorData.errors));
            }
        })
    }

    let schoolBusRoutes = [];

    let busRouteStops = [];


    let defaultSchoolId;
    let defaultBusRouteId;
    let defaultBusStopId;

    let updatedStudentFormData = {...addStudentFormData};

    if(!addStudentFormData.busStopId && schools.length > 0 && busRoutes.length > 0 && busStops.length > 0) {
        //All of the arrays are set. We ned to set the defaults:
        defaultSchoolId = schools[0].id;

        schoolBusRoutes = busRoutes.filter((busRoute)=>busRoute.school_id === defaultSchoolId);

        defaultBusRouteId = schoolBusRoutes[0].id;

        busRouteStops = busStops.filter((busStop)=>busStop.bus_route_id === defaultBusRouteId); 

        defaultBusStopId = busRouteStops[0].id;

        updatedStudentFormData.schoolId = defaultSchoolId; 
        updatedStudentFormData.busRouteId = defaultBusRouteId; 
        updatedStudentFormData.busStopId = defaultBusStopId; 

        setAddStudentFormData(updatedStudentFormData);
    }

    if(!studentAddSuccessful) {
        return (
            <div>
                <h1>Add a Student</h1>
                {addStudentErrors.length > 0 ? <DisplayErrors errors = {addStudentErrors} /> : null}
                <form onSubmit={handleSubmitAddStudentForm}>
                    <AddEditStudentForm defaultStudentFormData = {blankFormData} studentFormData = {addStudentFormData} setStudentFormData = {setAddStudentFormData} schools = {schools} busRoutes = {busRoutes} busStops = {busStops} updateFormData = {updateFormData} />
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
                {/* <p>Click <Link to = "/AddStudentForm" onClick = {handleAddAdditionalUser}>here</Link> to add another student.</p> */}
            </div>
        )
    }
}

export default AddStudentForm;
