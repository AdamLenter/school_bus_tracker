import '../App.css';
import React from 'react';

function DailyRouteMessage({ messageInfo, displayTime }) {
    
    return (
        <div>
            <strong>{displayTime(messageInfo.updated_at)}</strong>: {messageInfo.message}
            <br />
            <br />
        </div>
    );
}

export default DailyRouteMessage;
