import '../App.css';
import React from 'react';

function ChildProfileInfo({ student }) {
    
    return (
        <div>
            <strong>First name: </strong>{student.first_name}
            <br />
            <strong>Last name: </strong>{student.last_name}
        </div>
    );
}

export default ChildProfileInfo;
