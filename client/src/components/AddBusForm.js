import '../App.css';
import React, { useState } from 'react';
import DisplayErrors from './DisplayErrors';
import { Link } from 'react-router-dom';

function AddBusForm({ user, setUser, buses, updateFormData }) {
    const[addBusErrors, setAddBusErrors] = useState([]);
    const[busAddSuccessful, setBusAddSuccessful] = useState(false);

    const [busId, setBusId] = useState(null);

    let displayedBuses = [];

    if(buses.length > 0) {
        displayedBuses = buses.filter((bus)=>{
            if(user.adult_contact.buses.find((driverBus)=>driverBus.id === bus.id)) {
                return false;
            }
            else {
                return true;
            }
        })
    }

    if(!busId && displayedBuses[0]) {
        setBusId(displayedBuses[0].id);
    }

    function handleSelectBus(event) {
        const updatedBusId = Number(event.target.value);
        setBusId(updatedBusId);
    }
    
    function handleSubmitAddBusForm(event) {
        event.preventDefault();

        let newBusInfo = {
            bus_id: busId, 
            adult_contact_id: user.adult_contact.id
        }
        
        fetch("/driver_buses", {
            method: "POST", 
            headers: {"Content-Type": "application/json"}, 
            body: JSON.stringify(newBusInfo)
        })
        .then((response) => {
            if (response.ok) {
                response.json().then((createdBus)=>{
                    console.log(createdBus);
                    let updatedUser = {...user};
                    let updatedAdultContact = {...user.adult_contact};
                    let updatedBuses = [...user.adult_contact.buses, createdBus.bus];
                    updatedAdultContact.buses = updatedBuses;
                    updatedUser.adult_contact = updatedAdultContact;
                    setUser(updatedUser);
                })
            } else {
              response.json().then((errorData) => setAddBusErrors(errorData.errors));
            }
        })
    }
    
    function handleAddAdditionalBus() {
        console("Hey");
    }

    return (
        <div>
            {/* {addBusErrors.length > 0 ? <DisplayErrors errors = {addBusErrors} /> : null} */}
            <h1>Add a Bus</h1>
    
            {!busAddSuccessful ? (
                <form onSubmit={handleSubmitAddBusForm}>
                    <label>Bus: </label>
                    {buses && buses.length > 0 && busId ? 
                        (<select name = "busId" value = {busId} onChange = {handleSelectBus}>
                            {busId ? 
                                displayedBuses.map((bus) => <option key = {bus.id} value = {bus.id}>{bus.number}</option>) :
                                <option disabled>No buses to display</option>}
                        </select>) : 
                        null}
                    <br />
                    <br />

                    {busId ? <button type = "submit">Submit</button> : <button disabled>Submit</button>}
                </form>
                ) : (
                <div>
                    <h1>Add a Student</h1>
                    <p><strong>New student successfully added.</strong></p>
                    <p>Click <Link to = "/MyProfile">here</Link> to return to your profile</p>
                    <p>Click <Link to = "/AddBusForm" onClick = {handleAddAdditionalBus}>here</Link> to add another bus</p>
                </div>
                )}

            <br />
            <p>Click <Link to = "/MyProfile">here</Link> to return to your profile</p>
        </div>
    );
}

export default AddBusForm;
