import '../App.css';
import React from 'react';

function DisplayErrors({ errors }) {


    return (
        <div className = 'error'>
            <strong>Errors:</strong>
            <br />
            {errors.map((error)=><div key = {error}>{error}</div>)}
            <br />
        </div>
    );
}

export default DisplayErrors;
