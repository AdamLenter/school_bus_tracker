import '../App.css';
import React, { useState } from 'react';

function AddStudentForm({ user, schools, busRoutes, updateFormData }) {
    const [addStudentFormData, setAddStudentFormData] = useState({
        firstName: "",
        lastName: "", 
        schoolId: null, 
        busRouteId: null
    })
    
    function handleAddStudentForm(event) {
        event.preventDefault();
    }

    function handleAddStudentFormChange(event) {
        const updatedAddStudentFormData = updateFormData(addStudentFormData, event);

        if(event.target.name === "schoolId") {
            updatedAddStudentFormData.busRouteId = updateDefaultBusRouteId(Number(event.target.value));
        }
        setAddStudentFormData(updatedAddStudentFormData);
    }


    function updateDefaultBusRouteId(selectedSchoolId) {
        return busRoutes.find((busRoute)=>busRoute.school_id === selectedSchoolId).id;
    }

    if(schools.length > 0 && busRoutes.length > 0 && !addStudentFormData.busRouteId)
        {
        let updatedAddStudentFormData = {...addStudentFormData};

        updatedAddStudentFormData.schoolId = schools[0].id;

        updatedAddStudentFormData.busRouteId = updateDefaultBusRouteId(updatedAddStudentFormData.schoolId);

        setAddStudentFormData(updatedAddStudentFormData);
        }


console.log(addStudentFormData);
    return (
        <div>
            <h1>Add a Student</h1>
            <form onSubmit={handleAddStudentForm}>
                <label>First name: </label>
                <input name = "firstName" value = {addStudentFormData.firstName} onChange = {handleAddStudentFormChange} />
                <br />
                <br />

                <label>Last name: </label>
                <input name = "lastName" value = {addStudentFormData.lastName} onChange = {handleAddStudentFormChange} />
                <br />
                <br />

                <label>School: </label>
                <select name = "schoolId" value = {addStudentFormData.schoolId} onChange = {handleAddStudentFormChange}>
                    {addStudentFormData.schoolId ? 
                        schools.map((school) => <option key = {school.id} value = {school.id}>{school.name}</option>) :
                        <option disabled>Loading...</option>}
                </select>
                <br />
                <br />

                <label>Bus Route: </label>
                <select name = "busRouteId" value = {addStudentFormData.busRouteId} onChange = {handleAddStudentFormChange}>
                    {addStudentFormData.busRouteId ? 
                        busRoutes.map((busRoute) => {
                            if(busRoute.school_id === addStudentFormData.schoolId) {
                                return <option key = {busRoute.id} value = {busRoute.id}>{busRoute.name}</option>
                            }
                            else {
                                return null;
                            }
                        }) :
                        <option disabled>Loading...</option>}
                </select>
                <br />
                <br />

            </form>
        </div>
    );
}

export default AddStudentForm;
