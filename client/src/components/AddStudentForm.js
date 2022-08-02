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

    let firstBusRoute = {};
    let firstBusStop = {};

    let updatedStudentFormData = {...addStudentFormData};

    if(!addStudentFormData.busStopId && busStops.length > 0) {
        //All of the arrays are set. We ned to set the defaults:
        updatedStudentFormData.schoolId = schools[0].id;

        firstBusRoute = busRoutes.find((busRoute)=>busRoute.school_id === updatedStudentFormData.schoolId);

        updatedStudentFormData.busRouteId = firstBusRoute.id;

        firstBusStop = busStops.find((busStop)=>busStop.bus_route_id === updatedStudentFormData.busRouteId); 

        updatedStudentFormData.busStopId = firstBusStop.id;

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
                {/* <p>Click <Link to = "/AddStudentForm">here</Link> to add another student.</p> */}
            </div>
        )
    }
}

export default AddStudentForm;
