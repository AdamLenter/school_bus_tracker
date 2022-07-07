import '../App.css';
import React from 'react';

function DailyRouteMessage({ messageInfo, displayTime }) {
    
    return (
        <div>
            <strong>{displayTime(messageInfo.message_time)}</strong>: {messageInfo.message}
            <br />
            <br />
        </div>
    );
}

export default DailyRouteMessage;
