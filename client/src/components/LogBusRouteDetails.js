import '../App.css';
import React, { useState } from 'react';
import DailyBusStopLog from './DailyBusStopLog';

function LogBusRouteDetails({ busRouteDetails, dailyRouteInfo, busStops, getDateTime, displayTime }) {
    
    const [dailyRouteMessage, setDailyRouteMessage] = useState("");
    
    function handleEditMessage(event){
        setDailyRouteMessage(event.target.value);
    }

    function handleSubmitMessageForm(event) {
        event.preventDefault();
        console.log(dailyRouteMessage);

        if(dailyRouteMessage !== "") {
            fetch("/daily_route_messages", {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(dailyRouteMessage)
            })
            .then((response) => {
                console.log(response);
                // if (response.ok) {
                //     response.json().then((createdStudent)=>{
                //         let updatedStudents = [...students, createdStudent];
    
                //         setStudents(updatedStudents);
                //         setStudentAddSuccessful(true);
                //         setAddStudentErrors(false);
                //     })
                // } else {
                //   response.json().then((errorData) => setAddStudentErrors(errorData.errors));
                // }
            })
        }
    }

    if(Object.keys(busRouteDetails).length > 0) {
        return (
            <div>
                <strong>School: </strong>{busRouteDetails.school.name}
                <br />
                <strong>Bus Number: </strong>{busRouteDetails.bus.number}
                <br />
                <strong>Route: </strong>{busRouteDetails.name}
                <br />
                <strong>To/From School: </strong>{dailyRouteInfo.to_or_from_school === "to" ? "To" : "From"}
                <br />
                <br />
                <DailyBusStopLog dailyRouteId = {dailyRouteInfo.id} busStops = {busStops} getDateTime = {getDateTime} displayTime = {displayTime} mode = "driver" />

                <form onSubmit = {handleSubmitMessageForm}>
                    <br />
                    <label>Add a message: </label>
                    <input name = "dailyRouteMessage" value = {dailyRouteMessage} onChange = {handleEditMessage} />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
    else {
        return(<h1>Loading...</h1>);
    }
}

export default LogBusRouteDetails;
