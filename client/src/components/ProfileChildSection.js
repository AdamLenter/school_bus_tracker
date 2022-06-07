import '../App.css';
import React from 'react';
import ChildProfileInfo from './ChildProfileInfo';

function ProfileChildSection({ students }) {
    
    return (
        <div>
            <br />
            <h2>My Students</h2>
            {students.length > 0 ? 
                students.map((student)=><ChildProfileInfo key = {student.id} student = {student} />) : 
                <p>(No children to display)</p>}
        </div>
    );
}

export default ProfileChildSection;
