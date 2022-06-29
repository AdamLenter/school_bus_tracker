import '../App.css';
import React, { useState } from 'react';
import DisplayErrors from './DisplayErrors';
import { Link, useParams } from 'react-router-dom';
import AddEditStudentForm from './AddEditStudentForm';

function EditStudentForm({ students, setStudents, schools, busRoutes, busStops, updateFormData }) {
    
    const [studentFormData, setStudentFormData] = useState({});
    const params = useParams();
    
    const studentId = Number(params.studentId);
    
    const studentInfo = students.find((student)=>student.id === studentId);
    
    let blankFormData = {}
    
    let studentBusRoute = {};

    if(studentInfo && busStops.length > 0 && Object.keys(studentFormData).length === 0) {

        studentBusRoute = busStops.find((busStop)=>busStop.id === studentInfo.bus_stop_id).bus_route;

        blankFormData = {
            firstName: studentInfo.first_name, 
            lastName: studentInfo.last_name, 
            busStopId: studentInfo.bus_stop_id, 
            busRouteId: studentBusRoute.id, 
            schoolId: studentBusRoute.school_id            
        }
        setStudentFormData(blankFormData);
    }

    function handleSubmitEditStudentForm(event) {
        event.preventDefault();
        console.log("HEllo");
    }
    return (
        <div>
            <h1>Edit Student Information</h1>

            <form onSubmit = {handleSubmitEditStudentForm}>
                <AddEditStudentForm defaultStudentFormData = {blankFormData} studentFormData = {studentFormData} setStudentFormData = {setStudentFormData} schools = {schools} busRoutes = {busRoutes} busStops = {busStops} updateFormData = {updateFormData} />
                <button>Submit</button>
            </form>
        </div>
    );

}

export default EditStudentForm;
