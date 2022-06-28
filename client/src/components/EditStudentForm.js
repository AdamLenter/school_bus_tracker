import '../App.css';
import React from 'react';
import { useParams } from 'react-router-dom';

function EditStudentForm() {
    const {studentId} = useParams();
    console.log(studentId);
    return (
        <div>
            <p>Hi</p>
        </div>
    );
}

export default EditStudentForm;
