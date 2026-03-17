import React from "react"

function ViewLogs(){
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