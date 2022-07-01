import '../App.css';
import React from 'react';
import ChildProfileInfo from './ChildProfileInfo';
import { Link } from 'react-router-dom';

function ProfileChildSection({ students, setStudents, busStops }) {
    
    function deleteStudent(event) {
        const updatedStudents = students.filter((student)=>student.id !== Number(event.target.value));
        setStudents(updatedStudents);

        fetch(`/students/${event.target.value}`, {
            method: "delete", 
            headers: {"Content-Type": "application/json"}
        })
    }
    return (
        <div>
            <br />
            <h2>My Students</h2>
            {students.length > 0 ? 
                students.map((student)=>(
                    <div className = "box" key = {student.id} >
                        <ChildProfileInfo student = {student} busStops = {busStops} />
                        <br />
                        Click <Link to = {`/EditStudentForm/${student.id}`}>here</Link> to edit
                        <br />
                        <br />
                        <button onClick = {deleteStudent} value = {student.id}>Stop Tracking</button>
                        <br />
                    </div>)) : 
                <p>(No children to display)</p>}

            <br />
            Click <Link to = "/AddStudentForm">here</Link> to add a student
        </div>
    );
}

export default ProfileChildSection;
