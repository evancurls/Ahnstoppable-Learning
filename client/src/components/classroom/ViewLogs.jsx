import React, { useState } from "react"

function ViewLogs(){

    const today = new Date().toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    const [viewDate, setDate] = useState(today);

    function handleDate(event){
        const newDate = event.target.value;
        console.log(event.target.value);
        setDate(newDate);
    }

    return (
        <div>
            <label 
                htmlFor="viewing-date"
                className="std-text"
            >
                Now Viewing Logs for:
            </label>
            <input
                onChange={handleDate}
                className="background"
                type="date"
                id="viewing-date"
                name="trip-start"
                value={viewDate}
                min="2026-01-01"
                max={today} 
            />
        </div>
    );
}

export default ViewLogs;