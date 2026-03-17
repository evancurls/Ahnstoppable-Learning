import React, { useState } from "react";
import UnderstandCheck from "../components/classroom/UnderstandCheck";
import Questions from "../components/classroom/questions/Questions";
import TalentBoard from "../components/classroom/TalentBoard";
import Header from "../components/homepage/Header";

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
                    <ViewLogs />
                    <UnderstandCheck />
                    <Questions />
                    <TalentBoard />
                </div>
            </main>
            
        </div>
    );
}

export default ClassDashboard;