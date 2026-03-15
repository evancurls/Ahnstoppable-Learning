import React, { useState } from "react";
import UnderstandCheck from "../../UnderstandCheck/UnderstandCheck";
import Questions from "../../Questions/Questions";
import TalentBoard from "../../TalentBoard/TalentBoard";
import Header from "../DashboardComponents/Header";

function ClassDashboard({}){
    const today = new Date().toLocaleDateString('en-CA', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });

    const [posts, setPost] = useState([]);
    const [viewDate, setDate] = useState(today);

    function handleDate(event){
        const newDate = event.target.value;
        console.log(event.target.value);
        setDate(newDate);
    }
    return (
        <div className="min-h-screen background flex transition-colors duration-300">
            <main className="flex-1 pb-2">
                <Header />
                <div className="justify-center">
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
                    <UnderstandCheck />
                    <Questions />
                    <TalentBoard />
                </div>
            </main>
            
        </div>
    );
}

export default ClassDashboard;