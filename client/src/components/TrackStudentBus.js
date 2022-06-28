import '../App.css';
import React, { useState } from 'react';
import StudentDailyBusInfo from './StudentDailyBusInfo';

function TrackStudentBus({ students, busRoutes, currentDate, updateFormData, busStops, getDateTime, displayTime }) {

    const [trackBusFormData, setTrackBusFormData] = useState({
        studentId: null, 
        toOrFromSchool: "to"
    });

    const [searchedBusInfo, setSearchedBusInfo] = useState({
        student: {}, 
        busRoute: {}
    });
    
    const [dailyBusRoute, setDailyBusRoute] = useState({});
    
    function handleTrackBusFormChange(event){
        const updatedTrackBusFormData = updateFormData(trackBusFormData, event);

        setTrackBusFormData(updatedTrackBusFormData);
    }

    function handleSelectToOrFromSchool(event) {
        let updatedTrackBusFormData = {...trackBusFormData};
        updatedTrackBusFormData.toOrFromSchool = event.target.value;
        setTrackBusFormData(updatedTrackBusFormData);
    }

    function submitTrackBusForm(event) {
        event.preventDefault();

        setDailyBusRoute({});

        const searchedStudent = students.find((studentInfo)=>studentInfo.id === trackBusFormData.studentId);
        
        const searchedStudentBusRoute = busRoutes.find((busRouteInfo)=>busRouteInfo.bus_stops.find((busStopInfo)=>busStopInfo.id === searchedStudent.bus_stop_id));
        
        const updatedSearchedBusInfo = {
            student: searchedStudent, 
            busRoute: searchedStudentBusRoute
        }
        
        const fetchUrl = `/daily_route/${updatedSearchedBusInfo.busRoute.id}/${currentDate}/${trackBusFormData.toOrFromSchool}`;

        fetch(fetchUrl)
            .then((r)=>r.json())
            .then((dailyBusRouteInfo)=>{
                if(dailyBusRouteInfo) {
                    setDailyBusRoute(dailyBusRouteInfo);
                }
            });

        setSearchedBusInfo(updatedSearchedBusInfo);
    }

    if(students.length > 0 && !trackBusFormData.studentId) {
        let updatedTrackBusFormData = {...trackBusFormData};
        updatedTrackBusFormData.studentId = students[0].id;
        setTrackBusFormData(updatedTrackBusFormData);
    }
    
    if(students.length > 0 && busRoutes.length > 0 && trackBusFormData.studentId) {
        return (
            <div>
                <h1>Track Student Bus</h1>
                <form onSubmit = {submitTrackBusForm}>
                    <label>Student: </label>
                    <select name = "studentId" value = {trackBusFormData.studentId} onChange = {handleTrackBusFormChange}>
                        {students.map((student) => <option key = {student.id} value = {student.id}>{student.first_name} {student.last_name}</option>)}
                    </select>
                    <br />
                    
                    <label>To or from school: </label>
                    <select name = "toOrFromSchool" value = {trackBusFormData.toOrFromSchool} onChange = {handleSelectToOrFromSchool}>
                        <option value = "to">To</option>
                        <option value = "from">From</option>
                    </select>
                    <br />
                    <button type = "submit">Submit</button>
                </form>
                <br />
                {searchedBusInfo.student.first_name ? <StudentDailyBusInfo student = {searchedBusInfo.student} busRoute = {searchedBusInfo.busRoute} dailyBusRoute = {dailyBusRoute} busStops = {busStops} getDateTime = {getDateTime} displayTime = {displayTime} /> : null}
            </div>
        );
    }
    else {
        return(<h1>Loading...</h1>)
    }
}

export default TrackStudentBus;
