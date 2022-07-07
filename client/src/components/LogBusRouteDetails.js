import '../App.css';
import React, { useState } from 'react';
import DailyBusStopLog from './DailyBusStopLog';
import DailyRouteMessage from './DailyRouteMessage';

function LogBusRouteDetails({ busRouteDetails, dailyRouteInfo, setDailyRouteInfo, busStops, completedBusStops, getCompletedBusStops, setCompletedBusStops, getDateTime, displayTime }) {
    const [dailyRouteMessage, setDailyRouteMessage] = useState("");

    function handleEditMessage(event){
        setDailyRouteMessage(event.target.value);
    }

    function handleSubmitMessageForm(event) {
        event.preventDefault();

        const dailyRouteMessageForDb = {
            message: dailyRouteMessage, 
            daily_route_id: dailyRouteInfo.id, 
            message_time: getDateTime(new Date())
        }
        if(dailyRouteMessage !== "") {
            fetch("/daily_route_messages", {
                method: "POST", 
                headers: {"Content-Type": "application/json"}, 
                body: JSON.stringify(dailyRouteMessageForDb)
            })
            .then((response) => {
                if (response.ok) {
                    response.json().then((newMessage)=>{
                        let updatedDailyRouteInfo = {...dailyRouteInfo};
                        updatedDailyRouteInfo.daily_route_messages = [...updatedDailyRouteInfo.daily_route_messages, newMessage];
    
                        setDailyRouteInfo(updatedDailyRouteInfo);
                        setDailyRouteMessage("");
                    })
                }
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
                <DailyBusStopLog dailyRouteId = {dailyRouteInfo.id} busStops = {busStops} completedBusStops = {completedBusStops} getCompletedBusStops = {getCompletedBusStops} setCompletedBusStops = {setCompletedBusStops} getDateTime = {getDateTime} displayTime = {displayTime} mode = "driver" />
                <br />
                <br />

                <h2>Messages:</h2>
                {dailyRouteInfo.daily_route_messages.length > 0 ? dailyRouteInfo.daily_route_messages.map((dailyRouteMessage)=><DailyRouteMessage key = {dailyRouteMessage.id} messageInfo = {dailyRouteMessage} displayTime = {displayTime} />) : "(no messages to display)"}

                <form onSubmit = {handleSubmitMessageForm}>
                    <br />
                    <label>Add a message: </label>
                    <input name = "dailyRouteMessage" value = {dailyRouteMessage} onChange = {handleEditMessage} />
                    <br />
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
