import '../App.css';
import React from 'react';
import ChildProfileInfo from './ChildProfileInfo';
import { Link } from 'react-router-dom';

function ProfileChildSection({ students }) {
    
    return (
        <div>
            <br />
            <h2>My Students</h2>
            {students.length > 0 ? 
                students.map((student)=>(
                    <div key = {student.id} >
                        <ChildProfileInfo student = {student} />
                        <br />
                    </div>)) : 
                <p>(No children to display)</p>}

            <br />
            Click <Link to = "/AddStudentForm">here</Link> to add a student.
        </div>
    );
}

export default ProfileChildSection;
