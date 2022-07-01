import '../App.css';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddEditStudentForm from './AddEditStudentForm';

function EditStudentForm({ students, setStudents, schools, busRoutes, busStops, updateFormData }) {
    
    const [studentFormData, setStudentFormData] = useState({});
    const [successfulEdit, setSuccessfulEdit] = useState(false);

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
        
        const updatedStudent = {
            id: studentId, 
            first_name: studentFormData.firstName, 
            last_name: studentFormData.lastName, 
            bus_stop_id: studentFormData.busStopId, 
            adult_contact_id: studentInfo.adult_contact_id
        }

        fetch(`/students/${studentId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
            },
        body: JSON.stringify(updatedStudent)
        })
        .then(()=> {
            setStudentFormData(blankFormData);
            setSuccessfulEdit(true);
        })
        
    const updatedStudents = students.map((student)=> {
        if(student.id === studentId) {
            return updatedStudent;
            }
        else {
            return student;
            }
    })

    setStudents(updatedStudents);
    }

    if(!successfulEdit) {
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
    else {
        return (
            <div>
                <h1>Edit Student Information</h1>
                <p><strong>Student successfully edited.</strong></p>
                <p>Click <Link to = "/MyProfile">here</Link> to return to your profile</p>
        </div>
        )
    }

}

export default EditStudentForm;
